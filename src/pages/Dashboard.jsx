import React from 'react';
import './Dashboard.css';
import Grapharea from '../components/Grapharea'
import Graphbar from '../components/Graphbar'
import Graphradar from '../components/Graphradar'
import Graphradial from '../components/Graphradial'
import store from '../fetch/Fetchapi'
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

    // const activityData = getUserActivityData(id)
    // console.log(activityData,"activityData");

    // const averageData = getUserAverageData(id)
    // console.log(averageData,"averageData");

    // const mainData = getUserMainData(id)
    // console.log(mainData,"mainData");

    // const performanceData = getUserPerformanceData(id)
    // console.log(performanceData,"performanceData");
    
//TODO récuperer l'id du user
//TODO faire appel a getData pour recuperer les données en fonction de l'id du user et la catégorie
//TODO passer les données en props aux differents composants
    return (
        <div>
                    <h1>Alexis</h1>
        {/* {activityData.map((item) => (
            <Grapharea id={item.id} sessions={item.sessions} day={item.sessions.day} session={item.sessions.sessionLength} key={item}></Grapharea>
            ))} */}
        </div>
        
    );
}

export default Dashboard