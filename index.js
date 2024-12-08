const express = require('express');

const app = express();

const prefix = "!"

app.get('/', (req, res) => {
  res.send('gooo')
});

app.listen(3000, () => {
  console.log('the bot is WORK!');
});


const Discord = require("discord.js");
const client = new Discord.Client();
client.login("MTMxNTA5ODQ1NTk3MDAyNTUxMg.GZqEYo.72IIy0Il2StYeJgH-TrSKqnX9rIwL8ds1c7Fjk"); ///توكن هنا

client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`!Perfectly`, { type: "PLAYING" });
});





//خط تلقائي 
client.on("message", async message => {
 
  if (message.guild.id != "1292561691208585227" ) return; 
  if (message.channel.id != "1315099087799844997") return;    
  if(message.author.id === client.user.id) return;
      if (message.author.send) {
    message.channel.send({files: [""]});
 

  }  

});



/// امر الخط
client.on('message', msg => {
  if (msg.content === 'خط') {
    msg.delete();
    msg.reply({files: ["https://media.discordapp.net/attachments/1129034764800765983/1305552702729748573/image0.gif?ex=6755b934&is=675467b4&hm=9721bd25ae1c2754f241789997c4dba3ff5364f8d4a2849e2d606f6b0f23198c&=&width=1024&height=59"]});

  }

});




client.on('message', message => {
    if (message.channel.id != '1315099087799844997') return;
    if (message.member.user.bot) return;
    message.react('💞') ;
}); 


client.on('message', message => {
    if (message.channel.id != '1315099087799844997') return;
    if (message.member.user.bot) return;
    message.react('👍') ;
}); 


client.on('message', message => {
    if (message.channel.id != '1315099087799844997') return;
    if (message.member.user.bot) return;
    message.react('👎') ;
}); 





client.on("message", async (message) => {
if(message.channel.id != "1315099087799844997") return //ايدي روم
if(message.author.send) {
if (isNaN(message.content)) return message.delete()
if(message.author.bot) return 
message.react("✅") 
let tax = Math.ceil(message.content * 20 / 19)
message.channel.send(tax)
}
}) 




let rg = [
"**ايش اسمك؟**",
"**كم عمرك؟؟**",
"**من فين انت؟؟**",
"**ايش تسوي في الحياة؟ بعيدا عن الديسكورد**",
"**كم صارلك داخل السيرفر؟؟**",
"**هل عندك فكرة علي البرمجة؟**",
"**ايش اختصاصك؟**",
"**ايش تبي تصير في المستقبل؟**",
"**هل تعطي الثقة في احد؟**",
"**هل عندك فكرة علي مالك السيرفر؟**",
"**كم صارلك في الديسكورد؟**",
]
client.on("message", msg => {
  if (msg.content.startsWith(prefix + "اسألني")) {
    let rg1 = new Discord.MessageEmbed()
      .setDescription(rg[Math.floor(Math.random() * rg.length)] )
     
    msg.channel.send(rg1)
  }
  
})



  

//+setnick
client.on("message", message => {
    if (message.content.startsWith(prefix + "تغير")) {
      if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.reply("ليس لديك إذن")
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      let member = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username === args[1])
      if (!member) return message.reply(`**__اكتب كذا عشان يتغير : ${prefix}تغير @منشنه __**`)
      let nick = message.content.split(" ").slice(2).join(" ")
      let g = message.guild.members.cache.get(member.id)
      if (!nick) {
        g.setNickname(member.username)
      }
      g.setNickname(nick)
      const l = g.nickname || member.username
      let embed = new Discord.MessageEmbed()
        .setAuthor(message.member.user.username, message.member.user.avatarURL({ dynamic: true }))
        .setThumbnail(message.member.user.avatarURL({ dynamic: true }))
        .setTitle("الاسم المستعار الجديد:")
        .addField(`الشخص الذي تم تغير اسمه`, `${member}`, true)
        .addField(`القديم:`, `**${l}**`, true)
        .addField(`الجديد:`, `**${nick}**`, true)


        .setFooter(message.member.user.username, message.member.user.avatarURL({ dynamic: true }))
        .setTimestamp()
      message.channel.send(embed)
    }
})





