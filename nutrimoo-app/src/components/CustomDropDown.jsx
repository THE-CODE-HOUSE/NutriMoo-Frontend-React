import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';

import React, { useState } from 'react';


export const CustomDropDown = ({ title, subTitle, options, zIndex, onSelect, titleColor }) => {
    const [selectedItem, setSelectedItem] = useState(subTitle);
    const [isClicked, setIsClicked] = useState(false);

    return (
        <View style={styles.container}>
        <Text style={[styles.heading, { color: titleColor || '#000' }]}>{title}</Text>

            <TouchableOpacity style={[styles.dropDownSelector, styles.boxShadow]} onPress={() => { setIsClicked(!isClicked) }}>
                <Text>{selectedItem}</Text>

            </TouchableOpacity>
            {isClicked && (
                <View style={[styles.dropDownArea, styles.boxShadow, { zIndex }]}>
                    <FlatList 
                        data={options} 
                        renderItem={({ item, index }) => (
                            <TouchableOpacity 
                                style={styles.dropDownItem} 
                                onPress={() => { 
                                    setSelectedItem(item); 
                                    onSelect(index); 
                                    setIsClicked(!isClicked);
                                }}
                            >
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )} 
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dropDownItem: {
        width: '90%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#8e8e8e',
        alignSelf: 'center',
        justifyContent: 'center',
        
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        marginLeft: '8%',
        marginTop: '2%',
    },
    dropDownSelector: {
        width: '85%',
        height: 50,
        borderRadius: 20,
        backgroundColor: "white",
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: '2%',
        elevation:10

    },
    icon: {
        width: 20,
        height: 20
    },
    dropDownArea: {
        width: '85%',
        height: '170%',
        marginTop: '2%',
        borderRadius: 20,
        backgroundColor: "white",
        alignSelf: 'center',
        position: 'absolute',
        top: 100,
        elevation:10

    },
    boxShadow: {

    }
})
