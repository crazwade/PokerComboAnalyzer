import { test, expect } from 'vitest';
import { findSameThree } from '../common/analysisCommon/findSameThree';

type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const hands: Hand[] = [
	{ number: 'A', suit: 'diamonds' },
	{ number: 'A', suit: 'spades' },
	{ number: 'A', suit: 'clubs' },
	{ number: 'A', suit: 'hearts' },
];
const hands2: Hand[] = [
	{ number: 'A', suit: 'diamonds' },
	{ number: 'A', suit: 'spades' },
	{ number: '5', suit: 'clubs' },
	{ number: 'A', suit: 'hearts' },
	{ number: '5', suit: 'spades' },
	{ number: 'A', suit: 'clubs' },
	{ number: '5', suit: 'hearts' },
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
	{ number: 'A', suit: 'diamonds' },
	{ number: 'A', suit: 'spades' },
	{ number: 'A', suit: 'clubs' },
	{ number: 'A', suit: 'hearts' },
	{ number: '3', suit: 'spades' },
	{ number: '3', suit: 'clubs' },
	{ number: '3', suit: 'hearts' },
];

test('test', () => {
	expect(findSameThree(hands)).toStrictEqual([
		{ number: 'A', suit: 'spades' },
		{ number: 'A', suit: 'hearts' },
		{ number: 'A', suit: 'diamonds' },
	]);
	expect(findSameThree(hands, true)).toStrictEqual([
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'hearts' },
			{ number: 'A', suit: 'diamonds' },
		],
	]);
	expect(findSameThree(hands2, true)).toStrictEqual([
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'hearts' },
			{ number: 'A', suit: 'diamonds' },
		],
		[
			{ number: '5', suit: 'spades' },
			{ number: '5', suit: 'hearts' },
			{ number: '5', suit: 'clubs' },
		],
	]);
	expect(findSameThree(hands3, true)).toStrictEqual(null);
	expect(findSameThree(hands4, true)).toStrictEqual([
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'hearts' },
			{ number: 'A', suit: 'diamonds' },
		],
		[
			{ number: '3', suit: 'spades' },
			{ number: '3', suit: 'hearts' },
			{ number: '3', suit: 'clubs' },
		],
	]);
});
