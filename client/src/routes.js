import List from "./pages/List";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { DETAILS_ROUTE, LIST_ROUTE, NOTFOUND_ROUTE } from "./utils/consts";

export const publicRoutes = [
	{
		path: LIST_ROUTE,
		Component: List
	},
	{
		path: DETAILS_ROUTE + '/:id',
		Component: Details
	},
	{
		path: NOTFOUND_ROUTE,
		Component: NotFound
	},
]