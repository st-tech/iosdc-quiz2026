import type { Day } from './types';

// iOSDC Japan 2026 開催日程 (JST): day0 = 9/11(金), day1 = 9/12(土), day2 = 9/13(日)
export const DAY_SCHEDULE: Record<string, Day> = {
	'2026-09-11': 0,
	'2026-09-12': 1,
	'2026-09-13': 2,
};

// 開催期間外 (開発・検証時など) に使う day
export const FALLBACK_DAY: Day = 0;

export function readDay(now = new Date()): Day {
	// localhost での動作確認用: URL に ?day=0|1|2 を付けると強制的に切り替えられる
	if (typeof location !== 'undefined' && location.hostname === 'localhost') {
		const param = new URLSearchParams(location.search).get('day');
		if (param === '0' || param === '1' || param === '2') {
			return Number(param) as Day;
		}
	}
	return DAY_SCHEDULE[getJstDateKey(now)] ?? FALLBACK_DAY;
}

function getJstDateKey(now: Date): string {
	return new Intl.DateTimeFormat('en-CA', {
		timeZone: 'Asia/Tokyo',
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
	}).format(now);
}
