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
import Homepage from "./pages/homepage/Homepage.jsx";
import About from "./pages/about/About.jsx";
import Logt from "./pages/loginpage/Logt.jsx";
import Table from "./pages/plaza-table/Table.jsx";
import Layout from "./layout/MainLayout.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ProtectedRoute from "./protected/ProtectedRoute.jsx";
import Toast from "./pages/index-page/Toast.jsx";
import Maincontain from "./pages/role/Role.jsx";
import Expensehead from "./Master/Expensehead.jsx";
import Usermster from "./Master/Usermaster.jsx";
import PlazaTable from "./Master/PlazaTable.jsx";
import PlazaReport from "./reports/PlazaReport.jsx";
import DataProvider from "./context/DataContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Logt />} />
      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<Homepage />}>
          <Route index element={<Toast />} />
          <Route path="table" element={<Table />} />
          <Route path="master" element={<About />} />
          <Route path="main" element={<Maincontain />} />
          <Route path="expensehead" element={<Expensehead />} />
          <Route path="usermaster" element={<Usermster />} />
          <Route path="plazatable" element={<PlazaTable />} />
          <Route path="plazareport" element={<PlazaReport />} />
        </Route>
      </Route>
      <Route path="*" element={<Logt />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </DataProvider>
  </React.StrictMode>
);
