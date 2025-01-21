const { InlineKeyboard } = require('grammy');
const animeList = require('../data/animeList');

const genreCommand = async (ctx) => {
    const keyboard = new InlineKeyboard();


    Object.keys(animeList).forEach((genre) => {
        keyboard.text(genre, genre.toLowerCase()); 
    });

    ctx.reply(
        'Я с радостью порекомендую вам аниме по жанрам:',
        { reply_markup: keyboard }
    );
};

module.exports = genreCommand;