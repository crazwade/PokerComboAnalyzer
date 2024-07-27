import { test, expect } from 'vitest';
import { findStraightSameSuit } from '../common/analysisCommon/findStraightSameSuit';

type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const hands: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: '3', suit: 'spades' },
	{ number: '4', suit: 'spades' },
	{ number: '6', suit: 'spades' },
	{ number: '7', suit: 'spades' },
	{ number: '8', suit: 'spades' },
	{ number: '9', suit: 'spades' },
	{ number: '10', suit: 'spades' },
	{ number: 'J', suit: 'spades' },
	{ number: 'K', suit: 'spades' },
	{ number: '4', suit: 'diamonds' },
];

const hands2: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: '3', suit: 'spades' },
	{ number: '4', suit: 'spades' },
	{ number: '6', suit: 'spades' },
	{ number: '7', suit: 'spades' },
	{ number: '8', suit: 'spades' },
	{ number: '9', suit: 'spades' },
	{ number: '10', suit: 'spades' },
	{ number: 'J', suit: 'spades' },
	{ number: '4', suit: 'diamonds' },
];

const hand3: Hand[] = [];

const hands4: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: 'A', suit: 'diamonds' },
	{ number: '2', suit: 'spades' },
	{ number: '3', suit: 'diamonds' },
	{ number: '3', suit: 'spades' },
	{ number: '4', suit: 'spades' },
	{ number: '4', suit: 'diamonds' },
	{ number: '5', suit: 'spades' },
	{ number: '2', suit: 'diamonds' },
	{ number: '5', suit: 'diamonds' },
];

test('test', () => {
	expect(findStraightSameSuit(hands)).toStrictEqual([
		{ number: '2', suit: 'spades' },
		{ number: '3', suit: 'spades' },
		{ number: '4', suit: 'spades' },
		{ number: 'K', suit: 'spades' },
		{ number: 'A', suit: 'spades' },
	]);
	expect(findStraightSameSuit(hands, true)).toStrictEqual([
		[
			{ number: '6', suit: 'spades' },
			{ number: '7', suit: 'spades' },
			{ number: '8', suit: 'spades' },
			{ number: '9', suit: 'spades' },
			{ number: '10', suit: 'spades' },
		],
		[
			{ number: '7', suit: 'spades' },
			{ number: '8', suit: 'spades' },
			{ number: '9', suit: 'spades' },
			{ number: '10', suit: 'spades' },
			{ number: 'J', suit: 'spades' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '3', suit: 'spades' },
			{ number: '4', suit: 'spades' },
			{ number: 'K', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
		],
	]);
	expect(findStraightSameSuit(hands2)).toStrictEqual([
		{ number: '7', suit: 'spades' },
		{ number: '8', suit: 'spades' },
		{ number: '9', suit: 'spades' },
		{ number: '10', suit: 'spades' },
		{ number: 'J', suit: 'spades' },
	]);
	expect(findStraightSameSuit(hands2, true)).toStrictEqual([
		[
			{ number: '6', suit: 'spades' },
			{ number: '7', suit: 'spades' },
			{ number: '8', suit: 'spades' },
			{ number: '9', suit: 'spades' },
			{ number: '10', suit: 'spades' },
		],
		[
			{ number: '7', suit: 'spades' },
			{ number: '8', suit: 'spades' },
			{ number: '9', suit: 'spades' },
			{ number: '10', suit: 'spades' },
			{ number: 'J', suit: 'spades' },
		],
	]);
	expect(findStraightSameSuit(hand3)).toStrictEqual(null);
	expect(findStraightSameSuit(hands4)).toStrictEqual([
		{ number: '2', suit: 'spades' },
		{ number: '3', suit: 'spades' },
		{ number: '4', suit: 'spades' },
		{ number: '5', suit: 'spades' },
		{ number: 'A', suit: 'spades' },
	]);
	expect(findStraightSameSuit(hands4, true)).toStrictEqual([
		[
			{ number: '2', suit: 'spades' },
			{ number: '3', suit: 'spades' },
			{ number: '4', suit: 'spades' },
			{ number: '5', suit: 'spades' },
			{ number: 'A', suit: 'spades' },
		],
		[
			{ number: '2', suit: 'diamonds' },
			{ number: '3', suit: 'diamonds' },
			{ number: '4', suit: 'diamonds' },
			{ number: '5', suit: 'diamonds' },
			{ number: 'A', suit: 'diamonds' },
		],
	]);
});
