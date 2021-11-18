import { ApplicationStatus, User, Application } from "./interfaces";

export const randomColor = () => {
  const colors = ["#ED5B5D", "#F4BE0A", "#82C882", "#5B8DED", "#ED875B"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const statusToText = (status: ApplicationStatus) => {
  switch (status) {
    case ApplicationStatus.DRAFT:
      return "Draft";
    case ApplicationStatus.IN_PROGRESS:
      return "In progress";
    case ApplicationStatus.CLOSED:
      return "Closed";
    case ApplicationStatus.REJECTED:
      return "Rejected";
    default:
      return "Unknown";
  }
};

export const statusToColor = (status: ApplicationStatus) => {
  switch (status) {
    case ApplicationStatus.DRAFT:
      return "#4D4D4D";
    case ApplicationStatus.IN_PROGRESS:
      return "#82C882";
    case ApplicationStatus.CLOSED:
      return "#F4BE0A";
    case ApplicationStatus.REJECTED:
      return "#ED5B5D";
    default:
      return "#FFFFFF";
  }
};

export const amountToText = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};

export const findUserForApplication = (
  users: User[],
  application: Application | null
): User => {
  return users.find((user) => user.id === application?.applicant)!;
};
