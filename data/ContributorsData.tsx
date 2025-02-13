// Define the Contributor type
type Contributor = {
  firstName: string;
  lastName: string;
  email: string;
  cellPhone: string;
  initialDeposit: number;
  balance: number;
};

// Sample array of contributors
const contributors: Contributor[] = [
  {
    firstName: "Hannah",
    lastName: "Lewis",
    email: "hlewis@gmail.com",
    cellPhone: "8483454567",
    initialDeposit: 12.5,
    balance: 25,
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    email: "bobs@yahoo.com",
    cellPhone: "9172034595",
    initialDeposit: 85.0,
    balance: 40,
  },
  {
    firstName: "Ethan",
    lastName: "Brown",
    email: "ethanbrown@gmail.com",
    cellPhone: "7183334554",
    initialDeposit: 85.0,
    balance: 10,
  },
  {
    firstName: "Diana",
    lastName: "Evans",
    email: "devans@gmail.com",
    cellPhone: "9174449895",
    initialDeposit: 85.0,
    balance: 125,
  },
  {
    firstName: "Charlie",
    lastName: "Davis",
    email: "charlicharli@aol.com",
    cellPhone: "7323334232",
    initialDeposit: 95.3,
    balance: -10,
  },
  {
    firstName: "Fiona",
    lastName: "Green",
    email: "fgreen@gmail.com",
    cellPhone: "9172228374",
    initialDeposit: 18.0,
    balance: 32,
  },
  {
    firstName: "George",
    lastName: "White",
    email: "gwhite@gmail.com",
    cellPhone: "7324546666",
    initialDeposit: 0.0,
    balance: 0,
  },
];

export default contributors;
