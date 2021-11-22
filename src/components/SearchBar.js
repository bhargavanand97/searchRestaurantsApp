import React , {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const SearchBar = ({searchValue , onSearch, onEnterPress}) => {   
    return (
        <View>
            <AntDesign name="search1" size={30} color="black" style= {styles.searchIcon}/>
            <TextInput 
                autoCapitalize = 'none'
                autoCorrect = {false}
                value={searchValue} 
                onChangeText={(searchKey)=> onSearch(searchKey)} 
                style={styles.input} placeholder="Search"
                onEndEditing = {()=>onEnterPress()}
            />
        </View>
    )
}




const styles = StyleSheet.create({
    input: {
        margin: 10,
        paddingLeft: 50,
        backgroundColor: '#F0EEEE',
        borderWidth: 2,
        borderColor: 'black',
        height: 50,
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center'        
    },
    searchIcon: {
        position: 'absolute',
        left: '8%',
        zIndex: 9,
        top: 20,
        
    }
})

export default SearchBar;