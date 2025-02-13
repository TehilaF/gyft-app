// Define the Event type
type Event = {
  id: number;
  eventName: string;
  eventDate: Date;
};

// Sample array of events with Date objects
const events: Event[] = [
  {
    id: 1,
    eventName: "Simcha's Bar Mitzvah",
    eventDate: new Date("2025-02-04"),
  },
  { id: 2, eventName: "Nechama's Kiddush", eventDate: new Date("2025-02-11") },
  { id: 3, eventName: "Chaim's Graduation", eventDate: new Date("2025-06-15") },
  { id: 4, eventName: "Hindy's Kiddush", eventDate: new Date("2025-07-01") },
  {
    id: 5,
    eventName: "Mordechai's Upsherin",
    eventDate: new Date("2021-08-22"),
  },
  { id: 6, eventName: "Esther's Birthday", eventDate: new Date("2025-08-30") },
  {
    id: 7,
    eventName: "Meir's Shalom Zachor",
    eventDate: new Date("2025-09-05"),
  },
  { id: 8, eventName: "Rivka's Wedding", eventDate: new Date("2025-10-12") },
];

export default events;
