# Discord Bot Server Status Checker

This Discord bot allows you to monitor the status of your Minecraft server and display it on Discord. It periodically checks the server's status and player count, updating the bot's presence accordingly.

## Features

- Monitors the status of a Minecraft server.
- Displays the server's status (online/offline) and player count in real-time on Discord.
- Updates the Discord bot's presence dynamically based on the server's status and player count.

## Prerequisites

Before running the bot, ensure you have the following:

- Node.js installed on your machine.
- A Discord bot token. You can obtain one by creating a bot application on the [Discord Developer Portal](https://discord.com/developers/applications).
- Your Minecraft server's IP address.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/FredericoNicola/Minecraft-Discord-Server-Status.git
   ```

2. Navigate to your project folder:

   ```bash
   cd Minecraft-Discord-Server-Status
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Configuration

Edit `config.js`:

- Paste your Discord bot token into the `token` field.
- Paste your Minecraft server IP into the `serverIP` field.

## Starting the Bot

```bash
node .
```
