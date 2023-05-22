class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :size, :color, :price, :image
  belongs_to :category
end
