let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
  
let info = `
─━─━─━∞◆∞━─━─━─┓
༆⋆⃟⋆⃟:🍥:LATĀM:🍥:eᬽ⃤
┗─━─━─━∞◆∞━─━─━─┛

━━━┃┫╋┃┫『∞』┣┃╋┣┃━━━

╔═══◄••¿𝖰𝗎𝖾 𝗈𝖿𝗋𝖾𝖼𝖾𝗆𝗈𝗌?••►════╗
╠『✨』₊·-͟͟͞⟡➤Staff activo y servicial✩﻿
╠『🤗』₊·-͟͟͞⟡➤Usuarios sociales y amigables✩﻿
╠『😁』₊·-͟͟͞⟡➤Mucho NSFW✩﻿
╠『🎨』₊·-͟͟͞⟡➤Servidor ordenado y configurado✩﻿
╠『🌠』₊·-͟͟͞⟡➤Roles y variedad de colores✩﻿
╠『🎶』₊·-͟͟͞⟡➤Canales de charla✩﻿
╠『🎁』₊·-͟͟͞⟡➤Alianzas con otros servidores✩﻿
╠『😎』₊·-͟͟͞⟡➤Canales de shitpost, videos, memes y más✩﻿
╠『👾』₊·-͟͟͞⟡➤Canales de entretenimiento✩﻿
╠『🤩』₊·-͟͟͞⟡➤Únete para conocer mas acerca del servidor✩﻿
╚═══◄••𝖤𝗌𝗉𝖾𝗋𝗈 𝗍𝖾 𝗀𝗎𝗌𝗍𝖾••►═════╝ 

✺  *         ⊹. 　   ·  ✦˚  · .　　  ·*   　.
· 　 . * *   　. NIGHT CITY * ˚  　　 · . ·
✦ ˚  　· 　 .· 　　   ✵  ✫•.   ✶✺  *         ⊹
 
 ꧁ENTRA Y DISFRUTA DEL SERVER꧂

❖Server: https://discord.gg/HQAkfXpd
*_「  *_「   ͚͜͝͠ ͚͜͝͠𝐍 ͚͜͝͠ ͚͜͝͠𝐞 ͚͜͝͠ ͚͜͝͠𝐊 ͚͜͝͠ ͚͜͝͠𝐨 ͚͜͝͠ ͚͜͝͠𝐭 ͚͜͝͠ ͚͜͝͠𝐢  ͚͜͝͠𝐧 ͚͜͝͠𝐞 ͚͜͝͠- ͚͜͝͠𝐁  ͚͜͝͠𝐎𝐓͚͜͝͠  」*`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['Redes']
handler.tags = ['General']
handler.command = /^(redes|Redes|redes sociales|Redes sociales)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

