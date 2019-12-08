import React, { useState } from "react";

function ProjectSelector() {

    const [selectedProject, setProject] = useState("select your project")

    function handleChange(event){
        const {value} = event.target;

        setProject(value) 
    }

    function handleSubmit(e) {
    alert('Your favorite flavor is: ' + selectedProject);
    e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={selectedProject} onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default ProjectSelector;