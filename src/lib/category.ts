import type { Category } from './types';

export function categoryLabel(category: Category): string {
	switch (category) {
		case 'history':
			return 'History';
		case 'service':
			return 'Service';
		case 'ir':
			return 'IR';
		case 'culture':
			return 'Culture';
		case 'creative':
			return 'Creative';
		case 'ios':
			return 'iOS';
	}
}
