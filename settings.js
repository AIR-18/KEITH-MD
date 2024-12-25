/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESS'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0Q5QzZXd3JRbTNMUzdVQStud1RDazBOYmUwZjllVGRYWThidU5BVUNXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3E0ZDNUTGZQRmM4RnJZRGl1Z1NyekJRWHlycExoU3BKbi9BbG9qeXJ5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRElYeVA1c09pRGhJeW92aER4K0RpY25ZZWxhVXNRcDJyUitsZklMN20wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhWlYrbk9LdkJPdFEzSGUyZXBGckpvbEttME5PcHBNU0pnMXExMzhkMlVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHMnNZT2tZa1ovK0ZjS01rOGlKS0xNa3gvTSs5WUNyK2RRSDFsRmo2bmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhmT1NJb0p5TENYUjNuZHMwVXNCckNPVjVBWFhSSDBZTmxEUlMrRWE5Rnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0xHN0IrYk5MeUoyb2FXZmM0OWE4S3hhR0ZGM0l2Znkvd2FGQk53K1JIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0tPZUp1ZU9lYTQyYlQxUHhYSEJDMmhNQzZHREFNaG83YVRNOFFNbmJRcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims4N2t0dmxZa3QvTmNFQ0RhM3FudER4NHIwUkV2aktvOVpKTWpWL1d1RXZ1bHlXQ0N3RmVqYWIycGVTVThEVjhublJqVXlZTllXY3BZdld1SmFKekJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU1LCJhZHZTZWNyZXRLZXkiOiJmVWlES3ozU3l6L3czVjdLUXowM1dQQkhtbEp4OGt6MENISldoTmNyNVhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfSHVvYTBNM1RZaUExTEVwS29vS2tnIiwicGhvbmVJZCI6ImE3OGNkYzI4LThkYjgtNGNhZC05NDljLTc1YWNmNTc5MjE5NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3NW4vZ2xuTlUzVWdOVmlSeG5YQTVPZllwdW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYmp2ZTM0V1poMlVHREhYVEhWRWNzU2FaaTZJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRXWDdNVjVFIiwibWUiOnsiaWQiOiIxODQ5NDQwOTE5NTozMEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTkd4MEpnSEVQYmtzYnNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ0RoVkhLWUdweDRmMnZ3Um9JZzlEc0p1VFNRcHpEOGtNSjZGdERyQ05BST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYjN4SVEwOWU0WDV5QWwyblBCR1c0T0F1dUc2UVMzZlp5d2pheTZGU3NiSUxscit2VDRDb3NKVVNVZW1pV3pKZXp3dSsvZ1lCRXhqNlhGNnM5S0pIQWc9PSIsImRldmljZVNpZ25hdHVyZSI6IjZrY1E5aXpjU2hPV2NGZSt2OXlJRjE1YkZMZEdRelQvQksrSEMxM0lWclhOejNybGE5UGRJcXJaK3NlWGlRMi9udHcxM3ozbmVUdWM1bEZDakVNVkJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTg0OTQ0MDkxOTU6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWc0VlJ5bUJxY2VIOXI4RWFDSVBRN0NiazBrS2N3L0pEQ2VoYlE2d2pRQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTE2MDQ1MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFdlMifQ==;

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '18494409195';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'AIRSEE-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
