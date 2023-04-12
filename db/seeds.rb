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
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
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
    # Album.create!(name: "Moodswings In To Order", artist_id: 7) #3
    # Album.create!(name: "PINK PLANET", artist_id: 8) #4
    # Album.create!(name: "SOS", artist_id: 3) #5
    # Album.create!(name: "always", artist_id: 6) #6
    # Album.create!(name: "Starboy (Deluxe)", artist_id: 4) #7
    # Album.create!(name: "girls like me don't cry", artist_id: 5) #8
    # Album.create!(name: "MOONCHILD", artist_id: 1) #9
    # Album.create!(name: "When It's All Said And Done... Take Time", artist_id: 2) #10
    # Album.create!(name: "After Hours", artist_id: 4) #11

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


    # Song.create!(title: "Seraph", duration: "2:26", album_id: 3, artist_id: 7)
    # Song.create!(title: "1 Shot", duration: "2:24", album_id: 3, artist_id: 7)
    # Song.create!(title: "Mood", duration: "3:02", album_id: 3, artist_id: 7)
    # Song.create!(title: "Miss Understood", duration: "3:20", album_id: 3, artist_id: 7)
    # Song.create!(title: "Avalon", duration: "3:15", album_id: 3, artist_id: 7)
    # Song.create!(title: "Merry Go", duration: "3:10", album_id: 3, artist_id: 7)
    # Song.create!(title: "Ribbon", duration: "3:35", album_id: 3, artist_id: 7)
    # Song.create!(title: "Winterfall", duration: "3:36", album_id: 3, artist_id: 7)
    # Song.create!(title: "Calico", duration: "3:42", album_id: 3, artist_id: 7)
    # Song.create!(title: "Mr. Insanity", duration: "2:47", album_id: 3, artist_id: 7)
    # Song.create!(title: "Ballroom Extravaganza", duration: "3:09", album_id: 3, artist_id: 7)
    # Song.create!(title: "Sometimes I'm", duration: "2:37", album_id: 3, artist_id: 7)


    # Song.create!(title: "PINK CITY", duration: "3:07", album_id: 4, artist_id: 8)
    # Song.create!(title: "Heaven", duration: "2:49", album_id: 4, artist_id: 8)
    # Song.create!(title: "Paradise", duration: "2:55", album_id: 4, artist_id: 8)
    # Song.create!(title: "Magic", duration: "2:43", album_id: 4, artist_id: 8)
    # Song.create!(title: "So Sweet", duration: "2:48", album_id: 4, artist_id: 8)
    # Song.create!(title: "Chains", duration: "2:29", album_id: 4, artist_id: 8)
    # Song.create!(title: "Interlude", duration: "0:52", album_id: 4, artist_id: 8)
    # Song.create!(title: "Beautiful Life", duration: "2:28", album_id: 4, artist_id: 8)
    # Song.create!(title: "PINK MONEY", duration: "2:45", album_id: 4, artist_id: 8)
    # Song.create!(title: "At My Worst", duration: "2:50", album_id: 4, artist_id: 8)
    # Song.create!(title: "17", duration: "2:40", album_id: 4, artist_id: 8)
    # Song.create!(title: "Lows", duration: "3:16", album_id: 4, artist_id: 8)
    # Song.create!(title: "Not Alright", duration: "2:47", album_id: 4, artist_id: 8)
    # Song.create!(title: "Give It To Me", duration: "2:27", album_id: 4, artist_id: 8)
    # Song.create!(title: "Icy", duration: "2:58", album_id: 4, artist_id: 8)
    # Song.create!(title: "PINK FAMILY", duration: "2:32", album_id: 4, artist_id: 8)
    # Song.create!(title: "At My Worst (feat. Kehlani)", duration: "2:49", album_id: 4, artist_id: 8)
    # Song.create!(title: "Honesty", duration: "3:09", album_id: 4, artist_id: 8)


    # Song.create!(title: "SOS", duration: "1:57", album_id: 5, artist_id: 3)
    # Song.create!(title: "Kill Bill", duration: "2:33", album_id: 5, artist_id: 3)
    # Song.create!(title: "Seek & Destroy", duration: "3:23", album_id: 5, artist_id: 3)
    # Song.create!(title: "Low", duration: "3:01", album_id: 5, artist_id: 3)
    # Song.create!(title: "Love Language", duration: "3:03", album_id: 5, artist_id: 3)
    # Song.create!(title: "Blind", duration: "2:30", album_id: 5, artist_id: 3)
    # Song.create!(title: "Used (feat. Don Toliver)", duration: "2:26", album_id: 5, artist_id: 3)
    # Song.create!(title: "Snooze", duration: "3:21", album_id: 5, artist_id: 3)
    # Song.create!(title: "Notice Me", duration: "2:40", album_id: 5, artist_id: 3)
    # Song.create!(title: "Gone Girl", duration: "4:04", album_id: 5, artist_id: 3)
    # Song.create!(title: "Smoking on my Ex Pack", duration: "1:23", album_id: 5, artist_id: 3)
    # Song.create!(title: "Ghost in the Machine (feat. Phoebe Bridgers)", duration: "3:38", album_id: 5, artist_id: 3)
    # Song.create!(title: "F2F", duration: "3:05", album_id: 5, artist_id: 3)
    # Song.create!(title: "Nobody Gets Me", duration: "3:00", album_id: 5, artist_id: 3)
    # Song.create!(title: "Conceited", duration: "2:31", album_id: 5, artist_id: 3)
    # Song.create!(title: "Special", duration: "2:38", album_id: 5, artist_id: 3)
    # Song.create!(title: "Too Late", duration: "2:44", album_id: 5, artist_id: 3)
    # Song.create!(title: "Far", duration: "3:00", album_id: 5, artist_id: 3)
    # Song.create!(title: "Shirt", duration: "3:01", album_id: 5, artist_id: 3)
    # Song.create!(title: "Open Arms (feat. Travis Scott)", duration: "3:59", album_id: 5, artist_id: 3)
    # Song.create!(title: "I Hate U", duration: "2:53", album_id: 5, artist_id: 3)
    # Song.create!(title: "Good Days", duration: "4:38", album_id: 5, artist_id: 3)
    # Song.create!(title: "Forgiveless (feat. Ol' Dirty Bastard)", duration: "2:21", album_id: 5, artist_id: 3)

    
    # Song.create!(title: "always", duration: "2:52", album_id: 6, artist_id: 6)
    # Song.create!(title: "more", duration: "3:04", album_id: 6, artist_id: 6)
    # Song.create!(title: "drunk", duration: "3:47", album_id: 6, artist_id: 6)
    # Song.create!(title: "talk", duration: "2:54", album_id: 6, artist_id: 6)
    # Song.create!(title: "B.Y.S", duration: "2:45", album_id: 6, artist_id: 6)
    # Song.create!(title: "us", duration: "4:08", album_id: 6, artist_id: 6)


    # Song.create!(title: "Starboy (feat. Daft Punk)", duration: "3:50", album_id: 7, artist_id: 4)
    # Song.create!(title: "Party Monster", duration: "4:09", album_id: 7, artist_id: 4)
    # Song.create!(title: "False Alarm", duration: "3:40", album_id: 7, artist_id: 4)
    # Song.create!(title: "Reminder", duration: "3:38", album_id: 7, artist_id: 4)
    # Song.create!(title: "Rockin'", duration: "3:52", album_id: 7, artist_id: 4)
    # Song.create!(title: "Secrets", duration: "4:25", album_id: 7, artist_id: 4)
    # Song.create!(title: "True Colors", duration: "3:26", album_id: 7, artist_id: 4)
    # Song.create!(title: "Stargirl Interlude (feat. Lana Del Rey)", duration: "1:51", album_id: 7, artist_id: 4)
    # Song.create!(title: "Sidewalks (feat. Kendrick Lamar)", duration: "3:51", album_id: 7, artist_id: 4)
    # Song.create!(title: "Six Feet Under", duration: "3:57", album_id: 7, artist_id: 4)
    # Song.create!(title: "Love To Lay", duration: "3:42", album_id: 7, artist_id: 4)
    # Song.create!(title: "A Lonely Night", duration: "3:40", album_id: 7, artist_id: 4)
    # Song.create!(title: "Attention", duration: "3:17", album_id: 7, artist_id: 4)
    # Song.create!(title: "Ordinary Life", duration: "3:41", album_id: 7, artist_id: 4)
    # Song.create!(title: "Nothing Without You", duration: "3:18", album_id: 7, artist_id: 4)
    # Song.create!(title: "All I Know (feat. Future)", duration: "5:21", album_id: 7, artist_id: 4)
    # Song.create!(title: "Die For You", duration: "4:20", album_id: 7, artist_id: 4)
    # Song.create!(title: "I Feel It Coming (feat. Daft Punk)", duration: "4:29", album_id: 7, artist_id: 4)
    # Song.create!(title: "Die For You (with Ariana Grande) - Remix", duration: "3:52", album_id: 7, artist_id: 4)
    # Song.create!(title: "Starboy (feat. Daft Punk) - Kygo Remix", duration: "4:04", album_id: 7, artist_id: 4)
    # Song.create!(title: "Reminder (feat. A$AP Rocky & Young Thug)", duration: "3:41", album_id: 7, artist_id: 4)
    
    
    # Song.create!(title: "u should feel special", duration: "2:37", album_id: 8, artist_id: 5)
    # Song.create!(title: "obsessed", duration: "3:05", album_id: 8, artist_id: 5)
    # Song.create!(title: "dumb luck", duration: "2:46", album_id: 8, artist_id: 5)
    # Song.create!(title: "trust (feat. RINI)", duration: "3:17", album_id: 8, artist_id: 5)
    # Song.create!(title: "playing tricks", duration: "3:04", album_id: 8, artist_id: 5)
    # Song.create!(title: "insecurities", duration: "2:21", album_id: 8, artist_id: 5)
    # Song.create!(title: "girls like me don't cry", duration: "3:33", album_id: 8, artist_id: 5)
    

    # Song.create!(title: "Wide Open (Foreword)", duration: "2:59", album_id: 9, artist_id: 1)
    # Song.create!(title: "Switchblade", duration: "3:24", album_id: 9, artist_id: 1)
    # Song.create!(title: "Nightcrawlers", duration: "3:27", album_id: 9, artist_id: 1)
    # Song.create!(title: "Selene", duration: "3:17", album_id: 9, artist_id: 1)
    # Song.create!(title: "Tide", duration: "3:04", album_id: 9, artist_id: 1)
    # Song.create!(title: "Pandemonium", duration: "3:47", album_id: 9, artist_id: 1)
    # Song.create!(title: "Lose", duration: "4:16", album_id: 9, artist_id: 1)
    # Song.create!(title: "Plot Twist", duration: "3:27", album_id: 9, artist_id: 1)
    # Song.create!(title: "If There's Nothing Left...", duration: "3:30", album_id: 9, artist_id: 1)
    # Song.create!(title: "Drive On", duration: "3:37", album_id: 9, artist_id: 1)


    # Song.create!(title: "The Beach", duration: "3:25", album_id: 10, artist_id: 2)
    # Song.create!(title: "World We Created", duration: "3:13", album_id: 10, artist_id: 2)
    # Song.create!(title: "Take Time (Interlude)", duration: "0:45", album_id: 10, artist_id: 2)
    # Song.create!(title: "Favorite Mistake", duration: "2:52", album_id: 10, artist_id: 2)
    # Song.create!(title: "This Ain't Love", duration: "2:44", album_id: 10, artist_id: 2)
    # Song.create!(title: "Heartbreak Anniversary", duration: "3:18", album_id: 10, artist_id: 2)
    # Song.create!(title: "Like I Want You", duration: "4:20", album_id: 10, artist_id: 2)
    # Song.create!(title: "Vanish", duration: "3:29", album_id: 10, artist_id: 2)
    # Song.create!(title: "When It's All Said And Done", duration: "0:55", album_id: 10, artist_id: 2)
    # Song.create!(title: "Still Your Best", duration: "2:57", album_id: 10, artist_id: 2)
    # Song.create!(title: "Last Time (feat. Snoh Aalegra)", duration: "3:13", album_id: 10, artist_id: 2)
    # Song.create!(title: "Stuck On You", duration: "3:25", album_id: 10, artist_id: 2)
    # Song.create!(title: "All To Me", duration: "2:07", album_id: 10, artist_id: 2)


    # Song.create!(title: "Alone Again", duration: "4:10", album_id: 11, artist_id: 4)
    # Song.create!(title: "Too Late", duration: "3:59", album_id: 11, artist_id: 4)
    # Song.create!(title: "Hardest To Love", duration: "3:31", album_id: 11, artist_id: 4)
    # Song.create!(title: "Scared To Live", duration: "3:11", album_id: 11, artist_id: 4)
    # Song.create!(title: "Snowchild", duration: "4:07", album_id: 11, artist_id: 4)
    # Song.create!(title: "Escape From LA", duration: "5:55", album_id: 11, artist_id: 4)
    # Song.create!(title: "Heartless", duration: "3:18", album_id: 11, artist_id: 4)
    # Song.create!(title: "Faith", duration: "4:43", album_id: 11, artist_id: 4)
    # Song.create!(title: "Blinding Lights", duration: "3:20", album_id: 11, artist_id: 4)
    # Song.create!(title: "In Your Eyes", duration: "3:57", album_id: 11, artist_id: 4)
    # Song.create!(title: "Save Your Tears", duration: "3:35", album_id: 11, artist_id: 4)
    # Song.create!(title: "Repeat After Me (Interlude)", duration: "3:15", album_id: 11, artist_id: 4)
    # Song.create!(title: "After Hours", duration: "6:10", album_id: 11, artist_id: 4)
    # Song.create!(title: "Until I Bleed Out", duration: "3:10", album_id: 11, artist_id: 4)
    puts "Creating playlists..."
    Playlist.create!(name: 'sour apples', owner_id: 1)
    Playlist.create!(name: 'sour grapes', owner_id: 2)
    Playlist.create!(name: 'sour strawberries', owner_id: 3)
    Playlist.create!(name: 'sour lemons', owner_id: 1)
    Playlist.create!(name: 'sour melons', owner_id: 3)

    album1.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/Nicole.png"),
      filename: 'Nicole.png')
      
    album2.album_cover.attach(
      io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/album-covers/Give+or+Take.png"),
      filename: 'giveortake.png')


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
    # song6.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Facebook+Friends.mp3"),
    #   filename: 'fbf.mp3')
    # song7.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Anaheim.mp3"),
    #   filename: 'anaheim.mp3')
    # song8.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Milk+Teeth.mp3"),
    #   filename: 'mt.mp3')
    # song9.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Autumn.mp3"),
    #   filename: 'autumn.mp3')
    # song10.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Oceans+%26+Engines.mp3"),
    #   filename: 'oae.mp3')
    # song11.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/On+The+Drive+Home.mp3"),
    #   filename: 'otdh.mp3')
    # song12.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Nicole/Take+A+Chance+With+Me.mp3"),
    #   filename: 'tacwm.mp3')

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
    # song18.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Tryna+Be.mp3"),
    #   filename: 'trynabe.mp3')
    # song19.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Make+You+Mine.mp3"),
    #   filename: 'makeyoumine.mp3')
    # song20.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/july+16th.mp3"),
    #   filename: 'july16.mp3')
    # song21.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/For+Tonight.mp3"),
    #   filename: 'fortonight.mp3')
    # song22.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Lost+Me.mp3"),
    #   filename: 'lostme.mp3')
    # song23.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Lie+Again.mp3"),
    #   filename: 'lieagain.mp3')
    # song24.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Another+Heartbreak.mp3"),
    #   filename: 'anotherheartbreak.mp3')
    # song25.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/At+Least+We+Tried.mp3"),
    #   filename: 'atleastwetried.mp3')
    # song26.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Remind+Me.mp3"),
    #   filename: 'remindme.mp3')
    # song27.mp3.attach(
    #   io: URI.open("https://sbotify-seeds.s3.us-east-2.amazonaws.com/songs/Give+or+Take/Unholy+Matrimony.mp3"),
    #   filename: 'unholy.mp3')
    
    puts "Done!"
  # end