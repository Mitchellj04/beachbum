class CategorySerializer < ActiveModel::Serializer
  attributes :id, :item
  has_many :products 
end