client.on('message', message => {
	if (message.content.startsWith(prefix + 'هير')) {
		if (!message.member.hasPermission('ADMINISTRATOR')) return
		if (message.author.bot) return
		message.channel.send(`@here`)
}
})
client.on('message', message => {
	if (message.content.startsWith(prefix + 'منشن')) {
		if (!message.member.hasPermission('ADMINISTRATOR')) return
		if (message.author.bot) return
		message.channel.send(`@everyone`)
}
})





client.on("message", message => {
    if (message.content === prefix + 'بوتات') {
      let u = message.guild.members.cache
        .filter(k => k.user.bot)
        .map(h => `<@${h.id}>`)
        .join(`\n`)
      
      message.channel.send(`** 
يوجد  ${message.guild.members.cache.filter(j => j.user.bot).size} بوتات في هذا السيرفر!**\n${u}`).catch(j => {
        message.channel.send('هنالك خطأ')
      })
    
    }
  })


  


client.on("message", msg => {
    if (
      msg.content == prefix + "نرد"
    ) {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(error + ` **لا يمكنك استخدام هذا الأمر في الخاص!**`).setFooter(`طلب بواسطة ${msg.author.tag}`).setTimestamp())
   
      var x = ["0", "0", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];// تقدر تضيف اكثر ان شاء الله لو مليون بس يكونو نفس الستايل
      var x3 = Math.floor(Math.random() * x.length);
      msg.channel.send(`${x[x3]}`)
    }
  })




client.on('message', async message => {
    if (message.content.startsWith(prefix + 'منع الصور')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`** ليس لديك صلاحية لإستعمال الأمر ! 🙄 **`);
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            ATTACH_FILES: false
        });
        message.channel.send(`\n🌌 | **تم منع الصور بـ**<#${channel_find.id}>\n`);
      
    }
});
client.on('message', async message => {
    if (message.content.startsWith(prefix + 'سماح الصور')) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`** ليس لديك صلاحية لإستعمال الأمر ! 🙄 **`);
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        if (!channel) channel_find = message.channel;
        if (!channel_find) return;
        channel_find.updateOverwrite(message.guild.id, {
            ATTACH_FILES: true
        });
        message.channel.send(`\n🌌 | **تم سماح الصور بـ **<#${channel_find.id}>\n`);
    }
});





const logmsg = "1051997009155981393" 
client.on("messageDelete", message => {
if (message.deleted == true){
     if (message.content.lenght == 0) return
let embed = new Discord.MessageEmbed()
.setTitle('Message Delete')
.setDescription(`Message : ${message.content}\n \nBy : ${message.author}`)
.setColor(`BLACK`)
.setTimestamp()
.setFooter(`Log messages | (name server) `)
client.channels.cache.get(logmsg).send(embed)
   }
})



