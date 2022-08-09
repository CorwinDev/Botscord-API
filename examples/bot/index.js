const botscord = require('../../index.js');
var botToken = "";
var botID = "";
var botscordToken = "";
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
})
const botscord_client = new botscord(botscordToken, client);

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(await botscord_client.serverCount());
});
const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const commands = [
    new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
    new SlashCommandBuilder().setName('search').setDescription('Searches for a bot').addStringOption(option =>
        option.setName('botid').setDescription('The id of the bot to search for').setRequired(true)),
    new SlashCommandBuilder().setName('checkvote').setDescription('Checks if some user has votes for the bot.').addStringOption(option =>
        option.setName('user').setDescription('The id of the user to check for!').setRequired(true)),
]
    .map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(botToken);

rest.put(Routes.applicationCommands(botID), { body: commands })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const { commandName } = interaction;
    if (commandName === 'ping') {
        await interaction.reply(`🏓Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    } else if (commandName === 'search') {
        const id = interaction.options.getString('botid');
        const bot = await botscord_client.search(id);
        await interaction.reply(`Name: ${bot.name}\nID: ${bot.id}\nShort Description: ${bot.description}\nVotes: ${bot.votes}\nLink: https://botscord.xyz/bots/${bot.id}`);
    } else if (commandName === 'checkvote') {
        const id = interaction.options.getString('user');
        const voted = await botscord_client.hasVoted(id);
        await interaction.reply(`${voted.vote ? 'User has' : 'User has not'} voted for the bot.`);
    } else {
        await interaction.reply('Command not found!');
    }
});
client.login(botToken)