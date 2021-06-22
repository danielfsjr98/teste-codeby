import { IRoutes } from "./index";
import Home from "../pages/Home";
import MockCart1 from "../pages/Cart/MockCart1";
import MockCart2 from "../pages/Cart/MockCart2";

const routes: IRoutes[] = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cart1",
    name: "cart1",
    component: MockCart1,
  },
  {
    path: "/cart2",
    name: "cart2",
    component: MockCart2,
  },
];

export default routes;
