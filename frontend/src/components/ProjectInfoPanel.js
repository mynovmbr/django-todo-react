import React, { useState }from "react";
// import ProjectSelector from "./ProjectSelector"
import ProjectSelectorOption from "./ProjectSelectorOption"
import ProjectInfo from "./ProjectInfo";
import wwBuildings from "../data/building_stats"

function ProjectInfoPanel(props) {

    const [selectedProject, setProject] = props.selectedProject
    const [buildingInfo, setBuildingInfo] = useState({
        buildingName: "",
        buildingAddress: "",
        buildingTerritory: "",
        buildingUUID: "",
        buildingUSF: "",
        buildingDeskCount: "",
        buildingRoomCount: ""
    })

    function handleSelect(event){
        const {value} = event.target;

        setProject(value) 
        updateBuildingInfo(value, wwBuildings)
    }

    function updateBuildingInfo(selectedBuilding, wwBuildings) {
        wwBuildings.map(wwBuilding => {
            if (wwBuilding.BuildingName === selectedBuilding){
                setBuildingInfo({
                    buildingName: wwBuilding.BuildingName,
                    buildingAddress: wwBuilding.BuildingAddress,
                    buildingTerritory: wwBuilding.BuildingTerritory,
                    buildingUUID: wwBuilding.BuildingUUID,
                    buildingUSF: wwBuilding.BuildingUSF,
                    buildingDeskCount: wwBuilding.BuildingDeskCount,
                    buildingRoomCount: wwBuilding.BuildingRoomCount
                })
                console.log(buildingInfo)
            } 
            // else {
            //     setBuildingInfo("Cannot find building info.")
            //     console.log("cannot find a match")
            // }
        });
    }

    function createOption(wwBuildings) {
        return <ProjectSelectorOption 
        key={wwBuildings.BuildingUUID}
        name={wwBuildings.BuildingName} 
        value={wwBuildings.BuildingName}
        />
    }

    return <div>
        <img className="card" src="./img/img_001.jpg" alt="No Image Loaded"/>
        <p></p>
        Select project to get start:
        <p></p>
          <select value={selectedProject} onChange={handleSelect}>
            {wwBuildings.map(createOption)}
          </select>
        <ProjectInfo 
            buildingName={buildingInfo.buildingName}
            buildingAddress={buildingInfo.buildingAddress}
            buildingTerritory={buildingInfo.buildingTerritory}
            buildingUUID={buildingInfo.buildingUUID}
            buildingUSF={buildingInfo.buildingUSF}
            buildingDeskCount={buildingInfo.buildingDeskCount}
            buildingRoomCount={buildingInfo.buildingRoomCount}
        />
    </div>
}

export default ProjectInfoPanel;