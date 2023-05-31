class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user, :products
  belongs_to :user
  has_many :products, through: :order_items
end
