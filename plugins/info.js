let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Alvino
╠➥ Script: Alvino
║
╠➥ Github: Gaada
╠➥ Instagram: Gaada
╠➥ YouTube: Alvino Gtps
║
╠═〘 Thanks To 〙 ═
╠➥ Alvino
║
╠═〘 DONASI 〙 ═
╠➥ World:venzzd
║
║>Request? Wa.me/62812109486978
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

