import { test, expect } from 'vitest';
import { findFullhouse } from '../common/analysisCommon/findFullhouse';

type Hand = {
	number: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
	suit: 'spades' | 'hearts' | 'diamonds' | 'clubs';
};

const hands: Hand[] = [
	{ number: 'A', suit: 'spades' },
	{ number: 'A', suit: 'hearts' },
	{ number: '5', suit: 'hearts' },
	{ number: 'A', suit: 'diamonds' },
	{ number: '2', suit: 'hearts' },
	{ number: '2', suit: 'diamonds' },
	{ number: 'K', suit: 'diamonds' },
	{ number: '3', suit: 'hearts' },
	{ number: '3', suit: 'diamonds' },
];

const hands2: Hand[] = [
	{ number: 'J', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: 'J', suit: 'hearts' },
	{ number: '4', suit: 'diamonds' },
	{ number: '2', suit: 'clubs' },
	{ number: '5', suit: 'spades' },
	{ number: '5', suit: 'hearts' },
	{ number: 'K', suit: 'hearts' },
	{ number: 'J', suit: 'diamonds' },
	{ number: 'K', suit: 'spades' },
	{ number: '2', suit: 'spades' },
	{ number: '9', suit: 'diamonds' },
	{ number: 'K', suit: 'diamonds' },
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

const hand4: Hand[] = [
	{ number: 'J', suit: 'spades' },
	{ number: 'J', suit: 'hearts' },
	{ number: '4', suit: 'diamonds' },
	{ number: '2', suit: 'clubs' },
	{ number: '5', suit: 'spades' },
	{ number: '5', suit: 'hearts' },
	{ number: 'K', suit: 'hearts' },
	{ number: '9', suit: 'diamonds' },
];

test('test', () => {
	expect(findFullhouse(hands)).toStrictEqual([
		{ number: 'A', suit: 'spades' },
		{ number: 'A', suit: 'hearts' },
		{ number: 'A', suit: 'diamonds' },
		{ number: '3', suit: 'hearts' },
		{ number: '3', suit: 'diamonds' },
	]);
	expect(findFullhouse(hands, true)).toStrictEqual([
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'hearts' },
			{ number: 'A', suit: 'diamonds' },
			{ number: '3', suit: 'hearts' },
			{ number: '3', suit: 'diamonds' },
		],
		[
			{ number: 'A', suit: 'spades' },
			{ number: 'A', suit: 'hearts' },
			{ number: 'A', suit: 'diamonds' },
			{ number: '2', suit: 'hearts' },
			{ number: '2', suit: 'diamonds' },
		],
	]);
	expect(findFullhouse(hands2)).toStrictEqual([
		{ number: 'K', suit: 'spades' },
		{ number: 'K', suit: 'hearts' },
		{ number: 'K', suit: 'diamonds' },
		{ number: 'J', suit: 'spades' },
		{ number: 'J', suit: 'hearts' },
	]);
	expect(findFullhouse(hands2, true)).toStrictEqual([
		[
			{ number: 'K', suit: 'spades' },
			{ number: 'K', suit: 'hearts' },
			{ number: 'K', suit: 'diamonds' },
			{ number: 'J', suit: 'spades' },
			{ number: 'J', suit: 'hearts' },
		],
		[
			{ number: 'K', suit: 'spades' },
			{ number: 'K', suit: 'hearts' },
			{ number: 'K', suit: 'diamonds' },
			{ number: '5', suit: 'spades' },
			{ number: '5', suit: 'hearts' },
		],
		[
			{ number: 'K', suit: 'spades' },
			{ number: 'K', suit: 'hearts' },
			{ number: 'K', suit: 'diamonds' },
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'spades' },
		],
		[
			{ number: 'J', suit: 'spades' },
			{ number: 'J', suit: 'hearts' },
			{ number: 'J', suit: 'diamonds' },
			{ number: 'K', suit: 'spades' },
			{ number: 'K', suit: 'hearts' },
		],
		[
			{ number: 'J', suit: 'spades' },
			{ number: 'J', suit: 'hearts' },
			{ number: 'J', suit: 'diamonds' },
			{ number: '5', suit: 'spades' },
			{ number: '5', suit: 'hearts' },
		],
		[
			{ number: 'J', suit: 'spades' },
			{ number: 'J', suit: 'hearts' },
			{ number: 'J', suit: 'diamonds' },
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'spades' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'clubs' },
			{ number: 'K', suit: 'spades' },
			{ number: 'K', suit: 'hearts' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'clubs' },
			{ number: 'J', suit: 'spades' },
			{ number: 'J', suit: 'hearts' },
		],
		[
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'spades' },
			{ number: '2', suit: 'clubs' },
			{ number: '5', suit: 'spades' },
			{ number: '5', suit: 'hearts' },
		],
	]);
	expect(findFullhouse(hands3)).toStrictEqual(null);
	expect(findFullhouse(hand4)).toStrictEqual(null);
});
