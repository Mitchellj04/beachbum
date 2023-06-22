class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :size, :color, :price, :category, :image
  has_many :order_items
  has_many :orders, through: :order_items
  belongs_to :category

  def image 
    object.image.url
  end
  
end
