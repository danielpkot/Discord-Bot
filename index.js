/* Importing discord.js classes
  Client: Instance of bot
  Events: Various Events the bot can handle
  GatewayIntentBits: Handles event and data types
*/
const { Client, Events, GatewayIntentBits } = require('discord.js');
// Importing Bot token
const { token } = require('./config.json');

// Create a new client instance, Guild Refers to serve events
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);