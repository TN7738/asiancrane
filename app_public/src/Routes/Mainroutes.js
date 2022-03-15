import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../components/Home";
import Userdata from "../components/Userdata";

function MainRoutes() {
    return (
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/userdata">
                <Userdata />
            </Route>
        </Router>
    );
}

export default MainRoutes
