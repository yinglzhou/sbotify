# Welcome to sbotify

### Introduction

sbotify is a clone of the Spotify web player. Spotify is a music streaming service that allows users to browse through and play songs from albums, artists, various pre-made playlists. A Spotify user that is not logged in is only allowed to browse and search for these features. They can not play any songs. Once logged in, the user is able to not only play songs, but curate playlists that will show up in their library. They can update or delete existing playlist that they've created. sbotify contains many features that the Spotify web player has and uses the following technologies:

* Languages: Javascript, Ruby, HTML, CSS,
* Frontend: React-Redux
* Database: PostgreSQL
* Hosting: Render
* Asset Storage: AWS (S3)

# Feature List
## Albums and Songs
a sbotify user is able to browse through existing data of albums that contains songs whether they are logged in or not:

![gif of profiles](app/assets/album-song.gif)

``` javascript
<ul id='album-container'>
    {albums.map(album => (
     <AlbumShowItem key={album.id} album={album}/>
     ))}
</ul>
```

Each AlbumShowItem
``` javascript
<div className='album-components'>
     <Link to={`/albums/${album.id}`} className='nav-link'>
          <div className='inner-album-components'>
               <div className='album-pics'>
                    <img src={album.albumCover} alt="x"/>
               </div>
               <div className='titleartist'>{album.name}</div>
               <div className='titleartist' id='artistname'>{artist.name}</div>
          </div>
     </Link>
</div>
```
## Playbar
A logged-in sbotify user will be able to play songs that are in albums or playlists through the playbar. 

``` javascript
<div id='main-playbar'>
    <div id='playbar-flex-container'>

        <div id='left-playbar'>
            <img id='mini-album-cover'
                src={albumart}/>
            <div id='titlewartist'>
                <div id='just-title'>{title}</div>
                <div id='just-artist'>{artist}</div>
            </div>
        </div>
        <div id='playbar-middle'>
            <div><Player/></div>
        </div>

        <div id='right-playbar-placeholder'>
        </div>
    </div>
</div>
```
This is the actual Player that uses the react-h5-audio-player.

``` javascript
<AudioPlayer
      src={mp3}
      layout="stacked-reverse"
      defaultCurrentTime="" 
      defaultDuration="" 
      showSkipControls={true}
      showJumpControls={false}
      customAdditionalControls={[]}
      customIcons={{
            play: playlogo,
            pause: pauselogo,
            previous: backward,
            next: forward,
            volume: volumeup,
            volumeMute: mute
         }} 
      onPause={handlePause}
      onPlay={handlePlay}
      onClickNext={handleNext}
      onClickPrevious={handlePrevious}
/>
```
## Playlists
When logged in, the user has access to playlists that they created on the SideNav component. They are also able to create and delete their own playlists:

``` javascript
<ul id='playlist-container'>
    {user_playlists.map(playlist => (
        <PlaylistShowItem key={playlist.id} playlist={playlist}/>
    ))}
</ul>
```
PlaylistShowItem:
``` javascript
<div>
    <Link to={`/playlists/${playlist.id}`} className='nav-link'>
        <div className='side-options' id='display-playlist-name'>{playlist.name}</div>
    </Link>
</div>
```

