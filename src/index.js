import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router/dom";
import routes from "./router/routes";

import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={routes} />
		</Provider>
	</React.StrictMode>,
);
