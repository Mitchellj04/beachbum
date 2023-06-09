# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Category.delete_all
OrderItem.delete_all
Product.delete_all
User.delete_all
Order.delete_all

u1 = User.create(name: 'Justin Mitchell', address: '1080 Dunbar Hill Road', email: 'mitchelljm04@gmail.com', phone: '203-909-0635', password: 'January499!')

c1 = Category.create(item: 'Shirt')
c2 = Category.create(item: 'Shorts')
c3 = Category.create(item: 'Long Sleeve')
c4 = Category.create(item: 'Swim suit')
c5 = Category.create(item: 'Pants')


p1 = Product.create(title: 'Tie Dye Shirt', size: 'M', color: 'Multi', price: '25.99',image: '/public/Products/shirt1.jpg', category_id: c1.id)
p2 = Product.create(title: 'Hemp Shirt', size: 'M', color: 'Cream', price: '22.95',image: '/public/Products/shirt1.jpg', category_id: c1.id)
p3 = Product.create(title: 'Stretch Pants', size: 'M', color: 'Tan', price: '45.00', image: '/public/Products/shirt1.jpg', category_id: c5.id)
p4 = Product.create(title: 'Stretch Pants', size: 'M', color: 'Light Blue', price: '45.00',image: '/public/Products/shirt1.jpg', category_id: c5.id)
p5 = Product.create(title: 'Icon Swim Suit', size: 'M', color: 'Multi', price: '54.00',image: '/public/Products/shirt1.jpg', category_id: c4.id)
p6 = Product.create(title: 'Cloth stretch shorts',size: "L",color: 'Tan',price: '35.00',image: '/public/Products/shirt1.jpg',category_id: c2.id)
p7 = Product.create(title: 'Pattern Swim Trunks', size: 'L',color: "Multi",price: "34.99",image: '/public/Products/shirt1.jpg',category_id: c4.id)
p8 = Product.create(title: 'Cordoriou Shorts', size: 'L',color: "Coral",price: "35.99",category_id: c2.id)
p9 = Product.create(title: 'Oversized Captains Hoodie', size: "L",color: "Green",price: "65.99",category_id: c3.id)
p10 = Product.create(title: 'Oversized Captains Hoodie', size: 'L',color: "Blue",price: '65.99',category_id: c3.id)
p11 = Product.create(title: 'Lounge Shirt', size: 'L',color: "Blue",price: '54.99',category_id: c3.id)
p12 = Product.create(title: 'Stretch Pants', size: 'XL', color: 'Dark Blue', price: '45.00', category_id: c5.id)



order1 = Order.create(subtotal: '195.65', user_id: u1.id)


# order1.products << [p1, p2, p3]



amdin = Admin.create(username: 'Justin.Mitchell', password: 'Justin123')
