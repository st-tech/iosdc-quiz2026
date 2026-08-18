import type { Day } from './types';

// TODO: iOSDC Japan 2026 の開催日程確定後に実際の日付へ更新する (JST)
export const DAY_SCHEDULE: Record<string, Day> = {
	'2026-09-17': 0,
	'2026-09-18': 1,
	'2026-09-19': 2,
};

// 開催期間外 (開発・検証時など) に使う day
export const FALLBACK_DAY: Day = 0;

export function readDay(now = new Date()): Day {
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
