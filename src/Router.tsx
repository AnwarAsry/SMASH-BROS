import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import LandingPage from "./Pages/Landing";
import Characters from "./Pages/Characters";
import NotFound from "./Pages/NotFound";
import Spirits from "./Pages/Spirits";
import Stages from "./Pages/Stages";
import CharacterPage from "./Pages/CharacterPage";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            errorElement: <NotFound />,
            children: [
                {
                    path: "/",
                    element: <LandingPage />,
                    index: true,
                },
                {
                    path: "/characters",
                    element: <Characters />,
                },
                {
                    path: "/characters/:id",
                    element: <CharacterPage />,
                },
                {
                    path: "/stages",
                    element: <Stages />,
                },
                {
                    path: "/spirits",
                    element: <Spirits />,
                },
            ],
        },
    ]
);
