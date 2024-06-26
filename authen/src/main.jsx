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
import ConsolidateReport from "./reports/ConsolidateReport.jsx";
import ConsolidateReportSec from "./reports/ConsolidateRepoSec.jsx";
import WeeklyRemitance from "./reports/WeeklyRemitance.jsx";
import DailRemitance from "./reports/DailyRemitance.jsx";
import DataProvider from "./context/DataContext";
import HoExpense from "./reports/HoExpense.jsx";
import Collection from "./reports/Collection.jsx";
import ClosingBlance from "./reports/ClosingBalance.jsx";
import PlazaEntry from "./Entry/PlazaEntry.jsx";
// import HoExpense from "./Entry/HoExpensesEntry.jsx";
import HoExpensesEntry from "./Entry/HoExpensesEntry.jsx";

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
          <Route path="consreport" element={<ConsolidateReport />} />
          <Route path="consreport-2" element={<ConsolidateReportSec />} />
          <Route path="horeport" element={<HoExpense />} />
          <Route path="weekrem" element={<WeeklyRemitance />} />
          <Route path="dailyrem" element={<DailRemitance />} />
          <Route path="closebalance" element={<ClosingBlance />} />
          <Route path="collection" element={<Collection />} />
          <Route path="plazaentry" element={<PlazaEntry />} />
          <Route path="expenseho" element={<HoExpensesEntry />} />
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
