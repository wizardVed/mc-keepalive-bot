const mineflayer = require('mineflayer');
const express = require('express');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'HEROBRINESMP20-CMEK.aternos.me',
    port: 25565,
    username: '123nichryq',
  });

  bot.on('spawn', () => console.log('✅ Bot joined the server!'));
  bot.on('end', () => {
    console.log('❌ Disconnected—reconnecting...');
    setTimeout(createBot, 10000);
  });
  bot.on('error', err => console.log('⚠️ Bot error:', err.code || err.message));
}
createBot();

const app = express();
app.get('/', (req, res) => res.send('✅ Bot is running!'));
app.listen(3000, () => console.log('🌐 Web server running on port 3000'));
