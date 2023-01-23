# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.where(email: "test@example1.com").first_or_create(password: "password1", password_confirmation: "password1", username: "testymctestpants")
user2 = User.where(email: "test@example2.com").first_or_create(password: "password2", password_confirmation: "password2", username: "testymctestpants2")
user3 = User.where(email: "test@example3.com").first_or_create(password: "password3", password_confirmation: "password3", username: "testymctestpants3")
user4 = User.where(email: "test@example4.com").first_or_create(password: "password4", password_confirmation: "password4", username: "testymctestpants4")
user5 = User.where(email: "test@example5.com").first_or_create(password: "password5", password_confirmation: "password5", username: "testymctestpants5")
user6 = User.where(email: "test@example6.com").first_or_create(password: "password6", password_confirmation: "password6", username: "testymctestpants6")
user7 = User.where(email: "test@example7.com").first_or_create(password: "password7", password_confirmation: "password7", username: "testymctestpants7")
user8 = User.where(email: "test@example8.com").first_or_create(password: "password8", password_confirmation: "password8", username: "testymctestpants8")
user9 = User.where(email: "test@example9.com").first_or_create(password: "password9", password_confirmation: "password9", username: "testymctestpants9")
user10 = User.where(email: "test@example10.com").first_or_create(password: "password10", password_confirmation: "password10", username: "testymctestpants10")
user11 = User.where(email: "test@example11.com").first_or_create(password: "password11", password_confirmation: "password11", username: "testymctestpants11")

user1.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:0
      )
      user2.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:11
      )
      user3.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:8
      )
      user4.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:6
      )
      user5.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:16
      )
      bottomdog = user6.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:2
      )
      topdog = user7.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:21
      )
      user8.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:18
      )
      user9.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:11
      )
      user10.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:3
      )
      user11.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:17
      )
