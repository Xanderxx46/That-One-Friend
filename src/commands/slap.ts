import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
} from "@buape/carbon";

import { Embed } from "@buape/carbon";

const slapGifs = [
	"https://media.tenor.com/Ws6Dm1ZW_vMAAAAC/girl-slap.gif",
	"https://media.tenor.com/eU5H6GbVjrcAAAAC/slap-jjk.gif",
	"https://media.tenor.com/XiYuU9h44-AAAAAC/anime-slap-mad.gif",
	"https://media.tenor.com/Sv8LQZAoQmgAAAAC/chainsaw-man-csm.gif",
	"https://media.tenor.com/EfhPfbG0hnMAAAAC/slap-handa-seishuu.gif",
	"https://media.tenor.com/qvvKGZhH0ysAAAAC/anime-girl.gif",
	"https://media.tenor.com/ZozZrvtEdAkAAAAC/slap.gif",
	"https://media.tenor.com/E3OW-MYYum0AAAAC/no-angry.gif",
	"https://media.tenor.com/yJmrNruFNtEAAAAC/slap.gif",
	"https://media.tenor.com/nVvUhW4FBxcAAAAd/slap.gif",
];

const getRandom = (array: string[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

let userId = "";
let targetId = "";

class SlapEmbed extends Embed {
	constructor(image: string) {
		super({});
		this.description = `<@${targetId}> has been slapped by <@${userId}>`;
		this.title = "You got Slapped!";
		this.color = 0xff0000;
		this.image = image;
	}
}

export default class SlapCommand extends Command {
	name = "slap";
	description = "Slap a person of your choosing.";
	defer = true;

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "user",
			type: ApplicationCommandOptionType.User,
			description: "Who would you like to Slap?",
			required: true,
		},
	];

	async run(interaction: CommandInteraction) {
		if (!interaction.userId) return interaction.reply("You aren't a user");

		userId = interaction.userId?.toString();
		const target = interaction.options.getUser("user", true);
		targetId = target.id;
		const slap = getRandom(slapGifs);
		const slapEmbed = new SlapEmbed(slap);
		await interaction.reply({ embeds: [slapEmbed] });
	}
}
