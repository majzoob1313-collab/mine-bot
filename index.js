const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Majzoob.aternos.me',
    port: 45421,
    username: 'AFK_Bot',
    version: '1.20.1' // مهم مع ViaVersion
  })

  bot.on('spawn', () => {
    console.log('دخل السيرفر ✅')

    // يقفز كل 30 ثانية
    setInterval(() => {
      bot.setControlState('jump', true)

      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)

    }, 30000)
  })

  bot.on('end', () => {
    console.log('انقطع... يرجع بعد 5 ثواني 🔄')
    setTimeout(createBot, 5000)
  })

  bot.on('error', (err) => {
    console.log('خطأ:', err)
  })

  bot.on('kicked', (reason) => {
    console.log('انطرد:', reason)
  })
}

createBot()
