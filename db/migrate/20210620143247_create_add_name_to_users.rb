class CreateAddNameToUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :add_name_to_users do |t|
      t.string :name

      t.timestamps
    end
  end
end
