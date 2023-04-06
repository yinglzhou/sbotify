import './AlbumShowItem.css'

const AlbumShowItem = ({album}) => {
    const artistId = album.artistId
    // get the artist slice of state

    return (
        <div>
            <p>{album.name}</p>
        </div>
    )
}

export default AlbumShowItem;