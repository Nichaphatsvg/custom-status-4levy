const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://media.discordapp.net/attachments/1199386824582373516/1211343738098688030/waifu-anime.gif?ex=65eddac4&is=65db65c4&hm=3c5f03263eaafb8567c0163708ed938097995a77ab220c188685341ab99b0fbf&=',
    'https://media.discordapp.net/attachments/1199386824582373516/1211343738656399392/hikikomari-terakomari.gif?ex=65eddac4&is=65db65c4&hm=54a4cb5a3bd8a1cdba46916a0f0c44251bdc685173a7cd90b338f6a444531bb6&=',
    'https://media.discordapp.net/attachments/1199386824582373516/1211343739323158638/hikikomari-hikikomari-kyuuketsuki.gif?ex=65eddac5&is=65db65c5&hm=af0f79d45c17475abf206a9b2c947239617364f2557abbf6a3433ee55714da8e&=',
      // ใส่เพิ่มได้ถ้าเองต้องการ รูปใหญ่
  ];

let currentLargeImageIndex = 0;

app.get('/', (req, res) => res.send('ทำงานเรียบร้อยแล้ว'))
app.listen(port, () =>
    console.log(`Your app is listening at http://localhost:${port}`)
);

client.on("ready", async () => {
    var startedAt = Date.now();
    console.log(`${client.user.username} เม็ดม่วงทำงานเรียบร้อยแล้ว !`);

    setInterval(() => {
        const currentTime = getCurrentTime();
        const currentDate = getCurrentDate();

const r = new Discord.RichPresence()
          .setApplicationId('1155496899697180762')
          .setType('WATCHING')
          .setURL('https://youtu.be/LzAlv-wnQJY?si=NI8ZtPikq9Hb7CR_')
          .setState('すごく疲れた | 死にたい') // คำที่ขึ้น
          .setName('𝙵𝙰𝙺𝙴') // คำที่ขึ้น
          .setDetails(` 〈⏰${currentTime}〉 «» 〈👻 Itz${client.user.username}〉 `) // เวลาเเละชื่อของความเท่
          .setStartTimestamp(startedAt)
          .setAssetsLargeText(`〈${currentDate}〉|〈🛸 ${Math.round(client.ws.ping)} m/s〉`) // status
          .setAssetsLargeImage(largeImages[currentLargeImageIndex]) // รูปใหญ่ไปใส่ข้างบน
          .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1199386824582373516/1211345413177745498/tenor.gif?ex=65eddc54&is=65db6754&hm=ba8a6e24009efbd52718cfae1408d77c5b469931d9cb856a53ea358429d013d9&') // รูปเล็ก
          .setAssetsSmallText('✧ Busy')
          .addButton('..?❤️', 'https://youtu.be/DG2QqcHwNdE?si=gmhUjuYRhkdObNhz')
          .addButton('Itz4levy', 'https://guns.lol/4levy')

        client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline
        client.user.setActivity(r);

      // ปรับเปลียนไปรูปต่อไป
      currentLargeImageIndex = (currentLargeImageIndex + 1) % largeImages.length;
  }, 4000); // ปรับเวลา เปลียนรูปใหญ่
});

  function getCurrentDate() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = a.toLocaleDateString("en-US", c);
    const [month, day, year] = formattedDate.split('/');
    return `${day}/${month}/${year}`;
}

function getCurrentTime() {
    const a = new Date(Date.now());
    const c = { timeZone: "Asia/Bangkok", hour: "numeric", minute: "numeric", hour12: false };
    return a.toLocaleTimeString("th-TH", c);
}
client.login(process.env['token']);
