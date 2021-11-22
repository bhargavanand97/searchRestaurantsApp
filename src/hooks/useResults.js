import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [searchResults, setSearchResults] = useState('');

    useEffect(()=> {
        searchSubmit('food');
    },[])

    try {
        var searchSubmit = async(searchString) => {
            console.log("Searching");
            const response = await yelp.get('/search',{
                params: {
                    term: searchString,
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

    return [searchSubmit, searchResults];
}