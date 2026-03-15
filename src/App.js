import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Trip from "./Components/trip/Trip";
import Layout from "./Components/Layout/Layout";
import { LangContextProvider } from "./Context/LangContext";
import TripContextProvider from "./Context/Trips/TripContext";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "trip/:id", element: <Trip /> },
      ],
    },
  ]);

  return (
    <LangContextProvider>
      <TripContextProvider>
        <RouterProvider router={routers} />
      </TripContextProvider>
    </LangContextProvider>
  );
}

export default App;
