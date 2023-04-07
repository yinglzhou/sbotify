import { useEffect } from 'react'
import './AlbumShowItem.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtist } from '../../store/artist'
const AlbumShowItem = ({album}) => {
    const artistId = album.artistId;
    const artist = useSelector(state => state.artists[artistId])

    if (!artist) return null;

    return (
        <div className='album-components'>
            <img src={require('../assets/ghostie.jpg')} alt="ghost" width="185" height="185"/>
            <p>{album.name}</p>
            <p>{artist.name}</p>
        </div>
    )
}

export default AlbumShowItem;