client.on('message',async message => {
  if(message.content.startsWith(prefix + "افتار")) {
 
    let args = message.content.split(" ").slice(1).join(" ");   
   let member = message.mentions.users.first() || message.author
    let افتار = member.displayAvatarURL({size: 1024})
      const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s افتار`)
        .setImage(افتار)
        .setColor("BLACK")
        message.channel.send(embed);
    
  }}) 




client.on("message", message => {
  if(message.content.startsWith( prefix + 'رول')){
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.react(`❌`)
let role = message.mentions.roles.first()


if(!role) return message.reply(`**__يرجى ذكر الرتبة بعد الأمر__**`)
    let member = message.guild.member(message.mentions.users.first())
    if(!member) return message.reply(`**__يرجى ذكر المستخدم__**`)
message.reply(`**__تم اعطاء العضو الرتبة__**`)
member.roles.add(role)
    

  }
})





client.on('message', natro => {
    if (natro.content === prefix + 'help') { 
  let embed = new Discord.MessageEmbed()    
  .setTitle(`⚙ | this Aerax Commands bot:`)  
  .setDescription(`
      **
      __اوامر عامه__

・ ${prefix}يوزر ، لمعرفة معلومات المستخدم 
・ ${prefix}افتار ، لإظهار صورة المستخدم 
・ ${prefix}نرد ، يظهر رقم  عشوائي
・ ${prefix}اسألني ، يرسل سوأل عشوائي
・ ${prefix}بوتات ، يمنشن جميع البوتات
・ ${prefix}ردد ، يردد كلامك
・ ${prefix}سيرفر ، يظهر معلومات السيرفر 

 __للبلاغات__
・ ${prefix}report ، للبلاغ على نصاب



      __اوامر ادارية__
      
・ ${prefix}تعال ، رساله في خاص (للاونرات)
・ ${prefix}رول ، يعطي رتبة للي تمنشنه
・ ${prefix}منع الصور ، يمنع الصور  
・ ${prefix}سماح الصور ، يسمح ب الصور  
・ ${prefix}تغير ، يغير  اسم العضو الي تمنشنه
・ ${prefix}هير ، يمنشن هير 
・ ${prefix}منشن ، يمنشن ايفريوان 
・ ${prefix}اخفاء ، يخفي الروم
・ ${prefix}اظهار ، يظهر الروم 
・ ${prefix}باند ، يحظر الشخص 
・ ${prefix}تحذير ، يحذر الشخص
** `)
  .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`) 
  .setFooter(`🛠 | بادئت البوت     = (${prefix})`)
  natro.channel.send(embed);  
    } 
});





client.on("message", async (message) => {
if(message.content.startsWith(prefix + "تعال")) {
if(message.author.bot) return 
if(!message.member.roles.cache.has('1016021259273900145')) //ايدي رتبة الي تقدر تستعمل الامر
if(!message.member.hasPermission('ADMINISTRATOR')) return
let user = message.mentions.members.first()
if(!user) return message.reply(`**إستخدم: \`${prefix}تعال\` @منشنه**`)
user.send(`**اهلاً 
نتمنى مجيئك  لإحتياجك في روم 
  <#${message.channel.id}> \nالى ؛  ${user}**`)
let embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`**✅ تم الارسال لـ${user}**`)
.setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
message.channel.send(embed)
}
})


//rules 

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "قوانين")){
    if (badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")

    var embed = new Discord.MessageEmbed()
    .setTitle(`قوانين سيرفر ${badboy.guild.name}`)
.setDescription(`
**- Aerax Rules : 
 يجب عليك إحترام جميع أعضاء  السيرفر وعدم إهانتهم
 يُمنع السبام بجميع أشكاله ( منشن - رسائل ..إلخ  ) 
 يُمنع التطرق للأمور السياسية أو الدينية 
 ممنوع الطلبات بالشات العام ( كريدت - نيترو ..إلخ ) 
 ممنوع البيع او الطلب برومات غير الرومات المخصصه
 يُمنع الترويج لسيرفرات اخري بالشات 
 يُمنع كتابة الأوامر خارج روم الأوامر : <#1051986825767563264>
 ممنوع إرسال صور أو إيموجيات أو فديوهات تحتوي علي مشاهد مُخلة بالآداب
 لاتقم بالتدخل في شؤون الإدارة أو الإستهزاء بهم 
 يُمنع السب، أو تلميحات السب .
 ممنوع إستخدام برامج الصوت في رومات الصوتية ( الى للأداره العٌليا )
 ممنوع التحرش بالبنات داخل السيرفر 
 يُمنع إستخدام اللغات غير العربية والإنجليزية 
 يُمنع التحدث بمشاكلك الشخصية أو خصوصياتك بالشات
 ممنوع إستفزاز أي عضو أو إداري حتى لو كان بقصد المزح
. Discord Rules - قوانين آلديسكورد**
 .**- https://discordapp.com/terms 

دمتم سالمين . <:emoji_152:1052225840676610109>  **

`)
.setColor("BLUE")

    .setThumbnail(badboy.guild.iconURL({dynamic: true}))
    badboy.channel.send(embed)
  }
});



