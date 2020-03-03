import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./protectedRoute";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Route component={Signin} exact path='/' />
        <ProtectedRoute component={Dashboard} exact path='/dashboard' />
      </Router>
    </GlobalProvider>
  );
}

export default App;
