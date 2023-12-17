import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home";
import Register from "../components/connect/Register";
import Tournament from "../components/Tournament";
import InfoTournois from "../components/infoTournois";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/inscription",
        element: <Register />,
      },
      {
        path: "/tournoi",
        element: <Tournament />,
      },
      {
        path: "/infoTournoi/:id",
        element: <InfoTournois />,
      },
    ],
  },
]);

export default router;
