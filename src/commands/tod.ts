import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
} from "@buape/carbon";

import { Embed } from "@buape/carbon";

class TruthEmbed extends Embed {
	constructor(description: string) {
		super({});
		this.description = description;
		this.title = "Truth";
		this.color = 0x2521ff;
	}
}
class DareEmbed extends Embed {
	constructor(description: string) {
		super({});
		this.description = description;
		this.title = "Dare";
		this.color = 0xfc7f03;
	}
}

const truths = [
	"What is the most embarrassing moment of your life?",
	"What is something you still hide from your parents/guardian?",
	"What/who do you like most in the world?",
	"What is your favorite candy?",
	"What is your favorite game?",
	"Where does your Discord name come from?",
	"How are you today?",
	"Do you prefer cats or dogs?",
	"When did you first get a phone?",
	"How many Discord servers are you in?\\nUse https://discordtools.io to help find out!",
];

const dares = [
	"Show your last 3 DM Messages.",
	"Send your most embarrassing screenshot/image.",
	"Post your last 5 people you DMed.",
	"Send the 😩 to your best friend.",
	"Recommend this bot to 5 of your friends.",
	"Text your ex.",
	"Face reveal to one person in your group. (If comfortable)",
	"DM Xander saying you love this bot.",
	"Spam ping one person in your group.",
	"Send your funniest meme.",
];

const getRandom = (array: string[]) => {
	const randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
};

export default class todCommand extends Command {
	name = "truth-or-dare";
	description = "Get a truth or a dare.";
	defer = true;

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "truth-or-dare",
			type: ApplicationCommandOptionType.String,
			description: "Pick either a truth or a dare",
			required: true,
			choices: [
				{ name: "Truth", value: "truth" },
				{ name: "Dare", value: "dare" },
			],
		},
	];

	async run(interaction: CommandInteraction) {
		const answer = interaction.options.getString("truth-or-dare", true);

		if (answer === "truth") {
			const truth = getRandom(truths);
			const truthEmbed = new TruthEmbed(truth);
			await interaction.reply({ embeds: [truthEmbed] });
		} else if (answer === "dare") {
			const dare = getRandom(dares);
			const dareEmbed = new DareEmbed(dare);
			await interaction.reply({ embeds: [dareEmbed] });
		}
	}
}
