class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :title
      t.string :size
      t.string :color
      t.float :price
      t.integer :category_id
      t.timestamps
    end
  end
end
