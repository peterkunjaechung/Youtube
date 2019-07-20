roles = ['admin', 'user']
5.times do 
  name = Faker::Movies::HarryPotter.character
  image = Faker::Avatar.image(name, "200x200", "png", "set3")
  email = Faker::Internet.email
  password = "password"
  u = User.create(name: name, email: email, password: password, password_confirmation: password) 
    
        2.times do
          v = Video.create(
            title: Faker::Movies::LordOfTheRings.location,
            description: Faker::Quote.yoda,
            duration: Faker::Number.decimal(2),
            genre: Faker::Book.genre,
            trailer: "https://www.theuiaa.org/wp-content/uploads/2017/12/2018_banner.jpg"
            # url: videos.sample
        )
          5.times do 
          c = Comment.create(
            title: Faker::Cannabis.health_benefit,
            body: Faker::Quote.famous_last_words,
            user_id: u.id,
            video_id: v.id
          )
        end
    end
end
puts "created a bunch of stuff and some comments"