//waren

client.on('message', message => {
 
     if(message.content.startsWith(prefix + "تحذير")) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission `);
 let args = message.content.split(" ").slice(1);
 
    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
        .setColor('black')
        .setTimestamp();
 
    if (!user) {
        embed.addField("**لأرسال انذار عليك .. ** ", ` **منشن الشخص** `)
            .setTimestamp();
        return message.channel.send(embed);
    } if (!reason) {
        embed.addField("**لأرسال انذار عليك..**  ", `ارفق سبب الانذار مع الامر`)
        return message.channel.send(embed);
    }
    embed.addField(" تم ", ` **تم ارسال الانذار ✅️** `)
        .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp()
        .addField("لقد تم انذارك", `
 
          السبب : **${reason}**`)
        .setFooter(`
        انذار بواسطة ${message.author.tag}.`);
    user.send(embed1);
    message.delete();
}
});



//report

client.on('message', badboy => {
if(badboy.content.startsWith(prefix + "report")){
const reason = badboy.content.split(" ").slice(2).join(" ");
let reportschannel = badboy.guild.channels.cache.find(channel => channel.name === "report");
if(!reportschannel) return badboy.channel.send("لا استطيع العثور على روم الابلاعات");
const user = badboy.mentions.users.first();user
if(!user) return badboy.channel.send("منشن العضو");
if(!reason) return badboy.channel.send("اكتب السبب");
  if (user.id == badboy.author.id)
        return badboy.channel.send("لا تسطيع الابلاغ على نفسك")

              if(user.bot) return badboy.channel.send("لا تسطيع الابلاغ عن بوت")

if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")

const embed = new Discord.MessageEmbed()
.setTitle("ابلاغ جديد")
.addField("العضو", `${user.username}`)
.addField("السبب", `${reason}`)
.addField("اسم المبلغ", `${badboy.author.username}`)
.addField("ايدي المبلغ", `${badboy.author.id}`)
.setFooter("ابلاغ جديد")

reportschannel.send(embed)
badboy.channel.send("تم ارسال ابلاغك بنجاح")
}

});












client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('هلا والله نورت');
  }
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم ورحمة الله وبركاته') {
    msg.channel.send ('**__وعليكم السلام ورحمة الله وبركاته |    ✨🔥__**');
  }
});

client.on('message', msg => {
  if (msg.content === 'السلام عليكم ورحمة الله وبركاته') {
    msg.channel.send ('**__وعليكم السلام ورحمة الله وبركاته |    ✨🔥__**');
  }
});




//ban

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith( prefix + 'باند')) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("** ليس لديك إذن 'Ban_MEMBERS' **");
    if (!message.guild.member(client.user).hasPermission("Ban_MEMBERS"))
      return message.reply("** ليس لدي إذن 'Ban_MEMBERS' **");      
 
    const user = message.mentions.users.first();
  
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
 
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            
                        const embed = new Discord.MessageEmbed()
           .setColor("0F750E")
          .setTitle(` تم الحظر بنجاح`)
          message.channel.send(embed);
          })
          .catch(err => {
 
            message.reply('لم أتمكن من حظر العضو' );
           
            console.error(err);
          });
      } else {
       
        message.reply("هذا المستخدم ليس في هذا السيرفر");
      }
    } else {
      
      const embed = new Discord.MessageEmbed()
.setColor("FF0000")
.setTitle("`` لم تذكر المستخدم لحظره!`` ❌")
message.channel.send(embed);
    }
  }
});





client.on("message",async message =>{
if (message.content.startsWith(prefix + 'اخفاء')){
if (message.author.bot) return;
if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.react('❌') 

if (!message.channel.guild) return;
message.channel.updateOverwrite(message.guild.id, {VIEW_CHANNEL: false})
message.react('✅').catch(err => console.log(`No perms to react`))
}
})
client.on("message",async message =>{
if (message.content.startsWith(prefix + 'اظهار')){
if (message.author.bot) return;
if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.react('❌') 
if (!message.channel.guild) return;
message.channel.updateOverwrite(message.guild.id, {VIEW_CHANNEL: true})
message.react('✅').catch(err => console.log(`No perms to react`))
}
})


client.on("guildMemberAdd", (scooby) => {
  const channelid = "1052302085535842346"
  const channel = client.channels.cache.get(channelid)
  channel.send(`منوور شيك فوق حرق كريدت ونيتروهات <@!${scooby.id}>`).then((message) => {
    setTimeout(() => {
      message.delete();
    },3000)
  })
})




  
//say

  client.on('message', msg => {
  if (msg.author.bot) return;
  let args = msg.content.split(" ").slice(1).join(" ")
  if (msg.content.startsWith(prefix + "ردد")) {
    msg.delete(100);
    const embed = new Discord.MessageEmbed()
      .setColor(``)
      .setDescription(args)
    msg.channel.send(embed)
  }
});




///////////////////////
////////////
////_/_/




client.on("message", (message) => {
  if (!message.guild || message.author.bot) return;
  const command = message.content.split(" ")[0];
  if (command == prefix + "سيرفر") {
    const text = message.guild.channels.cache.filter((r) => r.type === "text").size;// Made By: SLASH
    const voice = message.guild.channels.cache.filter((r) => r.type === "voice").size;
    const online = message.guild.members.cache.filter((m) => m.presence.status === "online").size;
    const idle = message.guild.members.cache.filter((m) => m.presence.status === "idle").size;
    const dnd = message.guild.members.cache.filter((m) => m.presence.status === "dnd").size;
    const embed = new Discord.MessageEmbed()// Made By: SLASH
      .setAuthor(message.guild.name, message.guild.iconURL({ format: "png", dynamic: true }))
      .setThumbnail(message.guild.iconURL({ format: "png", dynamic: true }))// Made By: SLASH
      .setColor("black")// Made By: SLASH
      .addFields( // Made By: SLASH
        {name: `✨ Server Name`, value: `${message.guild.name}`, inline: false},
        {name: `👑 Owner`, value: `<@1003085789053321246>`, inline: false},
        {name: `🆔 Server ID`, value: `${message.guild.id}`, inline: false},
        {name: `📆 Created At`, value: `**<t:${parseInt(message.guild.createdAt / 1000)}:R> **`, inline: false},
        {name: `💼 Roles (${message.guild.roles.cache.size})`, value: `­-`, inline: false},
        {name: `👥 Members (${message.guild.memberCount})`, value: `**${online + idle + dnd}** Online 🟢\n**${message.guild.premiumSubscriptionCount.toString()}** Boosts ✨`, inline: false},
        {name: `💬 Rooms (${text + voice})`, value: `**${text}** Text 📄 | **${voice}** Voice 🎤`, inline: false}
      )// Made By: SLASH
      .setFooter(`Made By: 'DARK .#9444`, `https://cdn.discordapp.com/attachments/1074291310032326688/1074301429960953906/unknown.png`); // Made By: SLASH
    message.channel.send(embed).catch((err) => { return; });// Made By: SLASH
  }
});



