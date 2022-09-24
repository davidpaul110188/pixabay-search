import React, { useState, useEffect, useContext } from 'react';
import { View, Image, FlatList, TouchableOpacity } from 'react-native';
import { getImages } from '../services/ApiService';
import { SearchContext } from '../context/Context';

export default function Results({ route, navigation }) {

    const searchContext = useContext(SearchContext);
    const [page, setPage] = useState(1);
    const { term } = route.params;

    useEffect(() => {
       if(page > 1) {
        getImages(term, page)
        .then((res) => {
            searchContext.addData(res.data.hits);
        })
       }
    }, [page]);

    handleMore = () => {
        setPage(page +1);
    };

    handleClick = (item) => {
        navigation.navigate('Details', {item: item});
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={searchContext.data}
                numColumns={3}
                onEndReached={info => this.handleMore()}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    <View style={{ padding: 5, alignSelf: 'flex-start' }}>
                        <TouchableOpacity onPress={() => this.handleClick(item)}>
                            <Image
                                style={{ width: 120, height: 120 }}
                                source={{ uri: item.previewURL }}
                                resizeMode={'cover'}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}