#!/bin/bash

# Update settings
# use a sed to create the final bot.json configuration file
sed -i -E "s/(\"login\": +)([^, ]*)([^ ]*)(.*)/\1\"$RAINBOW_BOT_LOGIN\"\3\4/g" app/config/bot.json
sed -i -E "s/(\"password\": +)([^, ]*)([^ ]*)(.*)/\1\"$RAINBOW_BOT_PASSWORD\"\3\4/g" app/config/bot.json
sed -i -E "s/(\"host\": +)([^, ]*)([^ ]*)(.*)/\1\"$RAINBOW_HOST\"\3\4/g" app/config/bot.json



node_modules/forever/bin/forever start index.js
node_modules/forever/bin/forever logs 0 --fifo
