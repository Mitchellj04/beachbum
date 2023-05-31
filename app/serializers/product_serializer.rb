class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :size, :color, :price, :image
  has_many :order_items
  has_many :orders, through: :order_items
  belongs_to :category
end
