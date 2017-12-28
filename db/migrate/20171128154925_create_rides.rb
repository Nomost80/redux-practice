class CreateRides < ActiveRecord::Migration[5.1]
  def change
    create_table :rides do |t|
      t.date :date, null: false
      t.text :reason, null: false
      t.string :from, null: false
      t.string :to, null: false
      t.boolean :return_trip, null: false
      t.integer :distance, null: false
      t.timestamps
    end
  end
end
