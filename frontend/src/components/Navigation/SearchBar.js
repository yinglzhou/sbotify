import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { fetchSearchResults } from "../../store/search";

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

    return (
        <>
            <input onChange={handleSearch} type="text" placeholder="Search..."></input>
            <button onClick={handleSearchSubmit}>search</button>
        </>
    )
}

export default SearchBar;