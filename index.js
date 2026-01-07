const mineflayer = require('mineflayer')

const options = {
  host: 'zaphkiel_dal.aternos.me',
  port: 25565,
  username: '123nickryq'
}

function start () {
  const bot = mineflayer.createBot(options)

  bot.on('spawn', () => console.log('Spawned'))
  bot.on('kicked', (reason) => console.log('Kicked:', reason))
  bot.on('error', (err) => console.log('Error:', err))

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 30s...')
    setTimeout(start, 30_000)
  })
}

start()
