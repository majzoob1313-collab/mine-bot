const mineflayer = require('mineflayer')
const express = require("express")

const app = express()
const port = process.env.PORT || 10000

app.get("/", (req, res) => {
  res.send("Bot is running")
})

app.listen(port, () => {
  console.log("Web server running")
})

function createBot() {
  const bot = mineflayer.createBot({
    host: 'Majzoob.aternos.me',
    port: 45421,
    username: 'Ahmad2244',
    version: '1.20.1'
  })

  bot.on('spawn', () => {
    console.log('دخل السيرفر')

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

  // إذا طلع لأي سبب
  bot.on('end', () => {
    console.log('انفصل... إعادة بعد 5 ثواني')
    setTimeout(createBot, 5000)
  })

  // لو صار خطأ
  bot.on('error', (err) => {
    console.log('خطأ:', err.message)
  })
}

createBot()س
