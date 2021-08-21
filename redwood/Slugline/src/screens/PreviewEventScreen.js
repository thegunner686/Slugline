import React from "react";

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity
} from "react-native";

import {
    LinearProgress,
    Button,
    Icon,
    Divider,
    Image
} from "react-native-elements";

import StretchList from "../components/StretchList";
import BackButton from "../components/BackButton";

import { useEvents } from "../stores/useEvents";
import { useAuth } from "../stores/useAuth";

import { toMonthDayDate, toAMPMTime } from "../utils";

import { Colors, Fonts, rgba, sizes, width, height } from "../stylesheet";

export default function PreviewEventScreen({ navigation }) {
    let [preview] = useEvents(state => [state.event_preview]);
    let [createEvent] = useEvents(state => [state.createEvent]);
    let [user] = useAuth(state => [state.user]);

    console.log(preview)

    const publishEvent = async () => {
        try {
            await createEvent(user, preview);
        } catch(e) {
            console.log(e);
        }
        navigation.navigate("Events");
    };

    return (
        <>
        <BackButton 
            orientation="left"
            onPress={navigation.goBack}
            color={Colors.White.rgb}
        />
        <StretchList
            header={
                <>
                <ImageBackground
                    source={{ uri: preview.photoURL }}
                    style={styles.photo}
                >
                    <View style={{flexGrow: 2,}}></View>
                    <View style={styles.nameOverlay}>
                        <Text style={styles.name}>
                            {preview.name}
                        </Text>
                        <Text style={Fonts.Paragraph4}>
                            {`Hosted by ${user.profile.name}`}
                        </Text>
                    </View>
                    <View style={{flexGrow: 1,}}></View>
                </ImageBackground>
                </>
            }
            body ={
                <>
                    <View style={{ marginVertical: 10 }}></View>
                    {
                        preview.isVirtual ?
                        <View style={styles.row}>
                            <View style={styles.iconContainer}>
                                <Icon
                                    name="online-prediction"
                                />
                            </View>
                            <View style={styles.contentContainer}>
                                <Text style={Fonts.Paragraph3}>{preview.link}</Text>
                            </View>
                        </View>
                        :
                        <View style={styles.row}>
                            <View style={styles.iconContainer}>
                                <Icon
                                    name="navigation"
                                    type="material-community"
                                />
                            </View>
                            <View style={styles.contentContainer}>
                                <View style={styles.row}>
                                    <Text style={Fonts.Paragraph2}>{preview.location?.name}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={Fonts.Paragraph4}>{preview.location?.address}</Text>
                                </View>
                                <View style={styles.row}>
                                    <TouchableOpacity>
                                        <Text style={[Fonts.Paragraph4, {
                                            color: Colors.Blue3.rgb
                                        }]}>Get Directions</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                    <Divider style={{ marginVertical: 10 }} />
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="calendar"
                                type="material-community"
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={Fonts.Paragraph3}>{toMonthDayDate(preview.startTime)}</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="clock-outline"
                                type="material-community"
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={Fonts.Paragraph3}>
                                {`${toAMPMTime(preview.startTime)} to ${toAMPMTime(preview.endTime)}`}
                            </Text>
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 10 }} />
                    <View style={styles.row}>
                        <View style={styles.labelContainer}>
                            <Text style={Fonts.Paragraph5}>Description</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="text"
                                type="material-community"
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <Text style={Fonts.Paragraph3}>{preview.description}</Text>
                        </View>
                    </View>
                    <Divider style={{ marginVertical: 10 }} />
                    {
                        preview.room != null && preview.room.trim() != "" &&
                        <>
                        <View style={styles.row}>
                            <View style={styles.labelContainer}>
                                <Text style={Fonts.Paragraph5}>Room</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={styles.iconContainer}>
                                <Icon
                                    name="meeting-room"
                                />
                            </View>
                            <View style={styles.contentContainer}>
                                <Text style={Fonts.Paragraph3}>{preview.room}</Text>
                            </View>
                        </View>
                        <Divider style={{ marginVertical: 10 }} />
                        </>
                    }
                    <View style={styles.row}>
                        <View style={styles.labelContainer}>
                            <Text style={Fonts.Paragraph5}>Contact Information</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="email"
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <View style={styles.row}>
                                <Text style={Fonts.Paragraph3}>{preview.contact?.email}</Text>
                            </View>
                        </View>
                    </View>
                    { preview.contact?.phone != null && preview.contact?.phone.trim() != "" &&
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name="phone"
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <View style={styles.row}>
                                <Text style={Fonts.Paragraph3}>{preview.contact?.phone}</Text>
                            </View>
                        </View>
                    </View>  
                    }
                    <Divider style={{ marginVertical: 10 }} />
                    <View style={styles.row}>
                        <View style={styles.labelContainer}>
                            <Text style={Fonts.Paragraph5}>Organizer</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Image 
                                source={{ uri: preview.organizer.picture }}
                                style={{
                                    width: sizes.Icon4,
                                    height: sizes.Icon4,
                                    borderRadius: 50
                                }}
                                placeholderStyle={{
                                    backgroundColor: "transparent"
                                }}
                            />
                        </View>
                        <View style={styles.contentContainer}>
                            <View style={styles.row}>
                                <Text style={Fonts.Paragraph3}>{preview.organizer?.name}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1}}>

                    </View>
                    <Button 
                        title="Publish Event"
                        titleStyle={{
                            ...Fonts.Paragraph3
                        }}
                        buttonStyle={{
                            backgroundColor: Colors.Blue3.rgb,
                            borderRadius: 5,
                            width: width / 10 * 9,
                            height: height / 20,
                            alignSelf: "center"
                        }}
                        onPress={publishEvent}
                    />
                </>
            }
        />
        </>
    )
}

const styles = StyleSheet.create({
    photo: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    nameOverlay: {
        width: "80%",
        height: "40%",
        flexShrink: 1,
        backgroundColor: rgba(Colors.White)(0.9),
        padding: 5
    },
    name: {
        ...Fonts.Header1
    },
    row: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    iconContainer: {
        flex: 1,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    labelContainer: {
        flex: 9,
        padding: 10
    },
    contentContainer: {
        flex: 9,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingRight: 10
    }
});
