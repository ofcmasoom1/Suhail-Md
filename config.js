const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923246530617";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_17_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDM3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTI5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjA4LFxuICAgICAgICA3NixcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDksXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyNCxcbiAgICAgICAgNyxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE2LFxuICAgICAgICAxODIsXG4gICAgICAgIDgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5LFxuICAgICAgICAzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDc4LFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODQsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaWFQOUFLaVl3VVRoZnUrNFpoc29LenJJUzFxdmpzR3JqdzkwcVpjaXhEcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOGRPSFZ4dzRSU2Flc2NBTkFoQmxZUVwiLFxuICBcInBob25lSWRcIjogXCI3NDYwNGI4Ny1kYjFlLTQzMDUtYjUwOC02ZWIzODdjYmFmNTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAyMDEsXG4gICAgICAyMzAsXG4gICAgICA0LFxuICAgICAgMTkyLFxuICAgICAgMSxcbiAgICAgIDEyLFxuICAgICAgMTYyLFxuICAgICAgMjI5LFxuICAgICAgMzAsXG4gICAgICA1LFxuICAgICAgMTAyLFxuICAgICAgNTAsXG4gICAgICA1MyxcbiAgICAgIDI0NixcbiAgICAgIDYwLFxuICAgICAgMjIyLFxuICAgICAgMjgsXG4gICAgICAyMjEsXG4gICAgICAyMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY2LFxuICAgICAgMTEyLFxuICAgICAgMTQ2LFxuICAgICAgMTk4LFxuICAgICAgMTk2LFxuICAgICAgMjQyLFxuICAgICAgNzUsXG4gICAgICA3NyxcbiAgICAgIDc5LFxuICAgICAgNTAsXG4gICAgICAyMDAsXG4gICAgICAyNTQsXG4gICAgICAyMTQsXG4gICAgICA5MSxcbiAgICAgIDQwLFxuICAgICAgMjUwLFxuICAgICAgMTQ1LFxuICAgICAgNTgsXG4gICAgICAxMzMsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTQlJERUFMRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjgwOTU5Njk4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTUzMDI5MTc0OTA4NDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05Qbi9kMENFSlhpOExNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibUlrTXFlVzBjSFpGWW1HSUV3T3lZQ1VNQXBiYUR0alh0bFE3K1NUT2czaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI1WkFJdHpBWndQRTYxcGIwcnF2RFc2bEhqaEQ1K0NnN3JKRGZ3R0F5ckVNOFZXTzNPTkNmMkRWUG9uaDBpU0QwMEY1aC9rTlhhaG1CUnZXZ0p5ci9EUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJOQlI2S3NTWW1vRzBxa0xxMVU1cyt5cU5qTVRJYlZKNW85VllVaU5SVlFMd0NDQjM1dlQ1aW5XTXR3Q1NXSEJJZERvMEc5aWtxZHRGOXJmSHVCUy9EZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyODA5NTk2OTg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NDE1MDY0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRDVxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFENXEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5c2NzS2szcGdPVmR5QXJ2RXIvZjN0Mm44VSszNUUyaTlvNXVBZFVvQVFBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjczMzk2NzMxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
