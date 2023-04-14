import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { fetchSearchResults } from "../../store/search";
import './SearchBar.css'

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [searchText, setSearchText] = useState(""); 


    async function handleSearch(e) {
        e.preventDefault();
        const query = e.target.value;
        await setSearchText(query);
        dispatch(fetchSearchResults(query))
    }

    function handleSearchSubmit(e) {
        e.preventDefault();
        if(searchText.length > 0) {
            history.push(`/search?songs=${searchText}`)
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
                        onKeyDown={handleKeyPress}
                        ></input>
                    </div>
            </div>
        </>
    )
}

export default SearchBar;