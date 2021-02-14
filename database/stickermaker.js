const stickermaker = (prefix, botName, ownerName) => {
	return `
「 *${bot batmam}* 」
◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${Alice}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *STICKER MAKER*
  │
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  └─ ❏ ${prefix}ttp
◪ *OTHER*
  │
  ├─ ❏ ${prefix}send
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}virtex
  ├─ ❏ ${prefix}exe
  ├─ ❏ ${prefix}qrcode
  ├─ ❏ ${prefix}afk
  ├─ ❏ ${prefix}timer
  ├─ ❏ ${prefix}fml
  └─ ❏ ${prefix}fml2
◪ *${Alice}*`
}
exports.stickermaker = stickermaker
