class mainData {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.userInfos.firstName;
        this.lastName = data.userInfos.lastName;
        this.age = data.userInfos.age;
        this.todayScore = data.todayScore || data.score;
        this.calorie = data.keyData.calorieCount;
        this.proteine = data.keyData.proteinCount;
        this.glucide = data.keyData.carbohydrateCount;
        this.lipide = data.keyData.lipidCount
    }
    
}

class activity {
    constructor(data) {
        this.id = data.userId;
        this.sessions = data.sessions;
        this.day = data.sessions.day;
        this.kilo = data.sessions.kilogram;
        this.calorie = data.sessions.calories;
    }
}

class averageSessions {
    constructor(data) {
        this.id = data.userId;
        this.sessions = data.sessions;
        this.day = data.sessions.day;
        this.session = data.sessions.sessionLength;
    }
}

class performance {
    constructor(data) {
        this.data = data.data
        this.kind = data.kind
    }
}

export {mainData, activity, averageSessions, performance}
