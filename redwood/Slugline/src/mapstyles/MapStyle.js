import nightmapstyle from "./nightmapstyle.json";
import daymapstyle from "./daymapstyle.json"

export default MapStyle = {
    Night: nightmapstyle,
    Day: daymapstyle,
    Get: () => {
        let hour = (new Date()).getHours();
        if(hour > 21 || hour < 7) {
            return nightmapstyle
        } else {
            return daymapstyle;
        }
    }
};