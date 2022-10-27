const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
	if(message.body === '.jadpel') {
		message.reply('Jadwal Pelajaran A 1 \n\nSenin: _Matematika, IPA, IPS_ \nSelasa: _PJOK, Bahasa Daerah, BK, Bahasa Indonesia_ \nRabu: _IPA, IPS, Bahasa Inggris, Informatika_ \nKamis: _Seni Budaya, PAG, PPKN, Bahasa Indonesia_ \nJu`mat: _Bahasa Inggris, P5_ \nSabtu: _P5, Pramuka_ ');
	}
});

client.on('message', message => {
	if(message.body === '.help') {
		message.reply('Daftar Perintah \n\n_.jadpel_ \n_.jadket_ \n_.sticker_ masih diperbaiki');
	}
});

client.on('message', message => {
	if(message.body === '.jadket') {
		message.reply('Jadwal Piket A \n\nSenin: _Abyan, Agsan, Damar, Davin, Santita, Weelliam_ \nSelasa: _Alice, Aliyaah, Farissa, Favian, Talinta, Yasfa_ \nRabu: _Celli, Almira, Genta, Junisa, Audrey_ \nKamis: _Ilham, Ariel, Darrell, Nathanael, Wilaga_ \nJum`at: _Arif, Arya, Naufal, Rafif, Satria_ \nSabtu: _Binar, Afiya, Riski, Nizar, Titania_');
	}
});

client.initialize();
