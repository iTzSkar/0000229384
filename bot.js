const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "~"



//bc

client.on("message", message => {
    if (message.content.startsWith("~bcs")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "~";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `); 
   message.delete(); 
  };     
  });






client.on('message', message => {
    if (message.content.startsWith("~avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField("<@" + message.author.id + ">")
        .setColor(000000)
        .setImage(`${client.avatarURL}`)
		.setFooter("By : FiKO || ໑ڪــɹ̤ᓅ ")
      message.channel.sendEmbed(embed);
    }
});


client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });





  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('~adminbc')){
if(!message.author.id === '336773905043685390') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



  
  client.on('message', msg => {
    if(msg.content === '~help')
    msg.reply('تم أرسال رسالة على الخاص ')
  });
  
  
  
  
  
  
  
  
  
  
  client.on("message", message => {
    if (message.content === "~help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(` 
~bcs ‣  لأرسال رسالة جماعية للكل

~bc ‣  لأرسال رسالة جماعية للاون لاين فقط

~bot ‣ معلومات البوت 

~inv ‣ لدعوة البوت 

~support ‣ سيرفر الدعم الفني 

		 `)
 .setFooter("By : FiKO || ໑ڪــɹ̤ᓅ ")
   message.author.sendEmbed(embed)
   
   }
   });


  

   client.on('message', message => {
    if (message.content === "~inv") {
      if(!message.channel.guild) return message.reply('Sorry, i Can Not Inv My Link In Your DM ;(')
        if(!message.channel.guild) return;
    let embed = new Discord.RichEmbed()
	.setColor("RANDOM")
    .setAuthor(` ${message.author.username} `, message.author.avatarURL)
    .setTitle(` ⚙ Click Here ⚙ `)
    .setURL(`https://discordapp.com/oauth2/authorize?client_id=489287539015024660&permissions=8&scope=bot`)
    .setThumbnail(" https://cdn.discordapp.com/avatars/377904849783750667/6c76e412f18c142dfd711d05fb363869.png?size=2048")
    .setFooter("By : FiKO || ໑ڪــɹ̤ᓅ ")
 message.channel.sendEmbed(embed);
   }
});

client.on('message', message => {
if (message.content.startsWith('~support')){
     let ra3d = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("RANDOM")
  .setDescription("⚙ https://discord.gg/ZfeTqSP ⚙")
  .setFooter("By : FiKO || ໑ڪــɹ̤ᓅ ")

  message.channel.sendEmbed(ra3d);
    }
});

   client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setFooter(`Broadcast`)
  .setDescription(`⍟ **شكراً لك لإضافه بوت البرودكاست الى سيرفرك** ⍟`)
  .setFooter("By : FiKO || ໑ڪــɹ̤ᓅ ")
	  guild.owner.send(embed)
});




client.on('message', message => {
    if (message.content === "~bot") {
           if(!message.channel.guild) return message.reply('** This command only for servers **');
    let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(message.author.avatarURL)
 .addField("**عدد السيرفرات :desktop:**" , client.guilds.size)
 .addField("عدد الأعضاء :busts_in_silhouette:**", client.users.size)
 .addField("عدد الرومات :books:", client.channels.size)
 .addField("البنق :electric_plug:", msg + " ms ")
 .setFooter("By : FiKO || ໑ڪــɹ̤ᓅ ")
message.channel.sendEmbed(embed);
   }
});


client.on('ready', () => {
  client.user.setGame(`~help || ~inv `,'https://www.twitch.tv/v5bz');
});

client.login(process.env.TOKEN);
