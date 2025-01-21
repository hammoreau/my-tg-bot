const { Bot } = require('grammy');
const config = require('./config/botConfig');
const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');
const genreCommand = require('./commands/genre');
const genreSelection = require('./commands/genreSelection');
const errorHandler = require('./middlewares/errorHandler');

const bot = new Bot(config.token); 


bot.command('start', startCommand);
bot.command('help', helpCommand);
bot.command('genre', genreCommand);


bot.use(errorHandler);
bot.on('callback_query:data', genreSelection);

module.exports = bot;
