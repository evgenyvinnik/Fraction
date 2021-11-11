import express from "express";

import database from './db';
import {ApplicationStatus} from './db/DATABASE';

const app = express();
app.use(express.json());

app.get("/applications", async (req, res) => {
  try {
    const applications = await database.fetchApplications();
    return res.json(applications);
  } catch (err) {
    return res.status(500).send();
  }
})

app.get("/application/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!id && id !== 0) {
    return res.status(400).send();
  }
  try {
    const application = await database.fetchApplication(id);
    if (!application) {
      return res.status(404).send();
    }
    return res.json(application);
  } catch (err) {
    return res.status(500).send();
  }
})

app.get("/users", async (req, res) => {
  try {
    const users = await database.fetchUsers();
    res.json(users);
  } catch (err) {
    return res.status(500).send();
  }
})

app.get("/user/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!id && id !== 0) {
    return res.status(400).send();
  }
  try {
    const user = await database.fetchUser(id);
    if (!user) {
      return res.status(404).send();
    }
    res.json(user);
  } catch (err) {
    return res.status(500).send();
  }
})

app.get("/user/:id/applications", async (req, res) => {
  const id = Number(req.params.id);
  if (!id && id !== 0) {
    return res.status(400).send();
  }
  try {
    const applications = await database.fetchApplicationsForUser(id);
    if (!applications) {
      return res.status(404).send();
    }
    res.json(applications);
  } catch (err) {
    if (err.message === "Missing user") {
      return res.status(404).send();
    }
    return res.status(500).send();
  }
})

app.post("/application/:id", async (req, res) => {
  const id = Number(req.params.id);
  if (!id && id !== 0) {
    return res.status(400).send();
  }
  const status = req.body?.status;
  if (!status || !Object.values(ApplicationStatus).includes(status)) {
    return res.status(400).send();
  }
  try {
    const applications = await database.updateApplicationStatus(id, status);
    if (!applications) {
      return res.status(404).send();
    }
    res.json(applications);
  } catch (err) {
    if (err.message === "Missing application") {
      return res.status(404).send();
    }
    return res.status(500).send();
  }
})

app.listen(3001, () => console.log("Listening to port 3001"));
