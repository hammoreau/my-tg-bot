const animeList = require('../data/animeList');

const genreSelection = async (ctx) => {
    const genre = ctx.callbackQuery.data; 
    const genreKey = genre.toLowerCase();  


    if (!animeList[genreKey]) {
        return ctx.answerCallbackQuery('Этот жанр не найден.');
    }


    const animeArray = animeList[genreKey];
    const randomAnime = animeArray[Math.floor(Math.random() * animeArray.length)];


    await ctx.reply(
        `🎥 *${randomAnime.title}*\n` +
        `📅 Год: ${randomAnime.year}\n` +
        `⭐ Рейтинг: ${randomAnime.rating}/10\n` +
        `🎬 Количество серий: ${randomAnime.episodes}`,
        { parse_mode: 'Markdown' }
    );


    await ctx.answerCallbackQuery();
};

module.exports = genreSelection;