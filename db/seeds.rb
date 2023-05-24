# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    puts "Destroying Users..."
    User.destroy_all
    puts "Destroying Artists..."
    Artist.destroy_all
    puts "Destroying Albums..."
    Album.destroy_all
    puts "Destroying Songs..."
    Song.destroy_all
    puts "Destroying Playlists..."
    Playlist.destroy_all
    puts "Destroying PlaylistTracks..."
    PlaylistTrack.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('artists')
    ApplicationRecord.connection.reset_pk_sequence!('albums')
    ApplicationRecord.connection.reset_pk_sequence!('songs')
    ApplicationRecord.connection.reset_pk_sequence!('playlists')
    ApplicationRecord.connection.reset_pk_sequence!('playlist_tracks')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      name: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
    User.create!(
      name: 'Kelly', 
      email: 'kelly@kelly.io', 
      password: 'password'
    )
    User.create!(
      name: 'Max', 
      email: 'max@max.io', 
      password: 'password'
    )

    puts "Creating artists..."
    Artist.create!(name: "NIKI") #1
    Artist.create!(name: "Giveon") #2
    Artist.create!(name: "SZA") #3
    Artist.create!(name: "The Weeknd") #4
    Artist.create!(name: "thuy") #5
    Artist.create!(name: "keshi") #6
    Artist.create!(name: "DPR IAN") #7
    Artist.create!(name: "Pink Sweat$") #8

    puts "Creating albums..."
    album1 = Album.create!(name: "Nicole", artist_id: 1) #1
    album2 = Album.create!(name: "Give or Take", artist_id: 2) #2
    album3 = Album.create!(name: "Moodswings In To Order", artist_id: 7) #3
    album4 = Album.create!(name: "PINK PLANET", artist_id: 8) #4
    album5 = Album.create!(name: "SOS", artist_id: 3) #5
    album6 = Album.create!(name: "always", artist_id: 6) #6
    album7 = Album.create!(name: "Starboy (Deluxe)", artist_id: 4) #7
    album8 = Album.create!(name: "girls like me don't cry", artist_id: 5) #8
    album9 = Album.create!(name: "MOONCHILD", artist_id: 1) #9
    album10 = Album.create!(name: "When It's All Said And Done... Take Time", artist_id: 2) #10
    album11 = Album.create!(name: "After Hours", artist_id: 4) #11

    puts "Creating songs..."
    song1 = Song.create!(title: "Before", duration: "3:54", album_id: 1, artist_id: 1)
    song2 = Song.create!(title: "High School in Jakarta", duration: "3:39", album_id: 1, artist_id: 1)
    song3 = Song.create!(title: "Backburner", duration: "3:56", album_id: 1, artist_id: 1)
    song4 = Song.create!(title: "Keeping Tabs", duration: "2:57", album_id: 1, artist_id: 1)
    song5 = Song.create!(title: "The Apartment We Won't Share", duration: "2:29", album_id: 1, artist_id: 1)
    song6 = Song.create!(title: "Facebook Friends", duration: "3:57", album_id: 1, artist_id: 1)
    song7 = Song.create!(title: "Anaheim", duration: "4:14", album_id: 1, artist_id: 1)
    song8 = Song.create!(title: "Milk Teeth", duration: "2:50", album_id: 1, artist_id: 1)
    song9 = Song.create!(title: "Autumn", duration: "3:52", album_id: 1, artist_id: 1)
    song10 = Song.create!(title: "Oceans & Engines", duration: "5:36", album_id: 1, artist_id: 1)
    song11 = Song.create!(title: "On The Drive Home", duration: "4:16", album_id: 1, artist_id: 1)
    song12 = Song.create!(title: "Take A Chance With Me", duration: "5:03", album_id: 1, artist_id: 1)


    song13 = Song.create!(title: "Let Me Go", duration: "2:56", album_id: 2, artist_id: 2)
    song14 = Song.create!(title: "Scarred", duration: "2:58", album_id: 2, artist_id: 2)
    song15 = Song.create!(title: "dec 11th", duration: "1:13", album_id: 2, artist_id: 2)
    song16 = Song.create!(title: "This Will Do", duration: "2:55", album_id: 2, artist_id: 2)
    song17 = Song.create!(title: "Get To You", duration: "3:25", album_id: 2, artist_id: 2)
    song18 = Song.create!(title: "Tryna Be", duration: "2:50", album_id: 2, artist_id: 2)
    song19 = Song.create!(title: "Make You Mine", duration: "3:20", album_id: 2, artist_id: 2)
    song20 = Song.create!(title: "july 16th", duration: "1:50", album_id: 2, artist_id: 2)
    song21 = Song.create!(title: "For Tonight", duration: "3:12", album_id: 2, artist_id: 2)
    song22 = Song.create!(title: "Lost Me", duration: "3:00", album_id: 2, artist_id: 2)
    song23 = Song.create!(title: "Lie Again", duration: "3:02", album_id: 2, artist_id: 2)
    song24 = Song.create!(title: "Another Heartbreak", duration: "4:09", album_id: 2, artist_id: 2)
    song25 = Song.create!(title: "At Least We Tried", duration: "3:32", album_id: 2, artist_id: 2)
    song26 = Song.create!(title: "Remind Me", duration: "3:24", album_id: 2, artist_id: 2)
    song27 = Song.create!(title: "Unholy Matrimony", duration: "3:20", album_id: 2, artist_id: 2)


    song28 = Song.create!(title: "Seraph", duration: "2:26", album_id: 3, artist_id: 7)
    song29 = Song.create!(title: "1 Shot", duration: "2:24", album_id: 3, artist_id: 7)
    song30 = Song.create!(title: "Mood", duration: "3:02", album_id: 3, artist_id: 7)
    song31 = Song.create!(title: "Miss Understood", duration: "3:20", album_id: 3, artist_id: 7)
    song32 = Song.create!(title: "Avalon", duration: "3:15", album_id: 3, artist_id: 7)
    song33 = Song.create!(title: "Merry Go", duration: "3:10", album_id: 3, artist_id: 7)
    song34 = Song.create!(title: "Ribbon", duration: "3:35", album_id: 3, artist_id: 7)
    song35 = Song.create!(title: "Winterfall", duration: "3:36", album_id: 3, artist_id: 7)
    song36 = Song.create!(title: "Calico", duration: "3:42", album_id: 3, artist_id: 7)
    song37 = Song.create!(title: "Mr. Insanity", duration: "2:47", album_id: 3, artist_id: 7)
    song38 = Song.create!(title: "Ballroom Extravaganza", duration: "3:09", album_id: 3, artist_id: 7)
    song39 = Song.create!(title: "Sometimes I'm", duration: "2:37", album_id: 3, artist_id: 7)


    song40 = Song.create!(title: "PINK CITY", duration: "3:07", album_id: 4, artist_id: 8)
    song41 = Song.create!(title: "Heaven", duration: "2:49", album_id: 4, artist_id: 8)
    song42 = Song.create!(title: "Paradise", duration: "2:55", album_id: 4, artist_id: 8)
    song43 = Song.create!(title: "Magic", duration: "2:43", album_id: 4, artist_id: 8)
    song44 = Song.create!(title: "So Sweet", duration: "2:48", album_id: 4, artist_id: 8)
    song45 = Song.create!(title: "Chains", duration: "2:29", album_id: 4, artist_id: 8)
    song46 = Song.create!(title: "Interlude", duration: "0:52", album_id: 4, artist_id: 8)
    song47 = Song.create!(title: "Beautiful Life", duration: "2:28", album_id: 4, artist_id: 8)
    song48 = Song.create!(title: "PINK MONEY", duration: "2:45", album_id: 4, artist_id: 8)
    song49 = Song.create!(title: "At My Worst", duration: "2:50", album_id: 4, artist_id: 8)
    song50 = Song.create!(title: "17", duration: "2:40", album_id: 4, artist_id: 8)
    song51 = Song.create!(title: "Lows", duration: "3:16", album_id: 4, artist_id: 8)
    song52 = Song.create!(title: "Not Alright", duration: "2:47", album_id: 4, artist_id: 8)
    song53 = Song.create!(title: "Give It To Me", duration: "2:27", album_id: 4, artist_id: 8)
    song54 = Song.create!(title: "Icy", duration: "2:58", album_id: 4, artist_id: 8)
    song55 = Song.create!(title: "PINK FAMILY", duration: "2:32", album_id: 4, artist_id: 8)
    song56 = Song.create!(title: "At My Worst (feat. Kehlani)", duration: "2:49", album_id: 4, artist_id: 8)
    song57 = Song.create!(title: "Honesty", duration: "3:09", album_id: 4, artist_id: 8)


    song58 = Song.create!(title: "SOS", duration: "1:57", album_id: 5, artist_id: 3)
    song59 = Song.create!(title: "Kill Bill", duration: "2:33", album_id: 5, artist_id: 3)
    song60 = Song.create!(title: "Seek & Destroy", duration: "3:23", album_id: 5, artist_id: 3)
    song61 = Song.create!(title: "Low", duration: "3:01", album_id: 5, artist_id: 3)
    song62 = Song.create!(title: "Love Language", duration: "3:03", album_id: 5, artist_id: 3)
    song63 = Song.create!(title: "Blind", duration: "2:30", album_id: 5, artist_id: 3)
    song64 = Song.create!(title: "Used (feat. Don Toliver)", duration: "2:26", album_id: 5, artist_id: 3)
    song65 = Song.create!(title: "Snooze", duration: "3:21", album_id: 5, artist_id: 3)
    song66 = Song.create!(title: "Notice Me", duration: "2:40", album_id: 5, artist_id: 3)
    song67 = Song.create!(title: "Gone Girl", duration: "4:04", album_id: 5, artist_id: 3)
    song68 = Song.create!(title: "Smoking on my Ex Pack", duration: "1:23", album_id: 5, artist_id: 3)
    song69 = Song.create!(title: "Ghost in the Machine (feat. Phoebe Bridgers)", duration: "3:38", album_id: 5, artist_id: 3)
    song70 = Song.create!(title: "F2F", duration: "3:05", album_id: 5, artist_id: 3)
    song71 = Song.create!(title: "Nobody Gets Me", duration: "3:00", album_id: 5, artist_id: 3)
    song72 = Song.create!(title: "Conceited", duration: "2:31", album_id: 5, artist_id: 3)
    song73 = Song.create!(title: "Special", duration: "2:38", album_id: 5, artist_id: 3)
    song74 = Song.create!(title: "Too Late", duration: "2:44", album_id: 5, artist_id: 3)
    song75 = Song.create!(title: "Far", duration: "3:00", album_id: 5, artist_id: 3)
    song76 = Song.create!(title: "Shirt", duration: "3:01", album_id: 5, artist_id: 3)
    song77 = Song.create!(title: "Open Arms (feat. Travis Scott)", duration: "3:59", album_id: 5, artist_id: 3)
    song78 = Song.create!(title: "I Hate U", duration: "2:53", album_id: 5, artist_id: 3)
    song79 = Song.create!(title: "Good Days", duration: "4:38", album_id: 5, artist_id: 3)
    song80 = Song.create!(title: "Forgiveless (feat. Ol' Dirty Bastard)", duration: "2:21", album_id: 5, artist_id: 3)

    
    song81 = Song.create!(title: "always", duration: "2:52", album_id: 6, artist_id: 6)
    song82 = Song.create!(title: "more", duration: "3:04", album_id: 6, artist_id: 6)
    song83 = Song.create!(title: "drunk", duration: "3:47", album_id: 6, artist_id: 6)
    song84 = Song.create!(title: "talk", duration: "2:54", album_id: 6, artist_id: 6)
    song85 = Song.create!(title: "B.Y.S", duration: "2:45", album_id: 6, artist_id: 6)
    song86 = Song.create!(title: "us", duration: "4:08", album_id: 6, artist_id: 6)


    song87 = Song.create!(title: "Starboy (feat. Daft Punk)", duration: "3:50", album_id: 7, artist_id: 4)
    song88 = Song.create!(title: "Party Monster", duration: "4:09", album_id: 7, artist_id: 4)
    song89 = Song.create!(title: "False Alarm", duration: "3:40", album_id: 7, artist_id: 4)
    song90 = Song.create!(title: "Reminder", duration: "3:38", album_id: 7, artist_id: 4)
    song91 = Song.create!(title: "Rockin'", duration: "3:52", album_id: 7, artist_id: 4)
    song92 = Song.create!(title: "Secrets", duration: "4:25", album_id: 7, artist_id: 4)
    song93 = Song.create!(title: "True Colors", duration: "3:26", album_id: 7, artist_id: 4)
    song94 = Song.create!(title: "Stargirl Interlude (feat. Lana Del Rey)", duration: "1:51", album_id: 7, artist_id: 4)
    song95 = Song.create!(title: "Sidewalks (feat. Kendrick Lamar)", duration: "3:51", album_id: 7, artist_id: 4)
    song96 = Song.create!(title: "Six Feet Under", duration: "3:57", album_id: 7, artist_id: 4)
    song97 = Song.create!(title: "Love To Lay", duration: "3:42", album_id: 7, artist_id: 4)
    song98 = Song.create!(title: "A Lonely Night", duration: "3:40", album_id: 7, artist_id: 4)
    song99 = Song.create!(title: "Attention", duration: "3:17", album_id: 7, artist_id: 4)
    song100 = Song.create!(title: "Ordinary Life", duration: "3:41", album_id: 7, artist_id: 4)
    song101 = Song.create!(title: "Nothing Without You", duration: "3:18", album_id: 7, artist_id: 4)
    song102 = Song.create!(title: "All I Know (feat. Future)", duration: "5:21", album_id: 7, artist_id: 4)
    song103 = Song.create!(title: "Die For You", duration: "4:20", album_id: 7, artist_id: 4)
    song104 = Song.create!(title: "I Feel It Coming (feat. Daft Punk)", duration: "4:29", album_id: 7, artist_id: 4)
    song105 = Song.create!(title: "Die For You (with Ariana Grande) - Remix", duration: "3:52", album_id: 7, artist_id: 4)
    song106 = Song.create!(title: "Starboy (feat. Daft Punk) - Kygo Remix", duration: "4:04", album_id: 7, artist_id: 4)
    song107 = Song.create!(title: "Reminder (feat. A$AP Rocky & Young Thug)", duration: "3:41", album_id: 7, artist_id: 4)
    
    
    song108 = Song.create!(title: "u should feel special", duration: "2:37", album_id: 8, artist_id: 5)
    song109 = Song.create!(title: "obsessed", duration: "3:05", album_id: 8, artist_id: 5)
    song110 = Song.create!(title: "dumb luck", duration: "2:46", album_id: 8, artist_id: 5)
    song111 = Song.create!(title: "trust (feat. RINI)", duration: "3:17", album_id: 8, artist_id: 5)
    song112 = Song.create!(title: "playing tricks", duration: "3:04", album_id: 8, artist_id: 5)
    song113 = Song.create!(title: "insecurities", duration: "2:21", album_id: 8, artist_id: 5)
    song114 = Song.create!(title: "girls like me don't cry", duration: "3:33", album_id: 8, artist_id: 5)
    

    song115 = Song.create!(title: "Wide Open (Foreword)", duration: "2:59", album_id: 9, artist_id: 1)
    song116 = Song.create!(title: "Switchblade", duration: "3:24", album_id: 9, artist_id: 1)
    song117 = Song.create!(title: "Nightcrawlers", duration: "3:27", album_id: 9, artist_id: 1)
    song118 = Song.create!(title: "Selene", duration: "3:17", album_id: 9, artist_id: 1)
    song119 = Song.create!(title: "Tide", duration: "3:04", album_id: 9, artist_id: 1)
    song120 = Song.create!(title: "Pandemonium", duration: "3:47", album_id: 9, artist_id: 1)
    song121 = Song.create!(title: "Lose", duration: "4:16", album_id: 9, artist_id: 1)
    song122 = Song.create!(title: "Plot Twist", duration: "3:27", album_id: 9, artist_id: 1)
    song123 = Song.create!(title: "If There's Nothing Left...", duration: "3:30", album_id: 9, artist_id: 1)
    song124 = Song.create!(title: "Drive On", duration: "3:37", album_id: 9, artist_id: 1)


    song125 = Song.create!(title: "The Beach", duration: "3:25", album_id: 10, artist_id: 2)
    song126 = Song.create!(title: "World We Created", duration: "3:13", album_id: 10, artist_id: 2)
    song127 = Song.create!(title: "Take Time (Interlude)", duration: "0:45", album_id: 10, artist_id: 2)
    song128 = Song.create!(title: "Favorite Mistake", duration: "2:52", album_id: 10, artist_id: 2)
    song129 = Song.create!(title: "This Ain't Love", duration: "2:44", album_id: 10, artist_id: 2)
    song130 = Song.create!(title: "Heartbreak Anniversary", duration: "3:18", album_id: 10, artist_id: 2)
    song131 = Song.create!(title: "Like I Want You", duration: "4:20", album_id: 10, artist_id: 2)
    song132 = Song.create!(title: "Vanish", duration: "3:29", album_id: 10, artist_id: 2)
    song133 = Song.create!(title: "When It's All Said And Done", duration: "0:55", album_id: 10, artist_id: 2)
    song134 = Song.create!(title: "Still Your Best", duration: "2:57", album_id: 10, artist_id: 2)
    song135 = Song.create!(title: "Last Time (feat. Snoh Aalegra)", duration: "3:13", album_id: 10, artist_id: 2)
    song136 = Song.create!(title: "Stuck On You", duration: "3:25", album_id: 10, artist_id: 2)
    song137 = Song.create!(title: "All To Me", duration: "2:07", album_id: 10, artist_id: 2)


    song138 = Song.create!(title: "Alone Again", duration: "4:10", album_id: 11, artist_id: 4)
    song139 = Song.create!(title: "Too Late", duration: "3:59", album_id: 11, artist_id: 4)
    song140 = Song.create!(title: "Hardest To Love", duration: "3:31", album_id: 11, artist_id: 4)
    song141 = Song.create!(title: "Scared To Live", duration: "3:11", album_id: 11, artist_id: 4)
    song142 = Song.create!(title: "Snowchild", duration: "4:07", album_id: 11, artist_id: 4)
    song143 = Song.create!(title: "Escape From LA", duration: "5:55", album_id: 11, artist_id: 4)
    song144 = Song.create!(title: "Heartless", duration: "3:18", album_id: 11, artist_id: 4)
    song145 = Song.create!(title: "Faith", duration: "4:43", album_id: 11, artist_id: 4)
    song146 = Song.create!(title: "Blinding Lights", duration: "3:20", album_id: 11, artist_id: 4)
    song147 = Song.create!(title: "In Your Eyes", duration: "3:57", album_id: 11, artist_id: 4)
    song148 = Song.create!(title: "Save Your Tears", duration: "3:35", album_id: 11, artist_id: 4)
    song149 = Song.create!(title: "Repeat After Me (Interlude)", duration: "3:15", album_id: 11, artist_id: 4)
    song150 = Song.create!(title: "After Hours", duration: "6:10", album_id: 11, artist_id: 4)
    song151 = Song.create!(title: "Until I Bleed Out", duration: "3:10", album_id: 11, artist_id: 4)
    
    
    
    puts "Creating playlists..."
    Playlist.create!(name: 'sour apples', owner_id: 1) #1
    Playlist.create!(name: 'sour grapes', owner_id: 2)#2
    Playlist.create!(name: 'sour strawberries', owner_id: 3)#3
    Playlist.create!(name: 'sour lemons', owner_id: 1)#4
    Playlist.create!(name: 'sour melons', owner_id: 3)#5
    Playlist.create!(name: 'sour peaches', owner_id: 1)#6
    Playlist.create!(name: 'sour cherries', owner_id: 3)#7

    puts "Creating playlist tracks..."
    PlaylistTrack.create!(playlist_id: 1, song_id: 2)
    PlaylistTrack.create!(playlist_id: 1, song_id: 3)
    PlaylistTrack.create!(playlist_id: 1, song_id: 42)
    PlaylistTrack.create!(playlist_id: 1, song_id: 54)
    PlaylistTrack.create!(playlist_id: 1, song_id: 6)
    PlaylistTrack.create!(playlist_id: 1, song_id: 75)
    PlaylistTrack.create!(playlist_id: 1, song_id: 88)

    PlaylistTrack.create!(playlist_id: 2, song_id: 11)
    PlaylistTrack.create!(playlist_id: 2, song_id: 12)
    PlaylistTrack.create!(playlist_id: 2, song_id: 132)
    PlaylistTrack.create!(playlist_id: 2, song_id: 14)
    PlaylistTrack.create!(playlist_id: 2, song_id: 62)
    PlaylistTrack.create!(playlist_id: 2, song_id: 74)
    PlaylistTrack.create!(playlist_id: 2, song_id: 89)

    PlaylistTrack.create!(playlist_id: 4, song_id: 21)
    PlaylistTrack.create!(playlist_id: 4, song_id: 122)
    PlaylistTrack.create!(playlist_id: 4, song_id: 93)
    PlaylistTrack.create!(playlist_id: 4, song_id: 84)
    PlaylistTrack.create!(playlist_id: 4, song_id: 46)

    PlaylistTrack.create!(playlist_id: 6, song_id: 34)
    PlaylistTrack.create!(playlist_id: 6, song_id: 2)
    PlaylistTrack.create!(playlist_id: 6, song_id: 68)
    PlaylistTrack.create!(playlist_id: 6, song_id: 45)
    PlaylistTrack.create!(playlist_id: 6, song_id: 109)
    PlaylistTrack.create!(playlist_id: 6, song_id: 139)
    PlaylistTrack.create!(playlist_id: 6, song_id: 120)
    PlaylistTrack.create!(playlist_id: 6, song_id: 6)

    
    puts "Adding covers and mp3 files..."
    album1.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/Nicole.png"),
      filename: 'Nicole.png')
      
    album2.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/Give+or+Take.png"),
      filename: 'giveortake.png')
    album3.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/Moodswings+In+To+Order.jpeg"),
      filename: 'mood.png')
    album4.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/PINK+PLANET.jpeg"),
      filename: 'pp.png')

    album5.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/SOS.png"),
      filename: 'sos.png')
    album6.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/always.jpeg"),
      filename: 'always.png')
    album7.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/Starboy+(Deluxe).jpeg"),
      filename: 'starboy.png')
    album8.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/girls+like+me+dont+cry.jpeg"),
      filename: 'glmdc.png')
    album9.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/MOONCHILD.jpeg"),
      filename: 'moonchild.png')
    album10.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/When+It's+All+Said+And+Done...+Take+Time.jpeg"),
      filename: 'wiasad.png')
    album11.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/After+Hours.jpeg"),
      filename: 'afterhours.png')




    song1.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Before.mp3"),
      filename: 'before.mp3')
    song2.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/High+School+in+Jakarta.mp3"),
      filename: 'hsinjak.mp3')
    song3.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Backburner.mp3"),
      filename: 'backburn.mp3')
    song4.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Keeping+Tabs.mp3"),
      filename: 'keepintabs.mp3')
    song5.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/The+Apartment+We+Won't+Share.mp3"),
      filename: 'tawws.mp3')
    song6.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Facebook+Friends.mp3"),
      filename: 'fbf.mp3')
    song7.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Anaheim.mp3"),
      filename: 'anaheim.mp3')
    song8.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Milk+Teeth.mp3"),
      filename: 'mt.mp3')
    song9.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Autumn.mp3"),
      filename: 'autumn.mp3')
    song10.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Oceans+%26+Engines.mp3"),
      filename: 'oae.mp3')
    song11.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/On+The+Drive+Home.mp3"),
      filename: 'otdh.mp3')
    song12.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Take+A+Chance+With+Me.mp3"),
      filename: 'tacwm.mp3')

    song13.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Let+Me+Go.mp3"),
      filename: 'lmg.mp3')
    song14.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Scarred.mp3"),
      filename: 'scarred.mp3')
    song15.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/dec+11th.mp3"),
      filename: 'dec11.mp3')
    song16.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/This+Will+Do.mp3"),
      filename: 'twd.mp3')
    song17.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Get+To+You.mp3"),
      filename: 'gty.mp3')
    song18.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Tryna+Be.mp3"),
      filename: 'trynabe.mp3')
    song19.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Make+You+Mine.mp3"),
      filename: 'makeyoumine.mp3')
    song20.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/july+16th.mp3"),
      filename: 'july16.mp3')
    song21.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/For+Tonight.mp3"),
      filename: 'fortonight.mp3')
    song22.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Lost+Me.mp3"),
      filename: 'lostme.mp3')
    song23.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Lie+Again.mp3"),
      filename: 'lieagain.mp3')
    song24.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Another+Heartbreak.mp3"),
      filename: 'anotherheartbreak.mp3')
    song25.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/At+Least+We+Tried.mp3"),
      filename: 'atleastwetried.mp3')
    song26.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Remind+Me.mp3"),
      filename: 'remindme.mp3')
    song27.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Unholy+Matrimony.mp3"),
      filename: 'unholy.mp3')

    song28.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Seraph.mp3"),
      filename: 'seraph.mp3')
    
    song29.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/1+Shot.mp3"),
      filename: '1shot.mp3')
    
    song30.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Mood.mp3"),
      filename: 'mood.mp3')

    song31.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Miss+Understood.mp3"),
      filename: 'miss.mp3')
    song32.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Avalon.mp3"),
      filename: 'avalon.mp3')
    song33.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Merry+Go.mp3"),
      filename: 'merrygo.mp3')

    song34.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Ribbon.mp3"),
      filename: 'ribbon.mp3')
    song35.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Winterfall.mp3"),
      filename: 'winterfall.mp3')
    song36.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Calico.mp3"),
      filename: 'calico.mp3')
    song37.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Mr.+Insanity.mp3"),
      filename: 'insanity.mp3')
    song38.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Ballroom+Extravaganza.mp3"),
      filename: 'ballroom.mp3')
    song39.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Moodswings+In+To+Order/Sometimes+I'm.mp3"),
      filename: 'sometimes.mp3')


    song40.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/PINK+CITY.mp3"),
      filename: 'pinkcity.mp3')
    song41.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Heaven.mp3"),
      filename: 'heaven.mp3')
    song42.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Paradise.mp3"),
      filename: 'paradise.mp3')
    song43.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Magic.mp3"),
      filename: 'magic.mp3')
    song44.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/So+Sweet.mp3"),
      filename: 'sosweet.mp3')
    song45.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Chains.mp3"),
      filename: 'chains.mp3')
    song46.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Interlude.mp3"),
      filename: 'interlude.mp3')
    song47.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Beautiful+Life.mp3"),
      filename: 'beautiful.mp3')
    song48.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/PINK+MONEY.mp3"),
      filename: 'pinkmoney.mp3')
    song49.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/At+My+Worst.mp3"),
      filename: 'atmyworst.mp3')
    song50.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/17.mp3"),
      filename: '17.mp3')
    song51.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Lows.mp3"),
      filename: 'lows.mp3')
    song52.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Not+Alright.mp3"),
      filename: 'notalright.mp3')
    song53.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Give+It+To+Me.mp3"),
      filename: 'giveittome.mp3')
    song54.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Icy.mp3"),
      filename: 'icy.mp3')
    song55.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/PINK+FAMILY.mp3"),
      filename: 'pinkfam.mp3')
    song56.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/At+My+Worst+(feat.+Kehlani).mp3"),
      filename: 'atmyworstke.mp3')
    song57.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/PINK+PLANET/Honesty.mp3"),
      filename: 'honesty.mp3')
    
    song58.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/SOS.mp3"),
      filename: 'sos.mp3')
    song59.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Kill+Bill.mp3"),
      filename: 'killbill.mp3')
    song60.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Seek+%26+Destroy.mp3"),
      filename: 'seek.mp3')
    song61.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Low.mp3"),
      filename: 'low.mp3')
    song62.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Love+Language.mp3"),
      filename: 'll.mp3')
    song63.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Blind.mp3"),
      filename: 'blind.mp3')
    song64.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Used+(feat.+Don+Toliver).mp3"),
      filename: 'used.mp3')
    song65.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Snooze.mp3"),
      filename: 'snooze.mp3')
    song66.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Notice+Me.mp3"),
      filename: 'noticeme.mp3')
    song67.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Gone+Girl.mp3"),
      filename: 'gg.mp3')
    song68.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Smoking+on+my+Ex+Pack.mp3"),
      filename: 'smokin.mp3')
    song69.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Ghost+in+the+Machine+(feat.+Phoebe+Bridgers).mp3"),
      filename: 'ghost.mp3')
    song70.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/F2F.mp3"),
      filename: 'f2f.mp3')
    song71.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Nobody+Gets+Me.mp3"),
      filename: 'nobody.mp3')
    song72.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Conceited.mp3"),
      filename: 'conceited.mp3')
    song73.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Special.mp3"),
      filename: 'special.mp3')
    song74.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Too+Late.mp3"),
      filename: 'toolate.mp3')
    song75.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Far.mp3"),
      filename: 'far.mp3')
    song76.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Shirt.mp3"),
      filename: 'shirt.mp3')
    song77.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Open+Arms+(feat.+Travis+Scott).mp3"),
      filename: 'open.mp3')
    song78.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/I+Hate+U.mp3"),
      filename: 'hate.mp3')
    song79.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Good+Days.mp3"),
      filename: 'good.mp3')
    song80.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/SOS/Forgiveless+(feat.+Ol'+Dirty+Bastard).mp3"),
      filename: 'forgiv.mp3')


    song81.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/always/always.mp3"),
      filename: 'always.mp3')
    song82.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/always/more.mp3"),
      filename: 'more.mp3')
    song83.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/always/drunk.mp3"),
      filename: 'drunk.mp3')
    song84.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/always/talk.mp3"),
      filename: 'talk.mp3')
    song85.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/always/B.Y.S..mp3"),
      filename: 'bys.mp3')
    song86.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/always/us.mp3"),
      filename: 'us.mp3')


    song87.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Starboy+(feat.+Daft+Punk).mp3"),
      filename: 'starboy.mp3')
    song88.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Party+Monster.mp3"),
      filename: 'party.mp3')
    song89.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/False+Alarm.mp3"),
      filename: 'false.mp3')
    song90.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Reminder.mp3"),
      filename: 'remind.mp3')
    song91.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Reminder.mp3"),
      filename: 'rockin.mp3')
    song92.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Secrets.mp3"),
      filename: 'secret.mp3')
    song93.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/True+Colors.mp3"),
      filename: 'truecolors.mp3')
    song94.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Stargirl+Interlude+(feat.+Lana+Del+Rey).mp3"),
      filename: 'stargirl.mp3')
    song95.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Sidewalks+(feat.+Kendrick+Lamar).mp3"),
      filename: 'sidewalks.mp3')
    song96.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Six+Feet+Under.mp3"),
      filename: 'sixfeet.mp3')
    song97.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Love+To+Lay.mp3"),
      filename: 'lovetolay.mp3')
    song98.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/A+Lonely+Night.mp3"),
      filename: 'lonelynight.mp3')
    song99.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Attention.mp3"),
      filename: 'attention.mp3')
    song100.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Ordinary+Life.mp3"),
      filename: 'ordinary.mp3')
    song101.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Nothing+Without+You.mp3"),
      filename: 'nothingwoyou.mp3')
    song102.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/All+I+Know+(feat.+Future).mp3"),
      filename: 'alliknow.mp3')
    song103.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Die+For+You.mp3"),
      filename: 'dieforyou.mp3')
    song104.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/I+Feel+It+Coming+(feat.+Daft+Punk).mp3"),
      filename: 'ifeelitcoming.mp3')
    song105.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Die+For+You+(with+Ariana+Grande)+-+Remix.mp3"),
      filename: 'dieforuremix.mp3')
    song106.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Starboy+(feat.+Daft+Punk)+-+Remix.mp3"),
      filename: 'starboyremix.mp3')
    song107.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Starboy(Deluxe)/Reminder+(feat.+A%24AP+Rocky+%26+Young+Thug)+-+Remix.mp3"),
      filename: 'reminder.mp3')


    song108.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/girls+like+me+don't+cry/u+should+feel+special.mp3"),
      filename: 'special.mp3')
    song109.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/girls+like+me+don't+cry/obsessed.mp3"),
      filename: 'obsessed.mp3')
    song110.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/girls+like+me+don't+cry/dumb+luck.mp3"),
      filename: 'dumb.mp3')
    song111.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/girls+like+me+don't+cry/trust+(feat.+RINI).mp3"),
      filename: 'trust.mp3')
    song112.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/girls+like+me+don't+cry/playing+tricks.mp3"),
      filename: 'playing.mp3')
    song113.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/girls+like+me+don't+cry/insecurities.mp3"),
      filename: 'insecure.mp3')
    song114.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/girls+like+me+don't+cry/girls+like+me+don't+cry.mp3"),
      filename: 'girlslikeme.mp3')

  
    song115.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/Wide+Open+(Foreword).mp3"),
      filename: 'wide.mp3')
    song116.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/Switchblade.mp3"),
      filename: 'switchblade.mp3')
    song117.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/Nightcrawlers.mp3"),
      filename: 'nightcrawl.mp3')
    song118.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/Selene.mp3"),
      filename: 'selene.mp3')
    song119.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/Switchblade.mp3"),
      filename: 'tide.mp3')
    song120.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/Pandemonium.mp3"),
      filename: 'panda.mp3')
    song121.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/Lose.mp3"),
      filename: 'lose.mp3')
    song122.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/Plot+Twist.mp3"),
      filename: 'plot.mp3')
    song123.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/If+There's+Nothing+Left....mp3"),
      filename: 'iftheres.mp3')
    song124.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/MOONCHILD/Drive+On.mp3"),
      filename: 'driveon.mp3')


    song125.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/The+Beach.mp3"),
      filename: 'beach.mp3')
    song126.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/World+We+Created.mp3"),
      filename: 'world.mp3')
    song127.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/Take+Time+(Interlude).mp3"),
      filename: 'take.mp3')
    song128.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/Favorite+Mistake.mp3"),
      filename: 'favorite.mp3')
    song129.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/This+Ain't+Love.mp3"),
      filename: 'thisaint.mp3')
    song130.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/Heartbreak+Anniversary.mp3"),
      filename: 'heart.mp3')
    song131.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/Like+I+Want+You.mp3"),
      filename: 'likeiwant.mp3')
    song132.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/Vanish.mp3"),
      filename: 'vanish.mp3')
    song133.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/When+It's+All+Said+And+Done.mp3"),
      filename: 'whenitsall.mp3')
    song134.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/Still+Your+Best.mp3"),
      filename: 'stillyour.mp3')
    song135.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/Last+Time+(feat.+Snoh+Aalegra).mp3"),
      filename: 'lasttime.mp3')
    song136.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/Stuck+On+You.mp3"),
      filename: 'stuck.mp3')
    song137.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/When+It's+All+Said+and+Done/All+To+Me.mp3"),
      filename: 'all.mp3')

    song138.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Alone+Again.mp3"),
      filename: 'aloneagain.mp3')
    song139.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Too+Late.mp3"),
      filename: 'toolate.mp3')
    song140.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Hardest+To+Love.mp3"),
      filename: 'hardest.mp3')
    song141.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Scared+To+Live.mp3"),
      filename: 'scared.mp3')
    song142.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Snowchild.mp3"),
      filename: 'snowchi.mp3')
    song143.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Escape+From+LA.mp3"),
      filename: 'escape.mp3')
    song144.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Heartless.mp3"),
      filename: 'heartless.mp3')
    song145.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Faith.mp3"),
      filename: 'faith.mp3')
    song146.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Blinding+Lights.mp3"),
      filename: 'blinding.mp3')
    song147.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/In+Your+Eyes.mp3"),
      filename: 'inyoureyes.mp3')
    song148.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Save+Your+Tears.mp3"),
      filename: 'save.mp3')
    song149.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Repeat+After+Me+(Interlude).mp3"),
      filename: 'repeat.mp3')
    song150.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/After+Hours.mp3"),
      filename: 'afterhours.mp3')
    song151.mp3.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/After+Hours/Until+I+Bleed+Out.mp3"),
      filename: 'untilibleed.mp3')
    puts "Done!"
# end