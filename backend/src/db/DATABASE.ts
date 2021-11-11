/**
 * This file should not be modified.
 */

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

export interface DatabaseT {
  users: Record<number, User>;
  applications: Record<number, Application>;
}

const DATABASE: DatabaseT = {
  users: {
    1: {
      id: 1,
      firstName: "Roger",
      lastName: "Jones",
      applications: [1, 2],
    },
    2: {
      id: 2,
      firstName: "Jeanine",
      lastName: "Rogers",
      applications: [3],
    },
    3: {
      id: 3,
      firstName: "Ronald",
      lastName: "Brown",
      applications: [4, 5],
    },
    4: {
      id: 4,
      firstName: "Tom",
      lastName: "Williams",
      applications: [6],
    }
  },
  applications: {
    1: {
      id: 1,
      address: {
        streetNumber: "1234",
        street: "Smithe St",
        city: "Vancouver",
        province: "BC",
        country: "Canada",
        premises: undefined,
      },
      applicant: 1,
      status: ApplicationStatus.IN_PROGRESS,
      created: "2020-12-04T19:09:40.096Z",
      requestedAmount: 120000000
    },
    2: {
      id: 2,
      address: {
        streetNumber: "1123",
        street: "Burrard St",
        city: "Vancouver",
        province: "BC",
        country: "Canada",
        premises: "Suite 450",
      },
      applicant: 1,
      status: ApplicationStatus.DRAFT,
      created: "2020-09-04T19:09:40.096Z",
      requestedAmount: 54000000
    },
    3: {
      id: 3,
      address: {
        streetNumber: "450",
        street: "Granville St",
        city: "Vancouver",
        province: "BC",
        country: "Canada",
        premises: "Apt 12",
      },
      applicant: 2,
      status: ApplicationStatus.DRAFT,
      created: "2020-10-04T19:09:40.096Z",
      requestedAmount: 33300000
    },
    4: {
      id: 4,
      address: {
        streetNumber: "4444",
        street: "John Samuelson St",
        city: "Vancouver",
        province: "BC",
        country: "Canada",
        premises: undefined,
      },
      applicant: 3,
      status: ApplicationStatus.CLOSED,
      created: "2020-06-04T19:09:40.096Z",
      requestedAmount: 20000000
    },
    5: {
      id: 5,
      address: {
        streetNumber: "1200",
        street: "Rogers St",
        city: "Vancouver",
        province: "BC",
        country: "Canada",
        premises: undefined,
      },
      applicant: 3,
      status: ApplicationStatus.REJECTED,
      created: "2020-02-04T19:09:40.096Z",
      requestedAmount: 1100000
    },
    6: {
      id: 6,
      address: {
        streetNumber: "4540",
        street: "William Stafford St",
        city: "Vancouver",
        province: "BC",
        country: "Canada",
        premises: undefined,
      },
      applicant: 4,
      status: ApplicationStatus.CLOSED,
      created: "2020-08-04T19:09:40.096Z",
      requestedAmount: 1500000
    }
  }
}

export default DATABASE;
