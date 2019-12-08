import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import ProjectInfoPanel from "./ProjectInfoPanel";

function App() {
    return <div>
        <Header />
        <div className="row">
            <div className="column-project">
                <ProjectInfoPanel />
            </div>
            <div className="column-data">
                <div className="row">
                    <div className="column-50">
                        <Card />
                    </div>
                    <div className="column-50">
                        <Card />
                    </div>
                </div>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <Footer />
    </div>
}

export default App;