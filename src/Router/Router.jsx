import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import AnaLayout from "../Layout/AnaLayout";
import Home from "../Pages/Home";
import Country from "../Pages/Country";

export const route = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AnaLayout />}>
			<Route index element={<Home />} />
			<Route path="olke/:zirt" element={<Country />} />
		</Route>
	)
)