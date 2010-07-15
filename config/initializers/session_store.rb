# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_vaiterjogo_session',
  :secret      => 'a02c255e89574063adb65b98aa375c0bf4f81c41a469e0d44a354cda49549ec79f4a0378201ecbd59d19afbde035aa2c7221e0be4cff4baa1b14b28528b2012b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
