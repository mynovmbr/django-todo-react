import React, { useState }from "react";
// import PropertySelector from "./PropertySelector"
import PropertySelectorOption from "./PropertySelectorOption"
import PropertyInfo from "./PropertyInfo";
import wwBuildings from "../data/building_stats"

function PropertyInfoPanel(props) {

    const [selectedProperty, setProperty] = useState(props.selectedProperty)
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

        setProperty(value) 
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
        return <PropertySelectorOption 
        key={wwBuildings.BuildingUUID}
        name={wwBuildings.BuildingName} 
        value={wwBuildings.BuildingName}
        />
    }

    return <div>
        <img className="card" src="./img/img_001.jpg" alt="No Image Loaded"/>
        <p></p>
        Select Property to get start:
        <p></p>
          <select value={selectedProperty} onChange={handleSelect}>
            {wwBuildings.map(createOption)}
          </select>
        <PropertyInfo 
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

export default PropertyInfoPanel;