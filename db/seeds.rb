# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.where(email: "test@example1.com").first_or_create(password: "password1", password_confirmation: "password1", username: "testymctestpants")
user2 = User.where(email: "test@example2.com").first_or_create(password: "password2", password_confirmation: "password2", username: "Ralph")
user3 = User.where(email: "test@example3.com").first_or_create(password: "password3", password_confirmation: "password3", username: "The Shredder")
user4 = User.where(email: "test@example4.com").first_or_create(password: "password4", password_confirmation: "password4", username: "Molotov")
user5 = User.where(email: "test@example5.com").first_or_create(password: "password5", password_confirmation: "password5", username: "Edgelord6")
user6 = User.where(email: "test@example6.com").first_or_create(password: "password6", password_confirmation: "password6", username: "shoeby")
user7 = User.where(email: "test@example7.com").first_or_create(password: "password7", password_confirmation: "password7", username: "tomthetank")
user8 = User.where(email: "test@example8.com").first_or_create(password: "password8", password_confirmation: "password8", username: "boomer")
user9 = User.where(email: "test@example9.com").first_or_create(password: "password9", password_confirmation: "password9", username: "budlightonly")
user10 = User.where(email: "test@example10.com").first_or_create(password: "password10", password_confirmation: "password10", username: "Chad")
user11 = User.where(email: "test@example11.com").first_or_create(password: "password11", password_confirmation: "password11", username: "get the feels")

      user1.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:4000, average_speed:30, number_of_runs:3, comment:"this slapped", wins:0
      )
      user2.create_metric(
        location:"bigbear", name_of_run:"other run", run_difficulty:3, elevation_change:3500, average_speed:22, number_of_runs:13, comment:"no shot", wins:11
      )
      user3.create_metric(
        location:"bigbear", name_of_run:"slippy run", run_difficulty:2, elevation_change:2000, average_speed:18, number_of_runs:8, comment:"Come at me", wins:8
      )
      user4.create_metric(
        location:"bigbear", name_of_run:"hobbit slope", run_difficulty:1, elevation_change:800, average_speed:20, number_of_runs:12, comment:"slip slop", wins:6
      )
      user5.create_metric(
        location:"bigbear", name_of_run:"The Cheese", run_difficulty:4, elevation_change:2000, average_speed:25, number_of_runs:19, comment:"Got jenny's number", wins:16
      )
      bottomdog = user6.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:2500, average_speed:22, number_of_runs:2, comment:"Also slapped", wins:2
      )
      topdog = user7.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:3000, average_speed:32, number_of_runs:6, comment:"the slappiest", wins:21
      )
      user8.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:1800, average_speed:33, number_of_runs:20, comment:"i'm here", wins:18
      )
      user9.create_metric(
        location:"bigbear", name_of_run:"bigrun", run_difficulty:3, elevation_change:2200, average_speed:34, number_of_runs:7, comment:"I hate chad", wins:11
      )
      user10.create_metric(
        location:"bigbear", name_of_run:"slippy run", run_difficulty:2, elevation_change:3000, average_speed:19, number_of_runs:7, comment:"sad snow today", wins:3
      )
      user11.create_metric(
        location:"bigbear", name_of_run:"hobbit slope", run_difficulty:1, elevation_change:1000, average_speed:1, number_of_runs:12, comment:"declined", wins:17
      )
