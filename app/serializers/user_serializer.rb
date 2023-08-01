class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :password_digest
  has_many :orders
  has_one :shipping
end
