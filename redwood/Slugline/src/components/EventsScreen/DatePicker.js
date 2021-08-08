import React, { useState, useEffect, useRef } from "react";

import {
    View,
    Text,
    FlatList,
    StyleSheet
} from "react-native";

import {
    LinearProgress,
    Icon
} from "react-native-elements";

import { SafeAreaView } from "react-native-safe-area-context";

import { height, width, Colors, Fonts } from "../../stylesheet";

import { getDayWithEnding, getMonthName, getWeekdayName } from "../../utils";

const NUM_DAYS = 7;

function DateItem({ item }) {
    let { date, key } = item;
    let monthDay = `${getMonthName(date)} ${getDayWithEnding(date)}`;
    let weekday = getWeekdayName(date);
    return (
        <View style={{
            display: "flex",
            flexDirection: "column",
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            width: width / 10 * 9,
        }}>
            <Text style={{
                ...Fonts.Label4,
                color: Colors.White.rgb
            }}>{key == 0 ? "Today" : weekday}</Text>
            <Text style={{
                ...Fonts.Paragraph3,
                color: Colors.White.rgb
            }}>{monthDay}</Text>
        </View>
    )
}

export default function DatePicker({ onChange }) {
    let [dates, setDates] = useState([]);
    const flatlistRef = useRef(null);
    let [selectedDate, setSelectedDate] = useState({
        date: new Date(),
        key: 0,
    });
    
    useEffect(() => {
        let data = [];
        for(let i = 0; i < NUM_DAYS; i++) {
            data[i] = {};
            data[i].date = new Date();
            data[i].date.setDate(data[i].date.getDate() + i);
            data[i].key = i;
        }
        setDates(data);
        setSelectedDate(data[0]);
    }, []);

    const renderDate = ({ item }) => {
        return (
            <DateItem 
                selectedDate={selectedDate}
                item={item}
            />
        );
    };

    let isChanging = false;

    const onViewableItemsChangedRef = useRef(({ viewableItems, changed}) => {
        if(viewableItems.length == 0) return;
        let { item } = viewableItems[0];

        setSelectedDate(item);
        
        onChange(item);
    });
    const viewabilityConfigRef = useRef({ itemVisiblePercentThreshold: 80 });

    const scrollLeft = () => {
        if(selectedDate?.key == 0) return;
        flatlistRef.current?.scrollToIndex({
            animated: true,
            index: selectedDate.key - 1
        })
    };

    const scrollRight = () => {
        if(selectedDate?.key == NUM_DAYS - 1) return;
        flatlistRef.current?.scrollToIndex({
            animated: true,
            index: selectedDate.key + 1
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.flatlistContainer}>
                <Icon 
                    name="chevron-left"
                    color={Colors.White.rgb}
                    style={{
                        opacity: selectedDate.key / NUM_DAYS
                    }}
                    onPress={scrollLeft}
                />
                <FlatList
                    ref={flatlistRef}
                    horizontal={true}
                    snapToAlignment="center"
                    snapToInterval={width / 10 * 9}
                    decelerationRate="fast"
                    onViewableItemsChanged={onViewableItemsChangedRef.current}
                    viewabilityConfig={viewabilityConfigRef.current}
                    data={dates}
                    keyExtractor={(item) => item.key}
                    renderItem={renderDate}
                />
                <Icon 
                    name="chevron-right"
                    color={Colors.White.rgb}
                    style={{
                        opacity: (NUM_DAYS - selectedDate.key - 1) / NUM_DAYS
                    }}
                    onPress={scrollRight}
                />
            </View>
            <LinearProgress 
                color="primary"
                variant="determinate"
                value={selectedDate == null ? 0 : (selectedDate.key + 1) / NUM_DAYS}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.Blue1.rgb
    },
    flatlistContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})
