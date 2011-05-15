# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110514123052) do

  create_table "aufgaben", :force => true do |t|
    t.date     "erfasst"
    t.string   "projekt"
    t.text     "aufgabe"
    t.text     "erklaerung"
    t.text     "information"
    t.string   "zustaendig"
    t.string   "status"
    t.date     "erledigt_am"
    t.integer  "zeit"
    t.string   "heute_bearbeiten_kz"
    t.string   "nur_heute_interessant"
    t.string   "mantis_nummer"
    t.string   "privat"
    t.integer  "aufgabe_id"
    t.date     "termin"
    t.date     "aend_dat"
    t.integer  "reihenfolge"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "projekte", :force => true do |t|
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end