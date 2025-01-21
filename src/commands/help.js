const helpCommand = (ctx) => {
    ctx.reply(
        'Доступные команды:\n' +
        '/start - Приветствие\n' +
        '/help - Список команд\n' +
        '/genre - Рекомендации аниме по жанрам'
    );
};

module.exports = helpCommand;