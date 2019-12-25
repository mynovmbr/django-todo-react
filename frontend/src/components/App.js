import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ProjectOverview from "./ProjectOverview";
import ProjectPlan from "./ProjectPlan";
import NotFount from "./NotFound";


function App() {

    return <div>
        <Header header="Nebula"/>
        <Router>
            <Link to="/">Home</Link>
            <Link to="/projectplan">Project Plan</Link>
            <Switch>
                <Route exact path="/" component={ProjectOverview} />
                <Route exact path="/projectplan" component={ProjectPlan} />
                <Route component={NotFount} />
            </Switch>
        </Router>
        <Footer />
    </div>
}

export default App;