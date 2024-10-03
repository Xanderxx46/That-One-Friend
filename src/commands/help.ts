import { Command, type CommandInteraction, Embed } from "@buape/carbon";

class HelpEmbed extends Embed {
	title: "Help Menu";
	color: 0x586b20;
	description: '</ping:1174498730540535852> - Bot replies with "Pong!" \n </help:1174498730540535850> - Shows this menu\n </hug:1174521338145280020> - Hug the person of your choosing\n </kiss:1174518928685416508> - Kiss the person of your choosing. \n </slap:1174498730540535853> - Slap the person of your choosing. \n </truth-or-dare:1173851047886856254> - Get a truth or a dare based on your choice.\n </roll-dice:1174526265521361020> - Roll up to 3 die. \n </generate-random-number:1174532470721499286> - Get a random number based on your minimum and maximum choice.';
}

const text =
	'</ping:1287557464723816450> - Bot replies with "Pong!" \n </help:1287557464723816449> - Shows this menu\n </hug:1287542451686477845> - Hug the person of your choosing\n </kiss:1287551968067190789> - Kiss the person of your choosing. \n </slap:1287551968067190788> - Slap the person of your choosing. \n </truth-or-dare:1173851047886856254> - Get a truth or a dare based on your choice.\n ~~</roll-dice:1174526265521361020> - Roll up to 3 die.~~ Broken Command. \n ~~</generate-random-number:1174532470721499286> - Get a random number based on your minimum and maximum choice.~~ Broken Command.';

export default class HelpCommand extends Command {
	name = "help";
	description = "Show the help menu";
	defer = true;

	async run(interaction: CommandInteraction) {
		await interaction.reply({
			content: text,
			//			embeds: [new HelpEmbed()],
		});
	}
}
