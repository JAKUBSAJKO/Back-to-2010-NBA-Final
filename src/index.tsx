import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux/es/exports";
import { store } from "./app/store";
import { GraphQLClient, ClientContext } from "graphql-hooks";

const URL = "https://graphql.datocms.com/";

const client = new GraphQLClient({
  url: URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_API_TOKEN}`,
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ClientContext.Provider>
  </React.StrictMode>
);

reportWebVitals();
