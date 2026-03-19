const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Majzoob.aternos.me',
    port: 45421,
    username: 'AFK_Bot',
    version: '1.20.1'
  })

  bot.on('spawn', () => {
    console.log('دخل السيرفر ✅')

    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)

    }, 30000)
  })

  bot.on('end', () => {
    setTimeout(createBot, 5000)
  })
}

createBot()
