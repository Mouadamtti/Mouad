• *𝖴𝗉𝗍𝗂𝗆𝖾:* ${uptime}
• *𝖯𝗋𝖾𝖿𝗂𝗑:* ${usedPrefix}
• *𝖳𝗈𝗍𝖺𝗅 𝖴𝗌𝖾𝗋𝗌:* ${totalusr}

${readMore}
┏━━⊜ 𝖲𝗍𝗂𝖼𝗄𝖾𝗋 
┃⋄ .sticker
┃⋄ .attp
┃⋄ .tts
┃⋄ .tovideo
┃⋄ .wm
┃⋄ .qc
┗━━━━━━━━⬣

┏━━⊜ 𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽
┃⋄ .facebook
┃⋄ .dapk2
┃⋄ .instagram
┃⋄ .igstalk
┃⋄ .tiktok
┃⋄ .tiktokstalk
┃⋄ .tiktokimg
┃⋄ .image
┃⋄ .modapk
┃⋄ .mediafire
┃⋄ .pinterest
┃⋄ .spotify
┗━━━━━━━━⬣

┏━━⊜ 𝖦𝗋𝗈𝗎𝗉
┃⋄ .add
┃⋄ .kick
┃⋄ .remote
┃⋄ .link
┗━━━━━━━━⬣

┏━━⊜ 𝖢𝗁𝖺𝗍𝗀𝗉𝗍
┃⋄ .ai
┃⋄ .chatgpt
┃⋄ .bot
┃⋄ .simi
┃⋄ .alexa
┃⋄ .bard
┃⋄ .bardimg
┃⋄ .dalle
┃⋄ .toanime
┃⋄ .ia2voz
┗━━━━━━━━⬣

┏━━⊜ 𝖳𝗈𝗈𝗅𝗌
┃⋄ .qr
┃⋄ .hd
┃⋄ .topdf
┃⋄ .translate
┗━━━━━━━━⬣

┏━━⊜ 𝖩𝖺𝖽𝗂𝖻𝗈𝗍
┃⋄ .jadibot
┃⋄ .jadibot --code
┃⋄ .listjadibot
┃⋄ .deletesesion
┗━━━━━━━━⬣

┏━━⊜ 𝖳𝗋𝖺𝗇𝗌𝗅𝖺𝗍𝖾
┃⋄ .translate fr
┃⋄ .translate it
┃⋄ .translate en
┃⋄ .translate ar
┗━━━━━━━━⬣

┏━━⊜ 𝖮𝗐𝗇𝖾𝗋
┃⋄ .addprem
┃⋄ .delprem
┃⋄ .enable
┃⋄ .disable
⬣`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 0;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
