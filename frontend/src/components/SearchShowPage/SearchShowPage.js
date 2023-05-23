import { useSelector } from 'react-redux';
import { fetchSearchResults } from '../../store/search';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import './SearchShowPage.css'
import { playSong } from '../../store/playbar';
import { setLoginModalPic, setLoginModalStatus } from '../../store/ui';

const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session ? state.session.user : null)
    const [isHovered, setIsHovered] = useState(null);
    
    useEffect(() => {
        const query = history.location.search.split('=')[1];
        dispatch(fetchSearchResults(query))
    }, []);

    const searchResults = useSelector((state) => state.searchResults );
    let hist = history.location.search.split('=')[1]

    const noResults = Object.keys(searchResults).length === 0;

    const handleHover = (el) => {
        setIsHovered(el)
    }
    const handleLeave = () => {
        setIsHovered(null)
    }

    const handlePlay = (ele) => () => {
        if (!sessionUser) {
            // debugger
            dispatch(setLoginModalPic(ele.albumCover))
            dispatch(setLoginModalStatus(true))
        }
        dispatch(playSong(ele))
    }
    return(
        <>
        <div className='main-content-container'>
            {hist && !noResults && <div id='results-for'>Songs with "{hist}"</div>}
            {hist && noResults && <div id='results-for'>No songs containing "{hist}"</div>}
            <div id='album-container'>

            {Object.values(searchResults).map((ele) => {
                return (
                <div className='album-components'>
                {/* <Link to={`/albums/${album.id}`} className='nav-link'> */}
                <div className='inner-search-components'
                    onMouseEnter={() => handleHover(ele)}
                    onMouseLeave={() => handleLeave(ele)}
                >
                    <div id='search-result-pic-container'>
                        <div className='album-pics'>
                            <img src={ele.albumCover} alt="x"/>
                        </div>
                        {isHovered?.id === ele.id && 
                        <div id='search-album-play-button'
                        onClick={handlePlay(ele)}
                        ><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>}
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