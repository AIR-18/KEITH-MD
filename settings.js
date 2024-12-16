/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUxnbkE5TVhQL0pQREpXU1Axc1FsUmIwc3c2UXFmeTA2M1lVOVA3TGxsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVE15R04wMXhmMnBTdHZxSC9ySVJOQmdoSThnT0xZU1dVcGtwQm9MNTl4UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSmY2RnBXN3lYTjlMVFFpRVYvL1BpZlpyU2VsaTJXZ2NYU2p2VzA4a0hVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYVVRvaklUeTM5Vms1Mks2TTcrcWZhaHk2eEpSdTJhei9UL2VHekQ0TlR3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQZ2hud0lMVDdBUlpZL2F5STM1N29NZzM3US9sS3hDTUhBUWx4UERDV0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhBUmNnbVQrT2o4ZWpRbmw3dUdvUlBqRHdVaFVlVGNJaXBidlJ4N25kRkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0QzOXlpamsza3dGQ05kNVNVQUVDTlgwVFZRNnBNSkpMdDdkTHBJVDBGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSEVPQXZUU2E3a1FMbW05NnFDNlQxSkoxWitJVW1lWXBXZUNsbXdIQUgxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlFT3MrWm55QVZlOGZiWWpIcktCQkNMVitkUmdKMWo3TUkwRktnbHRKd25jQmpEQVhRNVlWSEJXSmpiWjFpUE9WM2JUK0IyNWJXbzN3UkFyNzYrQUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjksImFkdlNlY3JldEtleSI6ImM4SWZrZEtNWURzQm5vVjBvUU9SOG9xV3poZ0ZNWVdCeHdKc21RUG1HaGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlhqRGhndHAwUzdPLWVDM3VSVjJrdHciLCJwaG9uZUlkIjoiMjNkNmU3MTktMzlkYS00Y2M3LTkwZDQtMDg0ZDQ3OTQwZjg0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcybGxvWWdUbWxMNzEzbTBVVWlXazRMbU8yZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRcG4wVy9jd2NhTmRFWUNBb3RvdXAxUGdoY2s9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOUpLTVgzSzgiLCJtZSI6eyJpZCI6IjE4NDk0NDA5MTk1OjI0QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNMngwSmdIRUtDei9yb0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDRGhWSEtZR3B4NGYydndSb0lnOURzSnVUU1FwekQ4a01KNkZ0RHJDTkFJPSIsImFjY291bnRTaWduYXR1cmUiOiJWa2RRYVNMSEtienEzenFKQmdObUltazFTN05KZldUa1FsYmFDK01QVzM4SkFmQzJBcXRSQll4Vms3Q2pIWkhRUkVVVUxIcktWVHJsMTRFeW9XRERCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaVZmVEw3VStOeHpwdlljOEdQZm0yMDBMd0V2SU1KQzFLcDFRY0Naa3VLMGxyNjJDems2UkVEUGIwTS83Z3YxMFV0MEhnbGQ2cXFMQVpjcTVhS2FPQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODQ5NDQwOTE5NToyNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRZzRWUnltQnFjZUg5cjhFYUNJUFE3Q2JrMGtLY3cvSkRDZWhiUTZ3alFDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0MzE4NTA4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZGQSJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254748387615';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
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
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
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
