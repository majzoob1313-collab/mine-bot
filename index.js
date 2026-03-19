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

    // يمنع الضرب نهائي
    bot.setControlState('attack', false)

    // يقفز كل 30 ثانية
    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)

    }, 30000)
  })

  // تأكيد دائم إنه ما يضرب
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

createBot()const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Majzoob.aternos.me',
    port: 45421,
    username: 'AFK_Bot',
    version: '1.20.1'
  })

  bot.on('spawn', () => {
    console.log('دخل السيرفر ✅')

    // يمنع الضرب نهائي
    bot.setControlState('attack', false)

    // يقفز كل 30 ثانية
    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)

    }, 30000)
  })

  // تأكيد دائم إنه ما يضرب
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
