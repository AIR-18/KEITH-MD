/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESS'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUZ5OHdpdW1NeEJpeEF4Z0FkMlFjalhEdGN0ZVUxUGRPWXYzajZTMS9YUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1V2SzlFOGEvVGJqUktqZlFCTHdpUWZJUEhxQ2dlcFNwZnB2VGZEUVZ5Yz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTGZHRGZQYS9WTVo4ZHRZVmRxRGxsb0JQRVBUalFPaVdLaWc4ZjkyR0gwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYUno5a1VvVncvcCtrVVR3dVBZcnVjcEhWN3IzM2xHanIxcnZtUk9YTFRJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1QOUVhOEpwU09xSHFSaTd5bUhjVVd1NExhU2E2am50NmhxUWFoaG5pbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxzdkxRTXJZQWFUNzJNQk9zc1ZPTVp5YUxvdHBqbWhzTzhVTDdTeU0rR3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0M2ckNpcThqMmk4WnlMSGg4WjBCQUh2R2RrSnZia1ZTS3dGaWo1MEVXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWtramVuSDdSbHpQOTVyOG1ENnRvbVorV21VRzlXUG9lRnpWT0lNR2ZHUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRkNDVwbVhaNWgrVzBKV0g1bkpmemN0NldkQVhIT2RGMTY1MkhzMXNza290eVJ2Z3NWZ2lnNEo4V1grUkxPbkNGaFNTUjJmMDgwT0kzSWR0eUZPRkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoiNUNsQ1VreDdBc2hqaHdFMC9iRnFxWDRudGRWSURtTHRKZUsvYVRMR3pzZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUWFwdk5DZ2xUTUNFM0k2QURjUnVCQSIsInBob25lSWQiOiI1NDUzZDkyYS01ODRjLTRhZWItYTk3My01YzU3MjQ5MmQwMzQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaCtWMkhIajQvbW5iVEdSeVRsQTVWdXBZZmRVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV3dlVlVTVKY0lhSDYwQmVsNm5XYUNhMUdLRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3SkhQUUQ1OCIsIm1lIjp7ImlkIjoiMTg0OTQ0MDkxOTU6MzdAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05peDBKZ0hFS3VwdGJzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkNEaFZIS1lHcHg0ZjJ2d1JvSWc5RHNKdVRTUXB6RDhrTUo2RnREckNOQUk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik1UQnFNcVhOS25FRFFHSDdML0t6eHJNS3d1WEhUY2ppVzFFUlZ4RFdPeDdoM2M4UU1iaDFMYlZ2M2o5aGlKUXQraGRsNnF5UnMybzRvWnFRMHI4TkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKN2NqTUc1TmNGYng5WXVSNFpDS1dpQVdGNmd5dHptcWg2d0dSRXhCS29sU1pFQVdjR3lPNnNmcmRDVkdTeFJrUVJIQ1Uza2JGdVZLRFY2L0IvU2pCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjE4NDk0NDA5MTk1OjM3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFnNFZSeW1CcWNlSDlyOEVhQ0lQUTdDYmswa0tjdy9KRENlaGJRNndqUUMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzUyMTgzNjAsIm15QXBwU3RhdGVLZXlJZCI6IkFDUUFBRGJJIn0=;

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
