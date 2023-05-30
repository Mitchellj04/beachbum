class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :address, :password_digest
end