client.on("message", (message) => {
  if (!message.guild || message.author.bot) return;
  const args = message.content.split(" ");
  const command = args[0];
  let mem = message.mentions.members.first();
  if (command == prefix + "يوزر") {
    if (args[1] && !args[1].includes("<@")) mem = message.guild.members.cache.get(args[1]); // Made By: SLASH
    if (!mem || !args[1]) {
      const embed = new Discord.MessageEmbed() // Made By: SLASH
        .setColor("black")// Made By: SLASH
        .addFields( 
          {name: `**🪪 User Name**`, value: message.author.username, inline: false},
          {name: `**🆔 User ID**`, value: message.author.id, inline: false},
          {name: `**✨ User Discriminator**`, value: message.author.discriminator, inline: false},
          {name: "**🛬 Joined Discord:**", value: `** <t:${parseInt(message.author.createdAt / 1000)}:R> **`, inline: false},
          {name: "**🛬 Joined Server:**", value: `** <t:${parseInt(message.guild.members.cache.get(message.author.id).joinedAt / 1000)}:R> **`, inline: false}
        )
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setThumbnail(message.author.avatarURL({ dynamic: true })) // Made By: SLASH
        .setFooter(`Made By: 'M7mƊ .#9444`, `https://cdn.discordapp.com/attachments/1074291310032326688/1074301429960953906/unknown.png`); // Made By: SLASH
      message.reply(embed).catch((err) => { return; }); // Made By: SLASH
    } else {
      const embed = new Discord.MessageEmbed()// Made By: SLASH
        .setColor("black")// Made By: SLASH
        .addFields( 
          {name: `**🪪 User Name**`, value: mem.user.username, inline: false},
          {name: `**🆔 User ID**`, value: mem.id, inline: false},
          {name: `**✨ User Discriminator**`, value: mem.user.discriminator, inline: false},
          {name: "**🛬 Joined Discord:**", value: `** <t:${parseInt(mem.user.createdAt / 1000)}:R> **`, inline: false},
          {name: "**🛬 Joined Server:**", value: `** <t:${parseInt(message.guild.members.cache.get(mem.id).joinedAt / 1000)}:R> **`, inline: false}
        )
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))// Made By: SLASH
        .setThumbnail(mem.user.avatarURL({ dynamic: true }))// Made By: SLASH
        .setFooter(`Made By: 'Dark .#9444`, `https://cdn.discordapp.com/attachments/1074291310032326688/1074301429960953906/unknown.png`); // Made By: SLASH
      message.reply(embed).catch((err) => { return; });// Made By: SLASH
    }
  }
});


