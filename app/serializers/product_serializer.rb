class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :size, :color, :price
  belongs_to :category
end
