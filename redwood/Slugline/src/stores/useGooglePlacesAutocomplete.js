import create from "zustand";
import uuid from 'react-native-uuid';

import { GOOGLE_PLACES_AUTOCOMPLETE_KEY } from "@env";

const GOOGLE_PLACES_AUTOCOMPLETE_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json";

const useGooglePlacesAutocomplete = create((set, get) => ({

    defaultParams: {
        location: "36.99279,-122.060962",
        radius: "10000",
        language: "en",
        components: "country:us",
        strictbounds: true
    },

    response: null,
    input: "",
    timerOn: false,
    openSession: (latency = 100) => {
        const sessionToken = get().generateSessionToken();

        const request = async (input) => {
            if(input == null || input.trim() == "") {
                set(state => ({
                    response: { predictions: [] }
                }))
            }
            try {
                let url = get().generateRequestURL(input, get().defaultParams, sessionToken);
                let response = await fetch(url, {
                    method: "GET",
                    body: null
                });
                let json = await response.json()
                set(state => ({
                    response: json
                }));
            } catch(error) {
                console.log(error);
            }
        };

        const feed = (input) => {
            if(get().input != input) {
                set(state => ({
                    input,
                }));
                if(!get().timerOn) {
                    set(state => ({
                        timerOn: true,
                    }));
                    setTimeout(() => {
                        request(get().input);
                        set(state => ({
                            timerOn: false
                        }));
                    }, latency)
                }
            }
        };

        return {
            feed
        };
    },

    generateSessionToken: () => {
        return uuid.v4();
    },

    // input: String
    // params: map of param name -> value
    generateRequestURL: (input, params, sessiontoken) => {
        let url = `${GOOGLE_PLACES_AUTOCOMPLETE_URL}?input=${input}&key=${GOOGLE_PLACES_AUTOCOMPLETE_KEY}&sessiontoken=${sessiontoken}`;
        Object.keys(params).forEach(key => {
            if(key == "strictbounds") {
                url += "&strictbounds";
            } else {
                url += `&${key}=${params[key]}`;
            }
        });
        return url;
    }
}));

export { useGooglePlacesAutocomplete } 