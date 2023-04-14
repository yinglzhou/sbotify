import { useSelector } from 'react-redux';
import { fetchSearchResults } from '../../store/search';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './SearchShowPage.css'

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(() => {
        const query = history.location.search.split('=')[1];
        dispatch(fetchSearchResults(query))
    }, []);

    const searchResults = useSelector((state) => state.searchResults );
    let hist = history.location.search.split('=')[1]
    
    return(
        <>
        <div className='main-content-container'>
            {hist && <div id='results-for'>Results for "{hist}"</div>}
            <div id='album-container'>
            {Object.values(searchResults).map((ele) => {
                return (
                <div className='album-components'>
                {/* <Link to={`/albums/${album.id}`} className='nav-link'> */}
                <div className='inner-search-components'>
                    <div className='album-pics'>
                        <img src={ele.albumCover} alt="x"/>
                    </div>
                    <div className='titleartist'>{ele.title}</div>
                    <div className='titleartist' id='artistname'>{ele.artistName}</div>
                

                </div>
                {/* </Link> */}
                </div>)
            })}
            </div>
        </div>
        </>
    );
}
export default Search;