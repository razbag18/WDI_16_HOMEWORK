class CreateRemarks < ActiveRecord::Migration[5.2]
  def change
    create_table :remarks do |t|
      t.string :content
      t.integer :planet_id

      t.timestamps
    end
  end
end
