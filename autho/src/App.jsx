import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./App.css";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} />
      <div className="main-layout">
        <div>
          <Sidebar isCollapsed={isCollapsed} />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
};

export default App;
