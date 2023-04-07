import { useEffect } from "react";
import AlbumShowItem from "../AlbumShowItem/AlbumShowItem";
import './AlbumShow.css'
import { useDispatch, useSelector } from "react-redux";
import { fetchAllAlbums } from "../../store/album";

const AlbumShow = () => {
    const dispatch = useDispatch();
    const albums = useSelector(state => Object.values(state.albums))

    useEffect(()=>{
        dispatch(fetchAllAlbums());
    },[])
    
    return (
        <div>
            {/* <h1>Hello from album show</h1> */}
            <ul id='album-container'>
                {albums.map(album => (
                    <AlbumShowItem key={album.id} album={album}/>
                ))}
            </ul>
        </div>
    )
}

export default AlbumShow;