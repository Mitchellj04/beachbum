class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :size, :color, :price, :category, :image, :gender
  has_many :order_items
  has_many :orders, through: :order_items
  belongs_to :category
  belongs_to :gender

  def image 
    object.image.url
  end
  
end
