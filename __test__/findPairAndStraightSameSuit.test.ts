import { test, expect } from 'vitest';
import { findPairAndStraightSameSuit } from '../common/analysisCommon/findPairAndStraightSameSuit';

type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const hands: Hand[] = [
	{ number: '2', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: 'A', suit: 'spades' },
	{ number: 'A', suit: 'spades' },
	{ number: '4', suit: 'spades' },
	{ number: '5', suit: 'spades' },
];

const hands2: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: 'A', suit: 'spades' },
	{ number: '4', suit: 'spades' },
	{ number: '5', suit: 'spades' },
	{ number: 'K', suit: 'spades' },
	{ number: 'J', suit: 'spades' },
];

test('test', () => {
	expect(findPairAndStraightSameSuit(hands, true)).toStrictEqual([
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '4', suit: 'spades' },
			{ number: '5', suit: 'spades' },
		],
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '5', suit: 'spades' },
		],
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '4', suit: 'spades' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '5', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '4', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
		],
	]);
	expect(findPairAndStraightSameSuit(hands)).toStrictEqual([
		{ number: 'A', suit: 'spades' },
		{ number: 'A', suit: 'spades' },
		{ number: '2', suit: 'spades' },
		{ number: '4', suit: 'spades' },
		{ number: '5', suit: 'spades' },
	]);
	expect(findPairAndStraightSameSuit(hands2)).toStrictEqual([
		{ number: 'A', suit: 'spades' },
		{ number: 'A', suit: 'spades' },
		{ number: '5', suit: 'spades' },
		{ number: 'J', suit: 'spades' },
		{ number: 'K', suit: 'spades' },
	]);
	expect(findPairAndStraightSameSuit(hands2, true)).toStrictEqual([
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
			{ number: '5', suit: 'spades' },
			{ number: 'J', suit: 'spades' },
			{ number: 'K', suit: 'spades' },
		],
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
			{ number: '4', suit: 'spades' },
			{ number: 'J', suit: 'spades' },
			{ number: 'K', suit: 'spades' },
		],
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
			{ number: '4', suit: 'spades' },
			{ number: '5', suit: 'spades' },
			{ number: 'K', suit: 'spades' },
		],
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
			{ number: '4', suit: 'spades' },
			{ number: '5', suit: 'spades' },
			{ number: 'J', suit: 'spades' },
		],
	]);
});
