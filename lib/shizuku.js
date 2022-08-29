const fs = require("fs");
const {
 fetchJson,
 getBuffer
} = require('./fetchJson');

module.exports = sock = async(sock, mek, settings, color) => {
 try {
  console.log({
   mek
  });
  const from = mek.key.remoteJid;
  const type = Object.keys(mek.message).find((key) => !['senderKeyDistributionMessage', 'messageContextInfo'].includes(key));

  //read messages
  sock.readMessages([mek.key]);

  // Prefix: /
  const prefix = settings.prefix;
  const budy = (type === 'conversation') ? mek.message.conversation: (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text: ''
  const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation: (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption: (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption: (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text: (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: (type == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId: (type === 'messageContextInfo') ? mek.message[type].singleSelectReply.selectedRowId: (type == 'sock.sendMessageButtonMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId: (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')): "" || mek.message[type]?.selectedButtonId || ""
  const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
  const isCmd = body.startsWith(prefix);

  const me = sock.user;
  const botNumber = me.id.split(':')[0] + '@s.whatsapp.net';

  const isGroup = from.endsWith('@g.us');
  const sender = isGroup ? (mek.key.participant ? mek.key.participant: mek.participant): mek.key.remoteJid;
  const groupMetadata = isGroup ? await sock.groupMetadata(from): '';
  const groupName = isGroup ? groupMetadata.subject: '';

  const owner = settings.owner.filter(obj => obj === sender);
  const isOwner = owner.indexOf(sender) === 0;
  const pushname = mek.pushName || "-";

  const reply = (text) => {
   return sock.sendMessage(from, {
    text: text
   }, {
    quoted: mek
   });
  }

  if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName));
  if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MSG \x1b[1;37m]', color("Mensagem", "yellow"), 'do', color(pushname, "yellow"), 'Em', color(groupName));

  switch (command) {
   case 'ping':
    reply('Pong!');
    break;

   case 'menu':
    var teks = `${prefix}play [ Sua música ]`;
    reply(teks);
    break;

   case 'play':
    var teks = budy.slice(5);
    if (!teks) return reply(`❌ Comando incorreto!\n\nExemplo: ${prefix + command} Luqeta`);
    reply('⏳ Por favor, espere um momento!');
    fetchJson(`https://ayanami-apis.herokuapp.com/api/download/playmp3?nome=${teks}&apikey=apikeyFree30days`).then(({
     resultado
    }) => {
     reply(JSON.stringify(resultado.messageError.statusCode == 410, null, 2));
     /*if (resultado.messageError.statusCode === 410) return reply('opssss em!');
     sock.sendMessage(from, {audio: {url: resultado.link}, mimetype: 'audio/mp4', ptt: false}, {quoted: mek});*/
    }, (err) => {
     reply(JSON.stringify(err, null, 2));
    });
    break;

   case 'eval':
    if (!isOwner) return reply('Recurso privado para meu dono!');
    try {
     eval(`(async () => {
      try {
      await reply('× [ Eval ] Comando executado!');
      ${budy.slice(5)}
      } catch(err) {
      console.log("Error : %s", color(err, "red"));
      reply(String(err));
      }
      })();`);
    } catch(err) {
     reply(String(err));
     console.log("Error : %s", color(err, "red"));
    }
    break;

   default:

    if (budy.toLowerCase() === 'prefix') {
     reply(`Oi ${pushname}! Meu prefix é ${prefix}`);
    }

    if (budy.startsWith("$")) {
     if (!isOwner) return;
     const {
      exec
     } = require("child_process");
     exec(budy.slice(2), async(err, result) => {
      if (err) return reply(err);
      await reply('× [ Exec ] Comando executado!')
      reply(result.trim());
     });
    }

   }
  } catch (e) {
   err = String(e);
   console.log("Error : %s",
    color(err, "red"));
  };
 }

 let file = require.resolve(__filename);
 fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update file: ${__filename}`);
  delete require.cache[file];
  require(file);
 });