import React, { useRef, useState, useEffect } from "react";

import {
    SafeAreaView
} from "react-native-safe-area-context";

import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Platform
} from "react-native";

import {
    Button,
    Input,
    Icon,
    ListItem
} from "react-native-elements"

import { Modalize } from "react-native-modalize";

import { Colors, width, height, Fonts, Shadow } from "../stylesheet"

let data = [
    {
        name: "whatsup",
        description: "Woaaaaaaaa Woaaaaaaaa Woaaaaaaaa Woaaaaaaaa Woaaaaaaaa Woaaaaaaaa",
        key: 1,
    },
    {
        name: "no way",
        description: "Yo ok",
        key: 2,
    },
    {
        name: "Instantiate",
        description: "Depracate",
        key: 3,
    },
    {
        name: "Daylight",
        description: "Desiduous",
        key: 4,
    },
    {
        name: "wata patata",
        description: "Toes & Fingers",
        key: 5,
    },
]

function CampusUpdates({ notifications, setNotifications, open, onPress }) {
    return (
        <>
             <Icon 
                name={open ? "chevron-down" : "chevron-up"}
                type="material-community"
                color={Colors.Grey5.hex}
                onPress={onPress}
             />
            <View style={{ flexDirection: "row"}}>
                <View style={{ flex: 3}}>
                    <Text style={{
                        ...Fonts.SubHeader1,
                        marginBottom: 5,
                    }}>Campus Updates</Text>
                    <Text style={{
                        ...Fonts.Paragraph5
                    }}>
                        Get the latest updates and news from UC Santa Cruz. Feel free to turn on Notifications!
                    </Text>
                </View>
                <View style={{ flex: 1}}>
                    <Icon
                        name={notifications ? "notifications" : "notifications-off"}
                        type="material"
                        color={notifications ? Colors.Red3.hex : Colors.Grey4.hex}
                        onPress={() => setNotifications(!notifications)}
                        size={36}
                    />
                </View>
            </View>
        </>
    )
}

function renderUpdate({ item, navigation }) {
    return (
        <ListItem 
            Component={TouchableOpacity}
            bottomDivider
            onPress={() => navigation.navigate("CampusUpdateDetails", { item })}
        >
            <Icon 
                name="info"
                type="material"
            />
            <ListItem.Content>
                <ListItem.Title style={Fonts.SubHeader1}>{item.name}</ListItem.Title>
                <ListItem.Subtitle style={Fonts.Paragraph5}>{item.description}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )
}

function SolveScreen(props) {
    let [notifications, setNotifications] = useState(false);
    const modalRef = useRef(null);

    return (
        <SafeAreaView style={{ flex: 1,}}>
            <ImageBackground
                style={{
                    position: "absolute",
                    width,
                    height,
                }}
                source={require("../../assets/ucsc_photo4.png")}
            />
            <Button 
                title="What can we help you with?"
                titleStyle={{
                    color: Colors.Black.hex,
                    ...Fonts.Paragraph3,
                    marginLeft: 5
                }}
                buttonStyle={{
                    width: width / 4 * 3.5,
                    backgroundColor: Colors.White.hex,
                    borderRadius: 50,
                }}
                containerStyle={{
                    borderRadius: 50,
                    position: "absolute",
                    top: Platform.OS == "ios" ? 80 : height / 20,
                    alignSelf: "center",
                    zIndex: 1,
                }}
                icon={
                    <Icon 
                        name="search"
                        type="material"
                        color={Colors.Yellow2.hex}
                        size={24}
                    />
                }
                raised={true}
                onPress={() => props.navigation.navigate("SolveSearch")}
            />
            <View style={{
                backgroundColor: Colors.White.hex,
                width,
                height: 100,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
                position: "absolute",
                bottom: 0,
                ...Shadow.top
            }}>
                <ScrollView 
                    style={{
                        padding: 10
                    }}
                    onScrollBeginDrag={() => {
                        modalRef.current?.open()
                    }}
                >
                    <CampusUpdates 
                        notifications={notifications} 
                        setNotifications={setNotifications}
                        open={false}
                        onPress={() => modalRef.current?.open()}
                    />
                </ScrollView>
            </View>
            <Modalize 
                ref={modalRef}
                modalStyle={{ padding: 10, paddingTop: height / 10}}
                HeaderComponent={
                    <CampusUpdates 
                        notifications={notifications} 
                        setNotifications={setNotifications}
                        open={true}
                        onPress={() => modalRef.current?.close()}
                    />
                }
                flatListProps={{
                    data,
                    renderItem: ({ item }) => renderUpdate({ ...props, item }),
                    keyExtractor: item => item.key,
                    showsVerticalScrollIndicator: false,
                  }}
            ></Modalize>
        </SafeAreaView>
    )
}

export default SolveScreen;