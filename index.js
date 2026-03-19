const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Majzoob.aternos.me',
    port: 45421,
    username: 'AFK_Bot',
    version: '1.21.1' // 👈 هون التعديل
  })

  bot.on('spawn', () => {
    console.log('دخل السيرفر ✅')

    // ما يضرب نهائياً
    bot.setControlState('attack', false)

    // يقفز كل 30 ثانية
    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)

    }, 30000)
  })

  // تأكيد انه ما يضرب أبداً
  bot.on('physicsTick', () => {
    bot.setControlState('attack', false)
  })

  bot.on('end', () => {
    console.log('انقطع... يرجع بعد 5 ثواني 🔄')
    setTimeout(createBot, 5000)
  })

  bot.on('error', console.log)
  bot.on('kicked', console.log)
}

createBot()
