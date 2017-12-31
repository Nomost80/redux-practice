# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(first_name: 'guillaume', last_name: 'soufflet', email: 'guillaume.soufflet1@viacesi.fr', password_digest: 'testtttttt')

10.times do |i|
  Ride.create(date: Date.today, reason: 'Prospection', from: 'Roye', to: 'Arras', return_trip: i.even? ? true : false, distance: i*5, user: user)
end