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
    return url.split("?")[1];
}