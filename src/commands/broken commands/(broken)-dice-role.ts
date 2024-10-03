import {
	type APIApplicationCommandBasicOption,
	ApplicationCommandOptionType,
	Command,
	type CommandInteraction,
	Embed,
} from "@buape/carbon";

class DieEmbed extends Embed {
	constructor(description: string) {
		super({});
		this.description = description;
		this.title = "You rolled some die!";
		this.color = 0x196b3c;
	}
}

export default class DieRollCommand extends Command {
	name = "roll-dice";
	description = "Roll either 1, 2, or 3 die.";
	defer = true;

	options: APIApplicationCommandBasicOption[] = [
		{
			name: "amount",
			type: ApplicationCommandOptionType.String,
			description: "How many die should be rolled?",
			required: true,
			choices: [
				{ name: "1", value: "one" },
				{ name: "2", value: "two" },
				{ name: "3", value: "three" },
			],
		},
	];

	async run(interaction: CommandInteraction) {
		const die1 = Math.floor(Math.random() * 6) + 1;
		const die2 = Math.floor(Math.random() * 12) + 2;
		const die3 = Math.floor(Math.random() * 18) + 3;
		
		const amount = interaction.options.getString("amount");

		if (amount === "one") {
			const embed = new DieEmbed(`Your number is: \n ${die1}`);
			await interaction.reply({ embeds: [embed] });
		} else if (amount === "two") {
			const embed = new DieEmbed(`Your number is: \n ${die2}`);
			await interaction.reply({ embeds: [embed] });
		} else if (amount === "three") {
			const embed = new DieEmbed(`Your number is: \n ${die3}`);
			await interaction.reply({ embeds: [embed] });
		}
	}
}
