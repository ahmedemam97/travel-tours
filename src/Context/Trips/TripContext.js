import { createContext } from "react";
import TripsData from "./trips.json";
import { tripImages, travelMemories } from "../../Context/Trips/utils";

export const TripContext = createContext();

export default function TripContextProvider({ children }) {
  const Trips = TripsData.map((trip) => ({
    ...trip,
    img: tripImages[trip.img],
    travelMemories: travelMemories[trip.id - 1],
  }));

  return (
    <TripContext.Provider value={{ Trips }}>{children}</TripContext.Provider>
  );
}
