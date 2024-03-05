ort fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu.png';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `☯︎ 𝗛𝗲𝗹𝗹𝗼 ${taguser}


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
