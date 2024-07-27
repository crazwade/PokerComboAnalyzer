import { test, expect } from 'vitest';
import { findSameColor } from '../common/analysisCommon/findSameSuit';

type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const hands01: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: '7', suit: 'spades' },
	{ number: '8', suit: 'spades' },
	{ number: 'Q', suit: 'spades' },
	{ number: '9', suit: 'spades' },
	{ number: '7', suit: 'diamonds' },
	{ number: '8', suit: 'diamonds' },
	{ number: '9', suit: 'diamonds' },
	{ number: 'Q', suit: 'diamonds' },
	{ number: 'A', suit: 'diamonds' },
];
const hands: Hand[] = [
	{ number: '2', suit: 'spades' },
	{ number: '6', suit: 'spades' },
	{ number: '8', suit: 'spades' },
	{ number: '8', suit: 'spades' },
	{ number: 'Q', suit: 'spades' },
	{ number: '2', suit: 'clubs' },
	{ number: '5', suit: 'clubs' },
	{ number: '8', suit: 'clubs' },
	{ number: '8', suit: 'clubs' },
	{ number: 'Q', suit: 'clubs' },
	{ number: '2', suit: 'hearts' },
	{ number: '5', suit: 'hearts' },
	{ number: '8', suit: 'hearts' },
	{ number: '8', suit: 'hearts' },
	{ number: 'Q', suit: 'hearts' },
	{ number: '2', suit: 'diamonds' },
	{ number: '4', suit: 'diamonds' },
	{ number: '4', suit: 'diamonds' },
	{ number: '7', suit: 'diamonds' },
	{ number: 'K', suit: 'diamonds' },
];

test('test', () => {
	expect(findSameColor(hands01)).toStrictEqual(
		[
			{ number: '7', suit: 'spades' },
			{ number: '8', suit: 'spades' },
			{ number: '9', suit: 'spades' },
			{ number: 'Q', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
		],
	);
	expect(findSameColor(hands, true)).toStrictEqual([
		[
			{ number: '2', suit: 'diamonds' },
			{ number: '4', suit: 'diamonds' },
			{ number: '4', suit: 'diamonds' },
			{ number: '7', suit: 'diamonds' },
			{ number: 'K', suit: 'diamonds' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '6', suit: 'spades' },
			{ number: '8', suit: 'spades' },
			{ number: '8', suit: 'spades' },
			{ number: 'Q', suit: 'spades' },
		],
		[
			{ number: '2', suit: 'hearts' },
			{ number: '5', suit: 'hearts' },
			{ number: '8', suit: 'hearts' },
			{ number: '8', suit: 'hearts' },
			{ number: 'Q', suit: 'hearts' },
		],
		[
			{ number: '2', suit: 'clubs' },
			{ number: '5', suit: 'clubs' },
			{ number: '8', suit: 'clubs' },
			{ number: '8', suit: 'clubs' },
			{ number: 'Q', suit: 'clubs' },
		],
	]);
	expect(findSameColor(hands)).toStrictEqual(
		[
			{ number: '2', suit: 'diamonds' },
			{ number: '4', suit: 'diamonds' },
			{ number: '4', suit: 'diamonds' },
			{ number: '7', suit: 'diamonds' },
			{ number: 'K', suit: 'diamonds' },
		],
	);
});
