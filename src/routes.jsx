import App from "./App";
import Profile from "./components/Profile";
import ErrorPage from "./components/ErrorPage";
import Content from "./components/Content";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "profile/:name?",
        element: <Profile />,
    },
    {
        path: "content",
        element: <Content />,
    },
];

export default routes;
