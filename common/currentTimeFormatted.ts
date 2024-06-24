/**
 * Formats a given timestamp into a string representation of the date and time,
 * using the specified locale.
 *
 * @param {number} timestamp - The timestamp to format.
 * @param {string} [locale='zh-TW'] - The locale to use for formatting. Defaults to 'zh-TW'.
 * @param {boolean} [displayDate=true] - Indicates whether to include the date in the formatted string. Defaults to true.
 * @return {string} The formatted date and time as a string.
 */
const currentTimeFormatted = (
	timestamp: number,
	locale = 'zh-TW',
	displayDate = true,
): string => {
	// Create a new Date object using the given timestamp
	const date = new Date(timestamp);

	// Define the options for formatting the date and time
	const fullOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false, // Use 24-hour format
	};

	const halfOptions: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false, // Use 24-hour format
	};

	// Format the date and time using the specified locale and options
	const formattedDate = new Intl.DateTimeFormat(
		locale,
		displayDate ? fullOptions : halfOptions,
	).format(date);

	// Return the formatted date and time
	return formattedDate;
};

export default currentTimeFormatted;
