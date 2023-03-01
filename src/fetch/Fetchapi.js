import { mainData, activity, averageSessions, performance } from "../app/dataservice"
import USER_MAIN_DATA from "../app/data";
import USER_ACTIVITY from "../app/data";
import USER_AVERAGE_SESSIONS from "../app/data";
import USER_PERFORMANCE from "../app/data";

const url = "http://localhost:3000/user";
let isMock = true;

/**
 * retrieve data 
 * @param {number} id 
 * @param {string} categorie 
 * @returns promise
 */

function getUserMainData(id) {
    if (isMock === true) {
        const maindata = USER_MAIN_DATA.find(element => element.id === id);
        return maindata
    }
    else {
//TODO appel d'API
    }
}

function getUserAverageData(id) {
    if (isMock === true) {
        const averagedata = USER_AVERAGE_SESSIONS.find(element => element.id === id);
        return averagedata
    }
    else {
//TODO appel d'API
    }
}

function getUserActivityData(id) {
    if (isMock === true) {
        const activitydata = USER_ACTIVITY.find(element => element.id === id);
        return activitydata
    }
    else {
//TODO appel d'API
    }
}

function getUserPerformanceData(id) {
    if (isMock === true) {
        const perfdata = USER_PERFORMANCE.find(element => element.id === id);
        return perfdata
    }
    else {
//TODO appel d'API
    }
}

const getData = async (id, categorie) => {
    if (isMock === true) {
        //TODO ici je récupere les donnèes depuis le fichier
    }
    else {
        //TODO ici je récupere les données depuis un appel d'API  
        let urlCall = categorie ? url + `/${id}/${categorie}/` : url + `/${id}/`;
        console.log(urlCall)

        const data = await fetch(urlCall);
        console.log(data)

        const dataFetch = await data.json();
        console.log(dataFetch)
    }

    const dataFetch = [];

    switch (categorie) {
        case "activity": return new activity(dataFetch.data);
        case "average-sessions": return new averageSessions(dataFetch.data);
        case "performance": return new performance(dataFetch.data);
        //case
        default: return new mainData(dataFetch.data);
        //defaut: [];
    }
}

export default {getUserActivityData, getUserAverageData, getUserMainData, getUserPerformanceData}