import { test, expect } from 'vitest';
import { findSameFour } from '../common/analysisCommon/findSameFour';

type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const hands: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: 'A', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: 'A', suit: 'hearts' },
	{ number: '4', suit: 'diamonds' },
	{ number: '5', suit: 'spades' },
	{ number: 'A', suit: 'diamonds' },
	{ number: 'A', suit: 'clubs' },
];
const hands2: Hand[] = [
	{ number: '3', suit: 'spades' },
	{ number: '3', suit: 'diamonds' },
	{ number: '5', suit: 'spades' },
	{ number: '6', suit: 'clubs' },
	{ number: '7', suit: 'diamonds' },
	{ number: '7', suit: 'spades' },
	{ number: 'Q', suit: 'spades' },
	{ number: '9', suit: 'spades' },
	{ number: '7', suit: 'clubs' },
	{ number: 'J', suit: 'clubs' },
	{ number: 'K', suit: 'diamonds' },
	{ number: '3', suit: 'hearts' },
	{ number: '7', suit: 'hearts' },
	{ number: '2', suit: 'diamonds' },
	{ number: '3', suit: 'clubs' },
	{ number: '4', suit: 'diamonds' },
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

test('test', () => {
	expect(findSameFour(hands)).toStrictEqual([
		{ number: 'A', suit: 'spades' },
		{ number: 'A', suit: 'spades' },
		{ number: 'A', suit: 'hearts' },
		{ number: 'A', suit: 'diamonds' },
	]);
	expect(findSameFour(hands2)).toStrictEqual([
		{ number: '7', suit: 'spades' },
		{ number: '7', suit: 'hearts' },
		{ number: '7', suit: 'diamonds' },
		{ number: '7', suit: 'clubs' },
	]);
	expect(findSameFour(hands2, true)).toStrictEqual([
		[
			{ number: '7', suit: 'spades' },
			{ number: '7', suit: 'hearts' },
			{ number: '7', suit: 'diamonds' },
			{ number: '7', suit: 'clubs' },
		],
		[
			{ number: '3', suit: 'spades' },
			{ number: '3', suit: 'hearts' },
			{ number: '3', suit: 'diamonds' },
			{ number: '3', suit: 'clubs' },
		],
	]);
	expect(findSameFour(hands3)).toStrictEqual(null);
});
