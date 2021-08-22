import firestore from "@react-native-firebase/firestore";

export function random_id() {
    // arbitrary collection -- not in actual use
    return firestore().collection("Arbitrary").doc().id;
}

export const path = "slugline://";

export function to_navigate_path_url(data) {
    return `${path}navigate?${data}`;
}

export function from_navigate_path_url(url) {
    let split = url.split("?");
    if(split.length != 2) throw "Invalid url";
    return url.split("?")[1];
}

export const haptic_options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false
};

export const EventEnums = {
    Type: {
        PHYSICAL: "physical",
        VIRTUAL: "virtual"
    }
};

export const toAMPMTime = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};

export const getWeekdayName = (date) => {   
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[date.getDay()];
};

export const getMonthName = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return monthNames[date.getMonth()];
};

export const getSimpleFormattedDate = (date) => {
    let year = date.getFullYear().toString().padStart(4, "0"),
    month = (date.getMonth() + 1).toString().padStart(2, "0"),
    day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`
};

export const getDayWithEnding = (date) => {
    let d = date.getDate().toString();
    let lastDay = Number(d.length > 1 ? d[1] : d[0]);
    switch(lastDay) {
        case 1:
            ending = "st";
            break;
        case 2:
            ending = "nd";
        break;
        case 3:
            ending = "rd";
        default:
            ending = "th";
            break;
    }
    return d + ending;
};

export const toMonthDayDate = (date) => {
    const month = getMonthName(date);
    const weekday = getWeekdayName(date);
    const day = getDayWithEnding(date);

    return `${weekday}, ${month} ${day}`;
};

export const wiggleCoordinates = (coords) => {
    const scale = 0.0001;
    return {
        latitude: coords.latitude + (Math.random() * scale - (scale / 2)),
        longitude: coords.longitude + (Math.random() * scale - (scale / 2))
    }
} 
