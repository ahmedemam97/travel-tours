import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Trip from "./Components/trip/Trip";
import Layout from "./Components/Layout/Layout";
import { LangContextProvider } from "./Context/LangContext";

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "trip", element: <Trip /> },
      ],
    },
  ]);

  return (
    <LangContextProvider>
      <RouterProvider router={routers} />
    </LangContextProvider>
  );
}

export default App;
