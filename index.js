const mineflayer = require('mineflayer')
const express = require('express')

const app = express()
const port = process.env.PORT || 10000

app.get('/', (req, res) => {
  res.send('Bot is running')
})

app.listen(port, () => {
  console.log('Web server running')
})

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Majzoob.aternos.me',
    port: 45421,
    username: 'Bot123',
    version: '1.21.1
  })

  bot.on('login', () => {
    console.log('✅ Bot joined')
  })

  bot.on('spawn', () => {
    console.log('📦 Spawned')

    // تسجيل الدخول
    bot.chat('/login 123456') // غير الباسورد

    // القفز
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)
    }, 30000)

    // الشات
    setInterval(() => {
      const msg = Math.random() > 0.5 ? 'نعم' : 'لا'
      bot.chat(msg)
    }, 5000)
  })

  bot.on('error', (err) => {
    console.log('❌ Error:', err.message)
  })

  bot.on('end', () => {
    console.log('🔄 Disconnected, retrying...')
    setTimeout(createBot, 5000)
  })
}

createBot()
