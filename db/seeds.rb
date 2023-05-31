# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Category.delete_all
# OrderItem.delete_all
Product.delete_all
User.delete_all
Order.delete_all

u1 = User.create(name: 'Justin Mitchell', address: '1080 Dunbar Hill Road', email: 'mitchelljm04@gmail.com', phone: '203-909-0635', password: 'January499!')

c1 = Category.create(item: 'Shirt')
c2 = Category.create(item: 'Shorts')
c3 = Category.create(item: 'Long Sleeve')
c4 = Category.create(item: 'Swim suit')
c5 = Category.create(item: 'Pants')


p1 = Product.create(title: 'Tie Dye Shirt', size: 'M', color: 'Multi', price: '25.99',image: '/static/media/shirt1.0e06c4084163c06dc602.jpg', category_id: c1.id)
p2 = Product.create(title: 'Hemp Shirt', size: 'M', color: 'Cream', price: '22.95',image: '/static/media/shirt2.a36005b56314cfb0c15d.jpg', category_id: c1.id)
p3 = Product.create(title: 'Stretch Pants', size: 'M', color: 'Tan', price: '45.00', image: '/static/media/pants1.d94f2365bde63a79cf32.jpg', category_id: c5.id)
p4 = Product.create(title: 'Stretch Pants', size: 'M', color: 'Light Blue', price: '45.00',image: '/static/media/pants2.ad28dc1852f4ab748066.jpg', category_id: c5.id)
p5 = Product.create(title: 'Icon Swim Suit', size: 'M', color: 'Multi', price: '54.00',image: '/static/media/swim1.a1a3e5f441e85a19f67e.jpg', category_id: c4.id)


order1 = Order.create(subtotal: '195.65', user_id: u1.id)


order1.products << [p1, p2, p3]

