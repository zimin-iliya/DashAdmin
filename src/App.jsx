import React from "react";
import axios from "axios";
import { ColorModeContext, UseMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import { Routes, Route } from "react-router-dom";
import Team from "./scenes/team";
import Invoices from "./scenes/invoice";
import Contacts from "./scenes/constacts";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import Registration from "./scenes/registration";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geograpy from "./scenes/geograpy";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;
  const [theme, colorMode] = UseMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/contacts" element={<Contacts/>} />
              <Route path="/invoices" element={<Invoices/>} />
              <Route path="/form" element={<Form/>} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/registration" element={<Registration/>} />
              {/* <Route path="/bar" element={<Bar/>} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              {/* <Route path="/faq" element={<Line/>} /> */}
              {/* <Route path="/geography" element={<Geography/>} /> */}


            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
