    const Discord = require("discord.js-selfbot-v13");
const { Client } = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});
const express = require('express')
const app = express();
const port = 8000;

const largeImages = [
    'https://cdn.discordapp.com/attachments/928527673955856395/1211638364504203304/ezgif.com-animated-gif-maker.gif?ex=65eeed29&is=65dc7829&hm=78aca76fe5c5000faa68375c6805160dd4efefe4d46629625f82ede64c96e6ae&',
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
          .setType('STREAMING')
          .setURL('https://youtu.be/Dst9gZkq1a8?si=U72dUHvwbweeL1CM')
          .setState('Tomato sauce') // คำที่ขึ้น
          .setName('Chasing') // คำที่ขึ้น
          .setDetails(` 〈⏰${currentTime}〉 «» 〈👻 Itz${client.user.username}〉 `) // เวลาเเละชื่อของความเท่
          .setStartTimestamp(startedAt)
          .setAssetsLargeText(`〈${currentDate}〉|〈🛸 ${Math.round(client.ws.ping)} m/s〉`) // status
          .setAssetsLargeImage(largeImages[currentLargeImageIndex]) // รูปใหญ่ไปใส่ข้างบน
          .setAssetsSmallImage('https://cdn.discordapp.com/attachments/928527673955856395/1211647971247005747/giphy.gif?ex=65eef61b&is=65dc811b&hm=606044fe141873c98839c51121677a0a8f5c906ec1f384ba1672f2e7f2613b73&') // รูปเล็ก
          .setAssetsSmallText('Boring')
          .addButton('..Kindness', 'https://youtu.be/4xvSFYbVa0U?si=2xbhUdT6EjJ62lEZ')
          .addButton('..My Instagram', 'https://www.pornhub.org')

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
