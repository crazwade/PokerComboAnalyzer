import { test, expect } from 'vitest';
import { findStraightSame } from '../common/analysisCommon/findStraightSame';

type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const hands: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: '3', suit: 'spades' },
	{ number: '4', suit: 'spades' },
	{ number: '4', suit: 'diamonds' },
	{ number: '6', suit: 'spades' },
	{ number: '7', suit: 'spades' },
	{ number: '8', suit: 'spades' },
	{ number: '9', suit: 'spades' },
	{ number: '10', suit: 'spades' },
	{ number: 'J', suit: 'spades' },
	{ number: 'Q', suit: 'spades' },
	{ number: 'K', suit: 'spades' },
];

const hands2: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: '3', suit: 'spades' },
	{ number: '4', suit: 'spades' },
	{ number: '5', suit: 'spades' },
	{ number: '5', suit: 'diamonds' },
];

const hand3: Hand[] = [];

const hands4: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: 'A', suit: 'diamonds' },
	{ number: 'A', suit: 'clubs' },
	{ number: '2', suit: 'spades' },
	{ number: '3', suit: 'diamonds' },
	{ number: '4', suit: 'hearts' },
	{ number: '5', suit: 'clubs' },
];

const hand5: Hand[] = [
	{ number: 'K', suit: 'spades' },
	{ number: 'A', suit: 'spades' },
	{ number: 'A', suit: 'diamonds' },
	{ number: '2', suit: 'diamonds' },
	{ number: '3', suit: 'hearts' },
	{ number: '4', suit: 'spades' },
	{ number: '5', suit: 'spades' },
];

test('test', () => {
	expect(findStraightSame(hands)).toStrictEqual([
		{ number: '10', suit: 'spades' },
		{ number: 'J', suit: 'spades' },
		{ number: 'Q', suit: 'spades' },
		{ number: 'K', suit: 'spades' },
		{ number: 'A', suit: 'spades' },
	]);
	expect(findStraightSame(hands, true)).toStrictEqual(
		[
			[
				{ number: '10', suit: 'spades' },
				{ number: 'J', suit: 'spades' },
				{ number: 'Q', suit: 'spades' },
				{ number: 'K', suit: 'spades' },
				{ number: 'A', suit: 'spades' },
			],
			[
				{ number: '2', suit: 'spades' },
				{ number: 'J', suit: 'spades' },
				{ number: 'Q', suit: 'spades' },
				{ number: 'K', suit: 'spades' },
				{ number: 'A', suit: 'spades' },
			],
			[
				{ number: '2', suit: 'spades' },
				{ number: '3', suit: 'spades' },
				{ number: 'Q', suit: 'spades' },
				{ number: 'K', suit: 'spades' },
				{ number: 'A', suit: 'spades' },
			],
			[
				{ number: '2', suit: 'spades' },
				{ number: '3', suit: 'spades' },
				{ number: '4', suit: 'diamonds' },
				{ number: 'K', suit: 'spades' },
				{ number: 'A', suit: 'spades' },
			],
			[
				{ number: '2', suit: 'spades' },
				{ number: '3', suit: 'spades' },
				{ number: '4', suit: 'spades' },
				{ number: 'K', suit: 'spades' },
				{ number: 'A', suit: 'spades' },
			],
		],
	);
	expect(findStraightSame(hand5, true)).toStrictEqual(
		[
			[
				{ number: '2', suit: 'diamonds' },
				{ number: '3', suit: 'hearts' },
				{ number: '4', suit: 'spades' },
				{ number: 'K', suit: 'spades' },
				{ number: 'A', suit: 'diamonds' },
			],
			[
				{ number: '2', suit: 'diamonds' },
				{ number: '3', suit: 'hearts' },
				{ number: '4', suit: 'spades' },
				{ number: 'K', suit: 'spades' },
				{ number: 'A', suit: 'spades' },
			],
			[
				{ number: '2', suit: 'diamonds' },
				{ number: '3', suit: 'hearts' },
				{ number: '4', suit: 'spades' },
				{ number: '5', suit: 'spades' },
				{ number: 'A', suit: 'diamonds' },
			],
			[
				{ number: '2', suit: 'diamonds' },
				{ number: '3', suit: 'hearts' },
				{ number: '4', suit: 'spades' },
				{ number: '5', suit: 'spades' },
				{ number: 'A', suit: 'spades' },
			],
		]);
	expect(findStraightSame(hands2, true)).toStrictEqual([
		[
			{ number: '2', suit: 'spades' },
			{ number: '3', suit: 'spades' },
			{ number: '4', suit: 'spades' },
			{ number: '5', suit: 'diamonds' },
			{ number: 'A', suit: 'spades' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '3', suit: 'spades' },
			{ number: '4', suit: 'spades' },
			{ number: '5', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
		],
	]);
	expect(findStraightSame(hand3)).toStrictEqual(null);
	expect(findStraightSame(hands4, true)).toStrictEqual([
		[
			{ number: '2', suit: 'spades' },
			{ number: '3', suit: 'diamonds' },
			{ number: '4', suit: 'hearts' },
			{ number: '5', suit: 'clubs' },
			{ number: 'A', suit: 'clubs' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '3', suit: 'diamonds' },
			{ number: '4', suit: 'hearts' },
			{ number: '5', suit: 'clubs' },
			{ number: 'A', suit: 'diamonds' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '3', suit: 'diamonds' },
			{ number: '4', suit: 'hearts' },
			{ number: '5', suit: 'clubs' },
			{ number: 'A', suit: 'spades' },
		],
	]);
});
