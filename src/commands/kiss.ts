import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
	Embed,
} from "@buape/carbon";

const kissGifs = [
	"https://media.tenor.com/BZyWzw2d5tAAAAAC/hyakkano-100-girlfriends.gif",
	"https://media.tenor.com/ye6xtORyw_8AAAAC/2.gif",
	"https://media.tenor.com/Y2AdPDiQoK8AAAAC/kiss-love.gif",
	"https://media.tenor.com/9u2vmryDP-cAAAAC/horimiya-animes.gif",
	"https://media.tenor.com/XXPkLLIct-8AAAAC/kiss-cuddles.gif",
	"https://media.tenor.com/EjHfImhsk5AAAAAC/kiss-kissing.gif",
	"https://media.tenor.com/8WtQGgi-K2sAAAAC/jura-vandread.gif",
	"https://media.tenor.com/mNPxG38pPV0AAAAC/kiss-love.gif",
	"https://media.tenor.com/HJLEYgQcvEAAAAAd/yosuga-no-sora-kiss.gif",
	"https://media.tenor.com/OpoMUqfR7ysAAAAd/shirayuki-zen-kiss-anime.gif",
];

const getRandom = (array: string[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

let userId = "";
let targetId = "";

class KissEmbed extends Embed {
	constructor(image: string) {
		super({});
		this.description = `<@${targetId}> has been kissed by <@${userId}>`;
		this.title = "Kissy Kissy";
		this.color = 0x6b1919;
		this.image = image;
	}
}

export default class KissCommand extends Command {
	name = "kiss";
	description = "Kiss a person of your choosing.";
	defer = true;

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "user",
			type: ApplicationCommandOptionType.User,
			description: "Who would you like to kiss?",
			required: true,
		},
	];

	async run(interaction: CommandInteraction) {
		if (!interaction.userId) return interaction.reply("You aren't a user");

		userId = interaction.userId?.toString();
		const target = interaction.options.getUser("user", true);
		targetId = target.id;
		const kiss = getRandom(kissGifs);
		const kissEmbed = new KissEmbed(kiss);
		await interaction.reply({ embeds: [kissEmbed] });
	}
}
