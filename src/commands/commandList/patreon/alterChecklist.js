/*
 * OwO Bot for Discord
 * Copyright (C) 2022 Christopher Thai
 * This software is licensed under Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
 * For more information, see README.md and LICENSE
 */

const _blank = '<:blank:427371936482328596>';
const _check = 'β';
const box = 'β¬';
const tada = 'π';

exports.alter = function (id, opt) {
	switch (id) {
	case '460987842961866762':
		return estee(opt);
	default:
		return opt.embed;
	}
};

function estee(opt) {
	let embed = opt.embed;
	embed.color = 8421504;
	embed.author.name = 'κ§ΰΌΊπΌπ€π₯ππ\'π€ π»πππ₯π βπ π₯πΰΌ»κ§';
	const tasks = [
		'β€|Time of Death noted!',
		'β|Souls collected!',
		'β§|Blood consumed!',
		'β‘|Bodies collected!',
		'β§|Bodies all buried!',
		'β|Bones all counted!',
		'β€|Death note sealed & burned!',
	];
	embed.description = '';
	const check = '<a:check:993728851190485072>';
	for (let i = 0; i < opt.tasks.length; i++) {
		const task = opt.tasks[i];
		embed.description += `${task.done ? check : box} ${tasks[i]}\n`;
	}
	if (opt.reward) {
		embed.description += `${check} ${tada} You earned 1,000 ${opt.emoji.cowoncy}, 1 ${opt.emoji.lootbox}, 1 ${opt.emoji.crate}, 100 ${opt.emoji.shards}, and 1 ${opt.emoji.cookie}!`;
	} else if (opt.done) {
		embed.description += `${check} ${tada} You already claimed your checklist rewards!`;
	} else {
		embed.description += `${box} ${tada} Complete your checklist to get a reward!`;
	}

	return embed;
}
