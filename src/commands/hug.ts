import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
} from "@buape/carbon";

import { Embed } from "@buape/carbon";

const hugGifs = [
	"https://media.tenor.com/kCZjTqCKiggAAAAC/hug.gif",
	"https://media.tenor.com/H7i6GIP-YBwAAAAd/a-whisker-away-hug.gif",
	"https://media.tenor.com/7oCaSR-q1kkAAAAC/alice-vt.gif",
	"https://media.tenor.com/9e1aE_xBLCsAAAAC/anime-hug.gif",
	"https://media.tenor.com/MtmdE7YibpkAAAAC/hestia-hug.gif",
	"https://media.tenor.com/IpGw3LOZi2wAAAAC/hugtrip.gif",
	"https://media.tenor.com/uiak6BECN_sAAAAC/emunene-emu.gif",
	"https://media.tenor.com/7f9CqFtd4SsAAAAC/hug.gif",
	"https://media.tenor.com/pqXmHpbIy0MAAAAd/anime-anime-hug.gif",
	"https://media.tenor.com/mB_y2KUsyuoAAAAd/cuddle-anime-hug.gif",
];

const getRandom = (array: string[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

let userId = "";
let targetId = "";

class HugEmbed extends Embed {
	constructor(image: string) {
		super({});
		this.description = `<@${targetId}> has been hugged by <@${userId}>`;
		this.title = "Get hugged!";
		this.color = 0x2521ff;
		this.image = image;
	}
}

export default class HugCommand extends Command {
	name = "hug";
	description = "Hug a person of your choosing.";
	defer = true;

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "user",
			type: ApplicationCommandOptionType.User,
			description: "Who would you like to hug?",
			required: true,
		},
	];

	async run(interaction: CommandInteraction) {
		if (!interaction.userId) return interaction.reply("You aren't a user");

		userId = interaction.userId?.toString();
		const target = interaction.options.getUser("user", true);
		targetId = target.id;
		const hug = getRandom(hugGifs);
		const hugEmbed = new HugEmbed(hug);
		await interaction.reply({ embeds: [hugEmbed] });
	}
}
