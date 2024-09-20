//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                   
// ⛥┌┤
// */

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "B.M.B" //ur yt chanel name
global.socialm = "GitHub: DARE-1.2" //ur github or insta name
global.location = "lagos, abuja, ogun state" //ur location

//new
global.botname = 'DARE-V1.2' //ur bot name
global.ownernumber = ['2348089405509'] //ur owner number, dont add more than one
global.ownername = 'BMB' //ur owner name
global.websitex = "https://github.com/Dare-1-0"
global.wagc = "https://whatsapp.com/channel/0029VajhqUnD38COHw1aSy0M"
global.themeemoji = '⛩'
global.wm = "Dare Bot Inc."
global.botscript = 'https://github.com/Dare-1-0' //script link
global.packname = "DARE"
global.author = "MΛDΣ BY BMB"
global.creator = "https://wa.me/+2348089405509"
global.xprefix = '.'
global.premium = ["8089405509"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

//---------------------------------------------------------------------------------------//
//api variables 

global.api = "https://api.maher-zubair.xyz/";
global.id = "RnJlZV9rZXlAc2FsbWFu";

//---------------------------------------------------------------------------------------//



// Description: This file is used to store global variables.


global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
