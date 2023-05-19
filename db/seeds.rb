# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

c1 = Category.create(item: 'Shirt')
c2 = Category.create(item: 'Shorts')
c3 = Category.create(item: 'Long Sleeve')
c4 = Category.create(item: 'Swim suit')


p1 = Product.create(title: 'Long Sleeve light weight shirt', size: 'M', color: 'blue', price: '19.99', category_id: c3.id)