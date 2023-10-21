import React from "react";
import Dashboard from "./containers/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./containers/Layout";
import Companies from "./containers/Companies";
import SupportTickets from "./containers/SupportTickets";
import UserAdmins from "./containers/UserAdmins";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/companies"
            element={
              <Layout>
                <Companies />
              </Layout>
            }
          />
          <Route
            path="/support"
            element={
              <Layout>
                <SupportTickets />
              </Layout>
            }
          />
          <Route
            path="/user_admins"
            element={
              <Layout>
                <UserAdmins />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
