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

            <div className='inner-album-components'>
                    <div className='album-pics'>
                        <img src={require('../assets/ghostie.jpg')} alt="ghost"/>
                    </div>
                    <div className='titleartist'>{album.name}</div>
                    <div className='titleartist' id='artistname'>{artist.name}</div>
                

            </div>
        </div>
    )
}

export default AlbumShowItem;