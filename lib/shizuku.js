const fs = require("fs");

module.exports = sock = async(sock, mek, settings, color) => {
 try {
  const from = mek.key.remoteJid;
  const type = Object.keys(mek.message).find((key) => !['senderKeyDistributionMessage', 'messageContextInfo'].includes(key));

  await sock.sendPresenceUpdate('available', from);
  await sock.sendReadReceipt(from, mek.key.participant, [mek.key.id]);

  // Prefix: /
  const prefix = settings.prefix;
  const budy = (type === 'conversation') ? mek.message.conversation: (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text: ''
  const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation: (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption: (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption: (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text: (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: (type == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId: (type === 'messageContextInfo') ? mek.message[type].singleSelectReply.selectedRowId: (type == 'sock.sendMessageButtonMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId: (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')): "" || mek.message[type]?.selectedButtonId || ""
  const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
  const isCmd = body.startsWith(prefix);

  const me = sock.user;
  const botNumber = sock.user.id.split(':')[0] + '@s.whatsapp.net';

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
    // code
   }
   /* code */
  } catch (e) {
   err = String(e);
   console.log("Error : %s", color(err, "red"));
  };
 }

 let file = require.resolve(__filename);
 fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update file: ${__filename}`);
  delete require.cache[file];
  require(file);
 });