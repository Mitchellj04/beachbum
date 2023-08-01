class CreateShippings < ActiveRecord::Migration[7.0]
  def change
    create_table :shippings do |t|
      t.string :address
      t.string :town 
      t.string :state 
      t.integer :zipcode 
      t.integer :user_id
      t.timestamps
    end
  end
end
