import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import Homepage from "./pages/Homepage.jsx";
// import Signup from "./pages/Signup.jsx";
// import Login from "./pages/Login.jsx";
import Logt from "./pages/Logt.jsx";
import Layout from "./Layout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Logt />} />
      {/* <privateRoute></privateRoute> */}
      <Route path="/home" element={<Homepage />} />
      <Route path="*" element={<Logt />} />

      {/* <Route path="signup" element={<Signup />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
// 9347409293;
