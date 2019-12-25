import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import PropertyOverview from "./PropertyOverview";
import propertyPlan from "./PropertyPlan";
import NotFount from "./NotFound";


function App() {

    return <div>
        <Header header="Nebula"/>
        <Router>
            <Link to="/">Home</Link>
            <Link to="/propertyplan">property Plan</Link>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/:propertyID/summary" render={(props) => {
                    let pageID = props.location.pathname
                                .replace('/summary','')
                                .replace('/', '')
                    return(<PropertyOverview propertyUUID={pageID} />)
                }}/>
                <Route exact path="/propertyOverview" component={PropertyOverview} />
                <Route exact path="/propertyplan" component={propertyPlan} />
                <Route component={NotFount} />
            </Switch>
        </Router>
        <Footer />
    </div>
}

export default App;