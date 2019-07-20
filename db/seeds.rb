
roles = ['admin', 'user']
1.times do
  name = Faker::Movies::HarryPotter.character
  image = Faker::Avatar.image(name, "200x200", "png", "set3")
  email = Faker::Internet.email
  password = "password" 
  password_confirmation = "password"


  u = User.create(email: email, name: name, image: image, password: password, password_confirmation: password)
      title = "Big Buck Bunny"
      duration = "9:56"
      genre = "Animated"
      description = "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge."
      trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      thumbnail = "BigBuckBunny.jpg"
      like = 2000
      dislike = 3340
      v = Video.create(title: title, duration: duration, genre: genre, description: description, trailer: trailer, user_id: u.id)
    5.times do
      title = Faker::Cannabis.health_benefit
      body = Faker::Marketing.buzzwords
      Comment.create( title: title, body: body, video_id: v.id, user_id: (u.id))
    end
  end


###########################################################################################################################################
1.times do
  name = Faker::Movies::HarryPotter.character
  image = Faker::Avatar.image(name, "200x200", "png", "set3")
  email = Faker::Internet.email
  password = "password" 
  password_confirmation = "password"


  u = User.create(email: email, name: name, image: image, password: password, password_confirmation: password)
      title = "Elephant Dream"
      duration = "10:53"
      genre = "Animated"
      description = "The first Blender Open Movie from 2006"
      trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      thumbnail = "ElephantsDream.jpg"
      like = 20342
      dislike = 1239
      v = Video.create(title: title, duration: duration, genre: genre, description: description, trailer: trailer, user_id: u.id)
    5.times do
      title = Faker::Cannabis.health_benefit
      body = Faker::Marketing.buzzwords
      Comment.create( title: title, body: body, video_id: v.id, user_id: (u.id-1))
    end
  end


###########################################################################################################################################
1.times do
  name = Faker::Movies::HarryPotter.character
  image = Faker::Avatar.image(name, "200x200", "png", "set3")
  email = Faker::Internet.email
  password = "password" 
  password_confirmation = "password"


  u = User.create(email: email, name: name, image: image, password: password, password_confirmation: password)
      title = "Sintel"
      duration = "14:47"
      genre = "Animated"
      description = "From The Durian Open Movie Project and a Blender Institute Production."
      trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
      thumbnail = "Sintel.jpg"
      like = 64236
      dislike = 7652
      v = Video.create(title: title, duration: duration, genre: genre, description: description, trailer: trailer, user_id: u.id)
    5.times do
      title = Faker::Cannabis.health_benefit
      body = Faker::Marketing.buzzwords
      Comment.create( title: title, body: body, video_id: v.id, user_id: (u.id-1))
    end
  end


###########################################################################################################################################
1.times do
  name = Faker::Movies::HarryPotter.character
  image = Faker::Avatar.image(name, "200x200", "png", "set3")
  email = Faker::Internet.email
  password = "password" 
  password_confirmation = "password"


  u = User.create(email: email, name: name, image: image, password: password, password_confirmation: password)
      title = "Tears of Steel"
      duration = "12:14"
      genre = "Animated"
      description = "Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender. Target was to improve and test a complete open and free pipeline for visual effects in film - and to make a compelling sci-fi film in Amsterdam, the Netherlands.  The film itself, and all raw material used for making it, have been released under the Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org website to find out more about this, or to purchase the 4-DVD box with a lot of extras."
      trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      thumbnail = "TearsOfSteel.jpg"
      like = 4352
      dislike = 65438
      v = Video.create(title: title, duration: duration, genre: genre, description: description, trailer: trailer, user_id: u.id)
    5.times do
      title = Faker::Cannabis.health_benefit
      body = Faker::Marketing.buzzwords
      Comment.create( title: title, body: body, video_id: v.id, user_id: (u.id-1))
    end
  end

###########################################################################################################################################
1.times do
  name = Faker::Movies::HarryPotter.character
  image = Faker::Avatar.image(name, "200x200", "png", "set3")
  email = Faker::Internet.email
  password = "password" 
  password_confirmation = "password"


  u = User.create(email: email, name: name, image: image, password: password, password_confirmation: password)
      title = "We Are Going on Bullrun"
      duration = "0:47"
      genre = "Home Videos"
      description = "The Smoking Tire is going on the 2010 Bullrun Live Rally in a 2011 Shelby GT500, and posting a video from the road every single day! The only place to watch them is by subscribing to The Smoking Tire or watching at BlackMagicShine.com"
      trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      thumbnail = "WeAreGoingOnBullrun.jpg"
      like = 98765
      dislike = 548
      v = Video.create(title: title, duration: duration, genre: genre, description: description, trailer: trailer, user_id: u.id)
    5.times do
      title = Faker::Cannabis.health_benefit
      body = Faker::Marketing.buzzwords
      Comment.create( title: title, body: body, video_id: v.id, user_id: (u.id-1))
    end
  end


###########################################################################################################################################
1.times do
  name = Faker::Movies::HarryPotter.character
  image = Faker::Avatar.image(name, "200x200", "png", "set3")
  email = Faker::Internet.email
  password = "password" 
  password_confirmation = "password"


  u = User.create(email: email, name: name, image: image, password: password, password_confirmation: password)
      title = "What car can you get for a grand?"
      duration = "9:27"
      genre = "Informational"
      description = "The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car.The Smoking Tire meets up with Chris and Jorge from CarsForAGrand.com to see just how far $1,000 can go when looking for a car."
      trailer = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
      thumbnail = "WhatCarCanYouGetForAGrand.jpg"
      like = 70124
      dislike = 662
      v = Video.create(title: title, duration: duration, genre: genre, description: description, trailer: trailer, user_id: u.id)
    5.times do
      title = Faker::Cannabis.health_benefit
      body = Faker::Marketing.buzzwords
      Comment.create( title: title, body: body, video_id: v.id, user_id: (u.id-1))
    end
  end

usercount = User.count
commentcount = Comment.count

commentcount.times do |i|
  Comment.update((i+1), user_id: rand(usercount))
end

puts "created videos"