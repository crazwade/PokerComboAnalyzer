import { test, expect } from 'vitest';
import { findPair } from '../common/analysisCommon/findPair';

type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const hands: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: 'A', suit: 'hearts' },
	{ number: '4', suit: 'diamonds' },
	{ number: '5', suit: 'spades' },
	{ number: '9', suit: 'hearts' },
	{ number: 'A', suit: 'diamonds' },
];

const hands2: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: '4', suit: 'diamonds' },
	{ number: '5', suit: 'spades' },
	{ number: '9', suit: 'hearts' },
];

const hands3: Hand[] = [
	{ number: '3', suit: 'clubs' },
	{ number: '4', suit: 'diamonds' },
	{ number: '5', suit: 'spades' },
	{ number: '6', suit: 'clubs' },
	{ number: '7', suit: 'diamonds' },
	{ number: '8', suit: 'spades' },
	{ number: 'Q', suit: 'spades' },
	{ number: '9', suit: 'spades' },
	{ number: '10', suit: 'clubs' },
	{ number: 'J', suit: 'clubs' },
	{ number: 'K', suit: 'diamonds' },
	{ number: 'A', suit: 'hearts' },
	{ number: '2', suit: 'diamonds' },
];

const hands4: Hand[] = [
	{ number: '3', suit: 'clubs' },
	{ number: '4', suit: 'diamonds' },
	{ number: '3', suit: 'spades' },
	{ number: 'K', suit: 'clubs' },
	{ number: 'K', suit: 'diamonds' },
	{ number: '3', suit: 'diamonds' },
];

test('test', () => {
	expect(findPair(hands)).toStrictEqual([
		{ number: 'A', suit: 'spades' },
		{ number: 'A', suit: 'hearts' },
	]);
	expect(findPair(hands2)).toStrictEqual(null);
	expect(findPair(hands3)).toStrictEqual(null);
	expect(findPair(hands4)).toStrictEqual([
		{ number: 'K', suit: 'diamonds' },
		{ number: 'K', suit: 'clubs' },
	]);
	expect(findPair(hands4, true)).toStrictEqual([
		[
			{ number: 'K', suit: 'diamonds' },
			{ number: 'K', suit: 'clubs' },
		],
		[
			{ number: '3', suit: 'spades' },
			{ number: '3', suit: 'diamonds' },
		],
	]);
});
