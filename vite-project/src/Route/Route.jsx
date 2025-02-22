import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Edit from "../pages/edit";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);

export default Router;
