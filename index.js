const mineflayer = require('mineflayer')
const express = require('express')

const app = express()
const port = process.env.PORT || 10000

// للسيرفر الوهمي (Render)
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
    username: 'Bot_' + Math.floor(Math.random() * 1000), // اسم عشوائي
    version: false
  })

  bot.on('login', () => {
    console.log('✅ Bot joined')
  })

  bot.on('spawn', () => {
    console.log('📦 Spawned')

    // تسجيل (أول مرة)
    bot.chat('/register 123456 123456')

    // تسجيل دخول
    setTimeout(() => {
      bot.chat('/login 123456')
    }, 2000)

    // قفز خفيف كل 30 ثانية
    setInterval(() => {
      bot.setControlState('jump', true)
      setTimeout(() => {
        bot.setControlState('jump', false)
      }, 500)
    }, 30000)
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
