import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "../components/Home";
import Userdata from "../components/Admin/Userdata/Userdata";
import Salesdata from "../components/Admin/Salesdata/Salesdata";
import CreateSale from "../components/Admin/Salesdata/CreateSale";
import EditSale from '../components/Admin/Salesdata/EditSale';
import Login from '../components/Admin/Login/Login';

function MainRoutes() {
    return (
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/admin/login">
                <Login />
            </Route>
            <Route path="/admin/userdata">
                <Userdata />
            </Route>
            <Route path="/admin/salesdata">
                <Salesdata />
            </Route>
            <Route path="/admin/editsale/:id">
                <EditSale />
            </Route>
            <Route path="/admin/addsale/">
                <CreateSale />
            </Route>
        </Router>
    );
}

export default MainRoutes
