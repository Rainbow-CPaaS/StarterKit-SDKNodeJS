#!/bin/bash

# Update settings
# use a sed to create the final bot.json configuration file
sed -i "s/\"login\": \"\"/\"login\": \"$RAINBOW_BOT_LOGIN\"/g" app/config/bot.json
sed -i "s/\"password\": \"\"/\"password\": \"$RAINBOW_BOT_PASSWORD\"/g" app/config/bot.json
sed -i "s/\"host\": .*,/\"host\": \"$RAINBOW_HOST\",/g" app/config/bot.json

node_modules/forever/bin/forever start index.js
node_modules/forever/bin/forever logs 0 --fifo