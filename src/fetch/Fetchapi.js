import { mainData, activity, averageSessions, performance } from "../app/dataservice"
import dataMock from "../app/data";
// import USER_MAIN_DATA from "../app/data";
// import USER_ACTIVITY from "../app/data";
// import USER_AVERAGE_SESSIONS from "../app/data";
// import USER_PERFORMANCE from "../app/data";

const url = "http://localhost:3000/user";
let isMock = true;

/**
Retrieve user main data
@function
@param {number} id - User id
@param {string} categorie - Data category
@returns {Object} User main data object
*/

const getUserMainData =  (id, categorie) => {
    if (isMock === true) {
        console.log("USER_MAIN_DATA", dataMock.USER_MAIN_DATA)
        const maindata = dataMock.USER_MAIN_DATA.find(element => element.id == id);
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

/**

Retrieve user average data
@function
@param {number} id - User id
@param {string} categorie - Data category
@returns {Object} User average data object
*/

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

/**
Retrieve user activity data
@function
@param {number} id - User id
@param {string} categorie - Data category
@returns {Object} User activity data object
*/

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

/**
Retrieve user performance data
@function
@param {number} id - User id
@param {string} categorie - Data category
@returns {Object} User performance data object
*/

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

/**
Get data based on the category and user id
@param {number} id - The id of the user
@param {string} categorie - The category of the data to retrieve (main data, activity, average sessions or performance)
@returns {Object} - An object with the data for the requested category
*/

const getData =  (id, categorie) => {

    const dataFetch = [];

    switch (categorie) {
        case "activity": return new activity(dataFetch.data);
        case "average-sessions": return new averageSessions(dataFetch.data);
        case "performance": return new performance(dataFetch.data);

        default: return new mainData(dataFetch.data);

    }
}
 
const store = { getUserActivityData, getUserAverageData, getUserMainData, getUserPerformanceData }

export default store