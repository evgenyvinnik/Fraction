import React, { useState } from "react";
import { User, Application, ApplicationStatus } from "./interfaces";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { statusToText, amountToText, statusToColor } from "./utils";
import Stack from "@mui/material/Stack";
import axios from "axios";

interface AddressPanelProps {
  application: Application | null;
  applicant: User;
}

export const AddressPanel = ({ application, applicant }: AddressPanelProps) => {
  const [showChangeState, setShowChangeState] = useState(false);

  const onChangeStateClick = (event: any) => {
    setShowChangeState(true);
  };

  const onSetStateClick = (newState: ApplicationStatus) => {
    application!.status = newState;
    axios
      .post(`http://localhost:3001/application/${application!.id}`, application)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    setShowChangeState(false);
  };

  const onCancelClick = (event: any) => {
    setShowChangeState(false);
  };

  return (
    <Box>
      <Link gutterBottom variant="h6" component="div">
        {application!.address.streetNumber} {application!.address.street}
        {application!.address.premises
          ? ", " + application!.address.premises
          : null}
        {", "} {application!.address.city}
        {", "}
        {application!.address.province}
        {", "}
        {application!.address.country}
      </Link>

      <Typography variant="h6">
        Requested: <b>{amountToText(application!.requestedAmount)}</b>
      </Typography>
      <Typography variant="h6">
        Created:{" "}
        {new Date(application!.created).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Typography>
      {applicant ? (
        <Typography variant="h6">
          Applicant: {applicant!.firstName} {applicant!.lastName}
        </Typography>
      ) : null}
      <Typography component="span" variant="h6">
        Status:{" "}
      </Typography>
      <Typography
        component="span"
        variant="h6"
        style={{
          color: statusToColor(application!.status),
          fontWeight: "bold",
        }}
      >
        {statusToText(application!.status)}
      </Typography>

      <Stack
        spacing={1}
        style={{
          marginTop: "1.5rem",
        }}
      >
        {showChangeState ? null : (
          <Link
            href="#"
            onClick={onChangeStateClick}
            variant="h6"
            style={{
              color: "#82C882",
              fontWeight: "bold",
            }}
          >
            Change Status
          </Link>
        )}
        {showChangeState ? (
          <Link
            href="#"
            onClick={() => {
              onSetStateClick(ApplicationStatus.DRAFT);
            }}
            style={{
              color: "#4D4D4D",
            }}
            variant="h6"
          >
            Draft
          </Link>
        ) : null}

        {showChangeState ? (
          <Link
            href="#"
            onClick={() => {
              onSetStateClick(ApplicationStatus.IN_PROGRESS);
            }}
            style={{
              color: "#4D4D4D",
            }}
            variant="h6"
          >
            In Progress
          </Link>
        ) : null}

        {showChangeState ? (
          <Link
            href="#"
            onClick={() => {
              onSetStateClick(ApplicationStatus.CLOSED);
            }}
            style={{
              color: "#4D4D4D",
            }}
            variant="h6"
          >
            Closed
          </Link>
        ) : null}
        {showChangeState ? (
          <Link
            href="#"
            onClick={() => {
              onSetStateClick(ApplicationStatus.REJECTED);
            }}
            style={{
              color: "#4D4D4D",
            }}
            variant="h6"
          >
            Rejected
          </Link>
        ) : null}
        {showChangeState ? (
          <Link
            href="#"
            onClick={onCancelClick}
            variant="h6"
            style={{
              color: "#ED5B5D",
            }}
          >
            Cancel
          </Link>
        ) : null}
      </Stack>
    </Box>
  );
};
