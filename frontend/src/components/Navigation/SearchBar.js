import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { clearSearchResults, fetchSearchResults } from "../../store/search";
import './SearchBar.css'
import { useEffect } from "react";

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchText, setSearchText] = useState(""); 


    async function handleSearch(e) {
        e.preventDefault();
        const query = e.target.value;
        setSearchText(query);
        if (query.trim() !== '') {
            dispatch(fetchSearchResults(query));
        } else {
            dispatch(clearSearchResults());
        }
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        if (searchText.trim() !== '') {
            history.push(`/search?songs=${searchText}`);
        }
    }
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSearchSubmit(e);
        }
    }
    return (
        <>
            <div id='search-icon-bar-holder'>

                    <div id='search-bar-outline'>
                    <div id='magnify'><i className="fa-solid fa-magnifying-glass"></i></div>
                        <input 
                        id='search-input'
                        onChange={handleSearch} 
                        type="text" 
                        placeholder="What do you want to listen to?"
                        // onKeyDown={handleKeyPress}
                        ></input>
                    </div>
            </div>
        </>
    )
}

export default SearchBar;