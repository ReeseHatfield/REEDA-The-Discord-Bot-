# REEDA
## Reese's Eagle Eyed Discord Assistant
A fun and utility rich discord bot made with NodeJS using the DiscordJS api. 

![REEDA](REEDAPFP.png)

## Purpose
---
I made this project to practice my Javascript and NodeJS skills. Along with that, I also learned several external API's such as DiscordJS, and various other smaller libraries used for the implementation of this project

## Getting Started
---
If you ever wanted to implement REEDA on a discord server of your own, the process is fairly simple. 
1.  Install [NodeJS](https://nodejs.org/) and [DiscordJS](https://discord.js.org/#/) on your system.
2.  Clone this repository onto your system.
3.  Set up a bot through [Discord Developer Portal]([Link](https://discord.com/developers/applications))
4.  Set up your token and link the bot to your server.
5.  Configure library, token, and other keys (see Configuration)

For more detailed instructions, you can visit the official [DiscordJS](https://discordjs.guide/) setup and installion guide.

## Configuration
---
To make this bot work properly, you will need to properly configure several keys. After you have cloned the directory, you will need to create a file called `config.json`. This file should be structured in the following way:
```
{
    "token": [token_id],
    "clientId" : [client_id],
    "guildId" : [guild_id],
    "API_KEY": [open_weather_api_key]
}
```
NOTE: For the /weather command to function properly, you will need an [Open Weather](https://openweathermap.org/api) account, and have access to an working API key. 


