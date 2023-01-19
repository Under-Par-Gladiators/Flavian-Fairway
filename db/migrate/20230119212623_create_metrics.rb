class CreateMetrics < ActiveRecord::Migration[7.0]
  def change
    create_table :metrics do |t|
      t.string :location
      t.string :name_of_run
      t.integer :run_difficulty
      t.integer :elevation_change
      t.integer :average_speed
      t.integer :number_of_runs
      t.string :comment
      t.integer :wins
      t.integer :user_id

      t.timestamps
    end
  end
end
