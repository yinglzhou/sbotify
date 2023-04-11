import './AlbumShowItem.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AlbumShowItem = ({album}) => {
    const artistId = album.artistId;
    const artist = useSelector(state => state.artists[artistId])

    if (!artist) return null;

    console.log(album)

    return (
        <div className='album-components'>
            <Link to={`/albums/${album.id}`} className='nav-link'>
            <div className='inner-album-components'>
                    <div className='album-pics'>
                        <img src={album.albumCover} alt="ghost"/>
                    </div>
                    <div className='titleartist'>{album.name}</div>
                    <div className='titleartist' id='artistname'>{artist.name}</div>
                

            </div>
            </Link>
        </div>
    )
}

export default AlbumShowItem;