import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { getImages } from '../services/ApiService';
import { SearchContext } from '../context/Context';

export default function Search({ navigation }) {

    const searchContext = useContext(SearchContext);
    const [term, setTerm] = useState('');

    handleClick = () => {
        getImages(term, 1)
        .then((res) => {
            searchContext.resetData(res.data.hits);
            navigation.navigate('Results', {term: term});
        })
    };

    return (
        <View style={styles.view}>
                <TextInput
                    style={styles.input}
                    onChangeText={newText => setTerm(newText)}
                    placeholder="What to Search?"
                />
                <Text
                    style={styles.add}
                    onPress={this.handleClick}
                >
                    Go
                </Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    view: {
        flex: 1,
        width: '100%',
        bottom: '50%',
        position: 'absolute',
        flexDirection: 'row'
    },
    title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 30,
    },
    input: {
        width: '75%',
        borderRadius: 30,
        borderWidth: 1,
        padding: 5,
        marginLeft: 10,
        fontSize: 18
    },
    add: {
        fontSize: 20,
        padding: 5,
        position: 'absolute',
        right: '10%'
    }
});