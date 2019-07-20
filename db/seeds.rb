roles = ['admin', 'user']
3.times do
  name = Faker::Movies::HarryPotter.character
  image = Faker::Avatar.image(name, "200x200", "png", "set3")
  email = Faker::Internet.email
  password = "password" 
  password_confirmation = "password"
  u = User.create(email: email, name: name, image: image, password: password, password_confirmation: password)
    6.times do 
      title = Faker::Book.title
      duration = "5"
      genre = Faker::Book.genre
      description = Faker::Movie.quote
      trailer = Faker::Internet.url
      v = Video.create(title: title, duration: duration, genre: genre, description: description, trailer: trailer, user_id: u.id)
    5.times do
      title = Faker::Cannabis.health_benefit
      body = Faker::Marketing.buzzwords
      Comment.create( title: title, body: body, video_id: v.id, user_id: u.id)
    end
  end
end
puts "created a bunch of stuff and some comments"
