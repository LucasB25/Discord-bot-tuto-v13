# Instructions

1. Installer [Node.js](https://nodejs.org/en/).

2. Créer une application en se connectant à l'espace [Developers](https://discordapp.com/developers/applications/) sur le site de Discord. Choisir un nom, une image et éventuellement une description.

3. Dans l'onglet **Bot**, ajouter un bot à l'application.

4. Obtenir le lien d'invitation du bot présenté sous cette forme :

`https://discordapp.com/oauth2/authorize?client_id=<CLIENT_ID>&scope=bot&permissions=<PERMISSIONS>`

avec

* `<CLIENT_ID>` : le numéro trouvable sur la page générale de l'application.
* `<PERMISSIONS>` : le numéro obtenu en bas de la page dans l'onglet Bot en sélectionnant les permissions souhaitées.

Suivre ce lien et ajouter le bot à l'un de ses serveurs.

5. Créer un dossier où enregistrer le bot.

6. Ouvrir la console **Node.js command prompt**, se rendre dans le dossier précédemment créer, et installer `discord.js` :
```
> cd C:\<chemin_vers_le_dossier>\newdev\
> npm install discord.js
```

7. Créer un fichier `index.js` et copier dedans le code ci-dessous :
```js
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login('token');
```

8. Remplacer TOKEN dans le code ci-dessus par le token trouvable dans l'onglet Bot sur la page Discord de l'application.

**ATTENTION : Ce TOKEN doit rester confidentiel.**

9. Lancer le bot en tapant dans la console :
```
> npm start
```
Si tout s'est bien passé, il devrait apparaître **Logged in** dans la console, et le bot devrait être connecté sur Discord. Essayer d'envoyer **!ping**, le bot devrait répondre **pong**. Le bot est maintenant configuré. 👏

10. Pour aller plus loin : La [documentation](https://discord.js.org/#/docs/main/stable/general/welcome) et le [guide](https://discordjs.guide/) de **discord.js**.
