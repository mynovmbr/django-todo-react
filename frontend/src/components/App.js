import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
// import Table from "./Table01/Table01";
import axios from "axios";
import ProjectInfoPanel from "./ProjectInfoPanel";

function App() {

    const [project, setProject] = useState("WeWork Location")
    const [data, setData] = useState("Data is not loaded yet.")

    function loadData(){
        console.log("Sending GET request to server...")
        axios
          .get("http://localhost:8000/api/todos/")
          .then(res => setData(res.data))
          .catch(err => console.log(err));
      };

    return <div>
        <Header header={project}/>
        <div className="row">
            <div className="column-project">
                <ProjectInfoPanel selectedProject = {[project, setProject]}/>
            </div>
            <div className="column-data">
                <button onClick={loadData}>Load Data</button>
                <button onClick={() => {
                    console.log("Clicked!")
                }}>Test</button>
                <div>{JSON.stringify(data)}</div>
                <div className="row">
                    <div className="column-50">
                        <Card />
                    </div>
                    <div className="column-50">
                        <Card />
                    </div>
                </div>
                {/* <Table /> */}
                <Card />
                <Card />
                <Card />
            </div>
        </div>
        <Footer />
    </div>
}

export default App;