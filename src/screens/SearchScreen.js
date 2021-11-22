import React, {useState, useEffect, useReducer} from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [searchInp, setSearchInp] = useState('');
    const [searchSubmit, searchResults] = useResults();
    
    const searchRestaurants = (searchKey) =>{
        setSearchInp(searchKey);
    }
 
    return (
        <View style={styles.viewStyle}>           
            <SearchBar onSearch = {searchRestaurants} searchValue = {searchInp} onEnterPress = {searchSubmit}/>
            <Text>Fetched {searchResults.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        backgroundColor: '#fff'
    }
})

export default SearchScreen;