import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import ProjectInfoPanel from "./ProjectInfoPanel";


function ProjectOverview() {

    const [project, setProject] = useState("WeWork Location")
    const [data, setData] = useState("Data is not loaded yet.")

    function loadData(){
        console.log("Sending GET request to server...")
        axios
            .get("http://127.0.0.1:8000/api/todos")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <div className="row">
                <div className="column-project">
                    <ProjectInfoPanel selectedProject = {[project, setProject]}/>
                </div>
                <div className="column-data">
                    <button onClick={loadData}>Load Data</button>
                    <div>{JSON.stringify(data)}</div>
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
        </div>
    )
}

export default ProjectOverview;