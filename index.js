const DiscordRPC = require('discord-rpc');

const clientId = '';

DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log('Connected to Discord');

  rpc.setActivity({
    details: '',
    state: '',
    startTimestamp: new Date(),
    largeImageKey: '',
    largeImageText: '',
    smallImageKey: '',
    smallImageText: '',
    smallImageAlign: 'right',
    buttons: [
      { label: '', url: '' },
      { label: '', url: '' },
      { label: '', url: '' },
      { label: '', url: '' },
      { label: '', url: '' },
      { label: '', url: '' }
    ],
    partyId: '',
    partySize: 8,
    partyMax: 8,

  });
});

rpc.login({ clientId }).catch(console.error);