import React, { useState } from "react";
import { User, Application, ApplicationStatus } from "./interfaces";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { statusToText, amountToText } from "./utils";
import Stack from "@mui/material/Stack";
import axios from "axios";

interface AddressPanelProps {
  application: Application | null;
  applicant: User | undefined;
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
      <Typography gutterBottom variant="subtitle1" component="div">
        {application!.address.streetNumber} {application!.address.street}
        {application!.address.premises
          ? ", " + application!.address.premises
          : null}
        {", "} {application!.address.city}
        {", "}
        {application!.address.province}
        {", "}
        {application!.address.country}
      </Typography>

      <Typography sx={{ cursor: "pointer" }} variant="body2">
        Requested: <b>{amountToText(application!.requestedAmount)}</b>
      </Typography>
      <Typography sx={{ cursor: "pointer" }} variant="body2">
        Created:{" "}
        {new Date(application!.created).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </Typography>
      {applicant ? (
        <Typography sx={{ cursor: "pointer" }} variant="body2">
          Applicant: {applicant!.firstName} {applicant!.lastName}
        </Typography>
      ) : null}
      <Typography sx={{ cursor: "pointer" }} variant="body2">
        Status:{statusToText(application!.status)}
      </Typography>
      <Stack spacing={1}>
        {showChangeState ? null : (
          <Link href="#" onClick={onChangeStateClick} variant="inherit">
            Change Status
          </Link>
        )}

        {showChangeState ? (
          <Link
            href="#"
            onClick={() => {
              onSetStateClick(ApplicationStatus.DRAFT);
            }}
            variant="inherit"
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
            variant="inherit"
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
            variant="inherit"
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
            variant="inherit"
          >
            Rejected
          </Link>
        ) : null}
        {showChangeState ? (
          <Link href="#" onClick={onCancelClick} variant="inherit">
            Cancel
          </Link>
        ) : null}
      </Stack>
    </Box>
  );
};
