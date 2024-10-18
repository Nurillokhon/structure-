/** @format */
import { RouterProvider } from "react-router-dom";
import { routes } from "./app/routes/router";
import Provider from "./app/provider/Provider";
import "leaflet/dist/leaflet.css";
function App() {
  return (
    <Provider>
      <RouterProvider router={routes} />
    </Provider>
  );
}

export default App;
