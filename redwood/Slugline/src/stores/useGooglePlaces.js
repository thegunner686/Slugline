import create from "zustand";
import uuid from 'react-native-uuid';

import { GOOGLE_PLACES_KEY } from "@env";

const GOOGLE_PLACES_AUTOCOMPLETE_URL = "https://maps.googleapis.com/maps/api/place/autocomplete/json";

const defaultAutocompleteParams = {
    location: "36.99279,-122.060962",
    radius: "10000",
    language: "en",
    components: "country:us",
    strictbounds: true
};

const GOOGLE_PLACES_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json";

const defaultDetailsParams = {
    language: "en",
    region: "us",
    fields: "address_component,formatted_address,geometry,name,type,url"
};

const useGooglePlaces = create((set, get) => ({

    autocompleteResponse: null,
    autocompleteInput: "",
    autocompleteTimerOn: false,
    // latency == candidate for remote config
    openAutocompleteSession: (latency = 500) => {
        const sessionToken = get().generateSessionToken();

        const request = async (input) => {
            if(input == null || input.trim() == "") {
                set(state => ({
                    autocompleteResponse: { predictions: [] }
                }))
            }
            try {
                let url = get().generateAutocompleteRequestURL(input, defaultAutocompleteParams, sessionToken);
                let response = await fetch(url, {
                    method: "GET",
                    body: null
                });
                let json = await response.json()
                set(state => ({
                    autocompleteResponse: json
                }));
            } catch(error) {
                console.log(error);
            }
        };

        const feed = (input) => {
            if(get().autocompleteInput != input) {
                set(state => ({
                    autocompleteInput: input,
                }));
                if(!get().timerOn) {
                    set(state => ({
                        autocompleteTimerOn: true,
                    }));
                    setTimeout(() => {
                        request(get().autocompleteInput);
                        set(state => ({
                            autocompleteTimerOn: false
                        }));
                    }, latency)
                }
            }
        };

        const getDetails = async (place_id) => {
            try {
                let url = get().generateDetailsRequestURL(place_id, defaultDetailsParams, sessionToken);
                let response = await fetch(url, {
                    method: "GET",
                    body: null
                });
                let json = await response.json();
                return json;
            } catch(error) {
                console.log(error);
            }
        };

        return {
            feed,
            getDetails
        };
    },

    generateSessionToken: () => {
        return uuid.v4();
    },

    // input: String
    // params: map of param name -> value
    generateAutocompleteRequestURL: (input, params, sessiontoken) => {
        let url = `${GOOGLE_PLACES_AUTOCOMPLETE_URL}?input=${input}&key=${GOOGLE_PLACES_KEY}&sessiontoken=${sessiontoken}`;
        Object.keys(params).forEach(key => {
            if(key == "strictbounds") {
                url += "&strictbounds";
            } else {
                url += `&${key}=${params[key]}`;
            }
        });
        return url;
    },

    generateDetailsRequestURL: (place_id, params, sessiontoken) => {
        let url = `${GOOGLE_PLACES_DETAILS_URL}?place_id=${place_id}&key=${GOOGLE_PLACES_KEY}&sessiontoken=${sessiontoken}`;
        Object.keys(params).forEach(key => {
            url += `&${key}=${params[key]}`;
        });
        return url;
    }
}));

export { useGooglePlaces } 