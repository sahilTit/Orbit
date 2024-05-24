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
import About from "./pages/About.jsx";
import Logt from "./pages/Logt.jsx";
import Table from "./pages/Table.jsx";
import Layout from "./MainLayout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import Paginated from "./pages/Paginated.jsx";
import Toast from "./pages/Toast.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Logt />} />
      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<Homepage />}>
          <Route index element={<Toast />} />
          <Route path="table" element={<Table />} />
          <Route path="master" element={<About />} />
          <Route path="pagi" element={<Paginated />} />
        </Route>
      </Route>
      <Route path="*" element={<Logt />} />
      {/* <Route path="/" element={<SecLayout />}></Route> */}
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
