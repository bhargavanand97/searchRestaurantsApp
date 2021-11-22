import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
    const [searchInp, setSearchInp] = useState('');
    const [searchResults, setSearchResults] = useState('');

    const searchRestaurants = (searchKey) =>{
        setSearchInp(searchKey);
    }
    try {
        var searchSubmit = async() => {
            const response = await yelp.get('/search',{
                params: {
                    term: searchInp,
                    limit: 50,
                    location: 'san jose'
                }
            })
            setSearchResults(response.data.businesses);
        }       
    }
    catch(e) {
        console.log(e);
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