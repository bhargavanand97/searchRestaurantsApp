import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
    const [searchInp, setSearchInp] = useState('');

    const searchRestaurants = (searchKey) =>{
        setSearchInp(searchKey);
    }

    const searchSubmit = () => {
        console.log(searchInp);
    }
 
    return (
        <View style={styles.viewStyle}>           
            <SearchBar onSearch = {searchRestaurants} searchValue = {searchInp} onEnterPress = {searchSubmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        backgroundColor: '#fff'
    }
})

export default SearchScreen;