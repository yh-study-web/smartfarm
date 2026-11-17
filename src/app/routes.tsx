import { createBrowserRouter } from "react-router"
import HomePage from "../App"
import { CropCasePage, HouseTypePage } from "../pages/SubPages"

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/"

export const router = createBrowserRouter(
  [
    { path: "/", Component: HomePage },
    { path: "/housetype", Component: HouseTypePage },
    { path: "/cropcase", Component: CropCasePage },
    { path: "*", Component: HomePage },
  ],
  { basename },
)
