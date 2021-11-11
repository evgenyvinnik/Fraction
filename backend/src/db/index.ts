import DATABASE, {Application, ApplicationStatus, DatabaseT, User} from './DATABASE';
import { sleep } from '../utils/sleep';

/**
 * The in-memory "database". Don't worry about saving the changes to the database across program restarts.
 *
 * The database is supposed to be slow and error-prone. Your requests to the database will fail
 * about 20% of the time.
 *
 * You are welcome to add new function if you want to fetch the data in a different format,
 * but if you do add any new function, please include the sleep and the fuzzFail to it.
 */
export class Database {
  private db: DatabaseT;

  constructor() {
    this.db = {...DATABASE};
  }

  fetchApplications = async (): Promise<Application[]> => {
    await sleep(250);
    return Object.values(this.db.applications);
  }

  fetchUsers = async (): Promise<User[]> => {
    await sleep(250);
    return Object.values(this.db.users);
  }

  fetchUser = async (id: number): Promise<User> => {
    await sleep(250);
    return this.db.users[id];
  }

  fetchApplication = async (id: number): Promise<Application> => {
    await sleep(250);
    return this.db.applications[id];
  }

  fetchApplicationsForUser = async (id: number): Promise<Application[]> => {
    await sleep(250);
    const user = this.db.users[id];
    if (!user) {
      throw new Error("Missing user");
    }
    return user.applications.map((applicationID: number) => this.db.applications[applicationID]);
  }

  updateApplicationStatus = async (id: number, status: ApplicationStatus): Promise<Application> => {
    await sleep(250);

    const application = this.db.applications[id];
    if (!application) {
      throw new Error("Missing application");
    }
    application.status = status;
    this.db.applications[id] = application;
    return application;
  }
}

const database = new Database();
export default database;
