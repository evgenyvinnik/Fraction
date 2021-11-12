export enum ApplicationStatus {
  DRAFT = "DRAFT",
  IN_PROGRESS = "IN_PROGRESS",
  CLOSED = "CLOSED",
  REJECTED = "REJECTED",
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  applications: number[];
}

export interface Address {
  streetNumber: string;
  street: string;
  city: string;
  province: string;
  country: string;
  premises?: string;
}

export interface Application {
  id: number;
  address: Address;
  applicant: number;
  status: ApplicationStatus;
  created: string;
  requestedAmount: number;
}
