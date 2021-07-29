import create from "zustand";

import firestore from "@react-native-firebase/firestore";
import storage from '@react-native-firebase/storage';

/**
 * Event {
 *      name, // String, maxchars 100
 *      description, // String, maxchars 500
 *      organizerRef,
 *      organizerName,
 *      photoURLs: [], // allow only one photo for now, providing infrastructure for more
 *      type, // enum "virtual", "physical"
 *      location: {
 *          coordinates: {
 *              lat,
 *              long
 *          },
 *          name
 *      },
 *      link, // url String
 *      date, // "2021-11-25"
 *      datetime, // timestamp
 *      isHidden, // bool
 *      isArchived, // bool
 *      tags, // []
 *      creationTime, // timestamp
 * }
 * 
 * query params : {
 *      name, // order-by
 *      organizer, // is
 *      type, // is
 *      date, // is
 *      datetime, // order-by
 *      isHidden, // is,
 *      isArchived, // is,
 *      tags, // array-contains-any up to 10 tags
 * }
 * 
 * 
 */

const useEvents = create((set, get) => ({
    db: firestore(),

    // maps from date to event list
    events_by_date: {},

    // adds events from a particular date
    loadEventsByDate: async (date) => {
        let query = db.collection("Events")
                    .where("isArchived", "==", false)
                    .where("date", "==", date)
                    .orderBy("datetime")
                    .orderBy("name");

        const snapshot = await query.get();

        set(state => {
            const events_to_append = snapshot.docs.map(doc => doc.data());
            let events_by_date = state.events_by_date;
            let events_by_date_map = state.events_by_date[date] || {};
            events_to_append.forEach(event => {
                events_by_date_map[event.uid] = event;
            })
            events_by_date[date] = events_by_date_map;
            return {
                events_by_date
            };
        });
    },

    // Create an event
    // Params: (authdata, eventdata)
    createEvent: (user, data) => {
        let id = db.collection("Events").doc().id;

        let event_ref = db.collection("Events").doc(id),
        user_ref = db.collection("Users").doc(user.uid);

        let event_data = {
            ...data,
            organizerRef: user.uid,
            organizerName: user.profile.name,
            creationTime: firestore.FieldValue.serverTimestamp()
        };

        return db.runTransaction(async transaction => {
            await transaction.set(event_ref, event_data);
            return transaction.update(user_ref, {
                events: firestore.FieldValue.arrayUnion([id])
            });
        });
    },

    // Updates relevant attributes of an event
    updateEvent: () => {
        
    },

    // Archives the event by removing it from view
    // and "effectively" deleting an event from the creator's
    // past events
    archiveEvent: () => {

    },

    // Hides the event from view of all users
    hideEvent: () => {

    },

    // Hard delete of an event
    // Only takes place if the event has never been displayed
    // to users
    deleteEvent: () => {

    },
}));

export { useEvents };