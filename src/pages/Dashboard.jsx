import React from 'react';
import './Dashboard.css';
import Grapharea from '../components/Grapharea'
import Graphbar from '../components/Graphbar'
import Graphradar from '../components/Graphradar'
import Graphradial from '../components/Graphradial'
import Infos from '../components/Infos'
import store from '../fetch/Fetchapi'
import calories from '../assets/calories-icon.png'
import proteins from '../assets/protein-icon.png'
import carbohydrates from '../assets/carbs-icon.png'
import lipids from '../assets/fat-icon.png'
import Horizontal from '../components/Horizontal'
import Vertical from '../components/Vertical'
// import getUserAverageData from '../fetch/Fetchapi'
// import getUserMainData from '../fetch/Fetchapi'
// import getUserPerformanceData from '../fetch/Fetchapi'
import { useParams } from "react-router-dom";

function Dashboard() {
    let { id } = useParams();

    console.log(id, "id");
    console.log("store", store);


    
const activityData =  store.getUserActivityData(id, "category")
 console.log(activityData,"activityData");

const AverageData =  store.getUserAverageData(id, "category")
 console.log(AverageData,"AverageData");

const mainData =  store.getUserMainData(id, "category")
 console.log(mainData,"mainData");

const performanceData =  store.getUserPerformanceData(id, "category")
 console.log(performanceData,"performanceData");



 
//TODO récuperer l'id du user
//TODO faire appel a getData pour recuperer les données en fonction de l'id du user et la catégorie
//TODO passer les données en props aux differents composants
    return (
<div>
            <Horizontal></Horizontal>
            <div className='arrange'>
            <Vertical></Vertical>
            <div className='displayTotal'>
                <div className='divTitle'>
                    <h1> Bonjour <span> {mainData.userInfos.firstName} </span> </h1>
                    <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
                    </div>
                    <div className='displayBoard'>
                    <div className='divGraph'>
                    <Graphbar dataGraph={activityData.sessions}></Graphbar>
                    <Grapharea dataGraph={AverageData} ></Grapharea>
                    <Graphradar dataGraph={performanceData}></Graphradar>
                    <Graphradial dataGraph={mainData}></Graphradial>
                    
                    </div>
                    <div className='divInfos'>
                    <Infos dataGraph={mainData.keyData.calorieCount} dataIcon={calories} unit={"kCal"} typeAvg={"Calories"}></Infos>
                    <Infos dataGraph={mainData.keyData.proteinCount} dataIcon={proteins} unit={"g"} typeAvg={"Proteines"}></Infos>
                    <Infos dataGraph={mainData.keyData.carbohydrateCount} dataIcon={carbohydrates} unit={"g"} typeAvg={"Glucides"}></Infos>
                    <Infos dataGraph={mainData.keyData.lipidCount} dataIcon={lipids} unit={"g"} typeAvg={"Lipides"}></Infos>
                    </div>
                    </div>
                    </div>
        </div>
        </div>
    );
}

export default Dashboard