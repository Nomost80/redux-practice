class AddUserToRides < ActiveRecord::Migration[5.1]
  def change
    add_reference :rides, :user, index: true, foreign_key: true
  end
end
