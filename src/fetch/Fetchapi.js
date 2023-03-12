import { mainData, activity, averageSessions, performance } from "../app/dataservice"
import dataMock from "../app/data";
// import USER_MAIN_DATA from "../app/data";
// import USER_ACTIVITY from "../app/data";
// import USER_AVERAGE_SESSIONS from "../app/data";
// import USER_PERFORMANCE from "../app/data";

const url = "http://localhost:3000/user";
let isMock = true;

/**
 * retrieve data 
 * @param {number} id 
 * @param {string} categorie 
 * @returns promise
 */

const getUserMainData =  (id, categorie) => {
    if (isMock === true) {
        console.log("USER_MAIN_DATA", dataMock.USER_MAIN_DATA)
        const maindata = dataMock.USER_MAIN_DATA.find(element => element.userId == id);
        return maindata
    }
    else {
        //TODO appel d'API
        let urlCall = categorie ? url + `/${id}/${categorie}/` : url + `/${id}/`;
        console.log(urlCall)

        const data =  fetch(urlCall);
        console.log(data)

        const dataFetch =  data.json();
        console.log(dataFetch)
    }
}

const getUserAverageData =  (id, categorie) => {
    if (isMock === true) {
        console.log("USER_AVERAGE_SESSIONS", dataMock.USER_AVERAGE_SESSIONS)
        const averagedata = dataMock.USER_AVERAGE_SESSIONS.find(element => element.userId == id);
        return averagedata
    }
    else {
        //TODO appel d'API
        let urlCall = categorie ? url + `/${id}/${categorie}/` : url + `/${id}/`;
        console.log(urlCall)

        const data =  fetch(urlCall);
        console.log(data)

        const dataFetch =  data.json();
        console.log(dataFetch)
    }
}

const getUserActivityData = (id, categorie) => {

    console.log('in getUserActivityData');
    if (isMock === true) {
        console.log("USER_ACTIVITY", dataMock.USER_ACTIVITY)
        const activitydata = dataMock.USER_ACTIVITY.find(element => element.userId == id);
        return activitydata
    }
    else {
        //TODO appel d'API
        let urlCall = categorie ? url + `/${id}/${categorie}/` : url + `/${id}/`;
        console.log(urlCall)

        const data =  fetch(urlCall);
        console.log(data)

        const dataFetch =  data.json();
        console.log(dataFetch)
    }
}

const getUserPerformanceData =  (id, categorie) => {
    if (isMock === true) {
        console.log("USER_PERFORMANCE", dataMock.USER_PERFORMANCE)
        const perfdata = dataMock.USER_PERFORMANCE.find(element => element.userId == id);
        return perfdata
    }
    else {
        //TODO appel d'API
        let urlCall = categorie ? url + `/${id}/${categorie}/` : url + `/${id}/`;
        console.log(urlCall)

        const data =  fetch(urlCall);
        console.log(data)

        const dataFetch =  data.json();
        console.log(dataFetch)
    }
}

const getData =  (id, categorie) => {
    if (isMock === true) {
        //TODO ici je récupere les donnèes depuis le fichier
    }
    else {
        //TODO ici je récupere les données depuis un appel d'API  
        // let urlCall = categorie ? url + `/${id}/${categorie}/` : url + `/${id}/`;
        // console.log(urlCall)

        // const data = await fetch(urlCall);
        // console.log(data)

        // const dataFetch = await data.json();
        // console.log(dataFetch)
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
 
const store = { getUserActivityData, getUserAverageData, getUserMainData, getUserPerformanceData }

export default store