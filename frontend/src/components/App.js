import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Table from "./Table01/Table01";
import ProjectInfoPanel from "./ProjectInfoPanel";

function App() {

    const [project, setProject] = useState("WeWork Location")

    return <div>
        <Header header={project}/>
        <div className="row">
            <div className="column-project">
                <ProjectInfoPanel selectedProject = {[project, setProject]}/>
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
                <Table />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <Footer />
    </div>
}

export default App;