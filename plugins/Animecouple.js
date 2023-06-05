import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
 {await m.reply('انتظر لحظة ...\n █▒▒▒▒▒▒▒▒▒ ⌛️❤️‍🩹💔')}
let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`)
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
conn.sendButton(m.chat, 'instagram.com/noureddine_ouafy', wm, json.result.female, [['♥ YOU LOVE BOBIZA ?♥', `/${command}`]], m)
conn.sendButton(m.chat, 'instagram.com/noureddine_ouafy', wm, json.result.male, [['♥ YOU LOVE BOBIZA ?♥', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|tofanimes)$/i
handler.limit = false
export default handler
