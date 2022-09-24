import React, { useContext } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { getImages } from '../services/ApiService';
import { SearchContext } from '../context/Context';

export default function Details({ route, navigation }) {

    const searchContext = useContext(SearchContext);
    const { item } = route.params;
    const tags = item.tags.split(',');

    handleClick = (term) => {
        getImages(term, 1)
        .then((res) => {
            searchContext.resetData(res.data.hits);
            navigation.navigate('Results', {term: term});
        })
    };


    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: item.previewURL }}
                resizeMode={'cover'}
            />
            <Text>{item.user}</Text>
            <FlatList
                data={tags}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={{ alignSelf: 'flex-start' }}>
                        <TouchableOpacity onPress={() => this.handleClick(item)}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}