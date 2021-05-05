import React from "react";

import {
    TouchableOpacity
} from "react-native";

import {
    ListItem,
    Icon
} from "react-native-elements";

import { Modalize } from "react-native-modalize";

// Components
import BookmarkedLocationsHeader from "./BookmarkedLocationsHeader";

// Styles
import { Colors, Fonts, height, sizes, rgba } from "../../stylesheet";

function BookmarkListItem({ bookmark, onBookmarkPress }) {
    let { name, color, description } = bookmark;
    return (
        <ListItem 
            Component={TouchableOpacity}
            onPress={() => onBookmarkPress(bookmark)}
            bottomDivider
        >
            <Icon 
                name="location-pin"
                type="material"
                size={sizes.Icon3}
                color={color.rgb}
            />
            <ListItem.Content>
                <ListItem.Title style={Fonts.SubHeader1}>{name}</ListItem.Title>
                <ListItem.Subtitle style={Fonts.Paragraph5}>{description}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )
};

const BookmarkedLocationsModal = React.forwardRef((props, ref) => {
    let { bookmarks, onBookmarkPress } = props;
    return (
        <Modalize 
            ref={ref}
            modalStyle={{ padding: 10, paddingTop: height / 10}}
            HeaderComponent={
                <BookmarkedLocationsHeader
                    open={true}
                    onPress={() => ref.current?.close()}
                />
            }
            flatListProps={{
                data: bookmarks,
                renderItem: ({ item }) => (
                    <BookmarkListItem bookmark={item} onBookmarkPress={onBookmarkPress}/>
                ),
                keyExtractor: item => item.id,
                showsVerticalScrollIndicator: false,
            }}
        />
    )
});

export default BookmarkedLocationsModal;