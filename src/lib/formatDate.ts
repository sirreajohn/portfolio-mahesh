import { type DateField } from '@prismicio/client';

export function formatDate(datestr: DateField): string {
	if (!datestr) return '';
	const date = new Date(datestr);

	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	return new Intl.DateTimeFormat('en-GB', options).format(date);
}
