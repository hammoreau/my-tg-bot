const startCommand = (ctx) => {
    ctx.reply(
        'Привет! 👋 Я бот, который поможет тебе выбрать аниме по жанрам.\n\n' +
        'Хотите узнать все команды? Нажмите /help.'
    );
};

module.exports = startCommand;