client.on("message", async(message) => {
  if (!message.guild || message.author.bot) return;
  const command = message.content.split(" ")[0];
  if (command == prefix + "ping") {
    const msg = Date.now() - message.createdTimestamp; // Made By: SLASH
    const api = Math.round(client.ws.ping);
    let states = "🟢 Excellent"; // Made By: SLASH
    let states2 = "🟢 Excellent";
    if (Number(msg) > 70) states = "🟢 Good"; // Made By: SLASH
    if (Number(msg) > 170) states = "🟡 Not Bad";
    if (Number(msg) > 350) states = "🔴 Soo Bad"; // Made By: SLASH
    if (Number(api) > 70) states2 = "🟢 Good";
    if (Number(api) > 170) states2 = "🟡 Not Bad"; // Made By: SLASH
    if (Number(api) > 350) states2 = "🔴 Soo Bad";
    const embed = new Discord.MessageEmbed() // Made By: SLASH
      .setAuthor(client.user.username, client.user.avatarURL({ format: 'png' }))
      .addField("**Time Taken:**", msg + " ms 📶 | " + states, true) // Made By: SLASH
      .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
      .setFooter(`Made By: 'M7mƊ .#9444`, `https://cdn.discordapp.com/attachments/1074291310032326688/1074301429960953906/unknown.png`) // Made By: SLASH
      .setTimestamp();
    message.channel.send(embed).catch((err) => { return; }); // Made By: SLASH
  }
});


//تثبيت البوت برم صوتي
setInterval(() => {
  const channelid = "1315112488790003743" //ايدي الروم
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  channel.join()
}, 1000);


client.on('message', message => {
  if (message.guild) return undefined;
  var roomid = "1077917197227274330";
  var secound = 5; //عدد الثواني المحددة
  var room = client.channels.cache.get(roomid);
  if (!room) return undefined;
  var emb = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setThumbnail(message.author.avatarURL())
  .setFooter(`From ${message.author.tag}`)
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`**رساله ارسلها ${message.author} in في خاص البوت**\n\`\`\`apache\n:\n${message.content}\`\`\``)
  .setFooter(`${message.author.tag}`)
  .setThumbnail(message.author.displayAvatarURL())
  .setTimestamp();
  room.send(emb);
});






client.on('ready',() => {
  let saif = client.channels.cache.find(channel => channel.id === '1046359582643073105')
  if(!saif) return;
  saif.send('**__I\'m ready now__**')
});


