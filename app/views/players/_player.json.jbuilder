json.extract! player, :id, :player_pcture, :created_at, :updated_at
json.url player_url(player, format: :json)
json.player_pcture url_for(player.player_pcture)
