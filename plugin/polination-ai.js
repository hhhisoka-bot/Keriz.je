
require('../../setting')
const axios = require('axios');

module.exports = {
    type: 'ai',
    command: ['poliai', 'polination-ai'],
    operate: async (context) => {
        const { args, reply } = context;
        
  try {
    if (!args[0]) return reply(`🔮 start`)

    let { data } = await axios.post('https://text.pollinations.ai/openai', {
      messages: [{ role: 'user', content: args.join(' ') }],
      stream: false
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/event-stream',
        'user-agent': 'Mozilla/5.0 (Linux; Android 14; NX769J Build/UKQ1.230917.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/130.0.6723.107 Mobile Safari/537.36'
      }
    })

    reply(data?.choices?.[0]?.message?.content)
  } catch (e) {
    reply(mess.error)
  }
 }
}