export type Day = 0 | 1 | 2;

export type Category = 'history' | 'service' | 'ir' | 'culture' | 'creative' | 'ios';

export interface AnswerChoice {
	id: string;
	text: string;
	// question-images/ 配下のファイル名 (来場者アプリでは public/questions/ から配信)
	image?: string;
	imageAlt?: string;
}

export interface PublicQuestion {
	id: string;
	day: Day;
	category: Category;
	title: string;
	// question-images/ 配下のファイル名 (来場者アプリでは public/questions/ から配信)
	image?: string;
	imageAlt?: string;
	code?: string;
	lang?: 'ts' | 'js';
	choices: AnswerChoice[];
}

export interface AnswerEntry {
	questionId: string;
	answerId: string | null;
}

export interface AnswerSet {
	userId: string;
	answers: AnswerEntry[];
	submittedAt: number;
}

export interface QrPayload {
	v: 3;
	u: string;
	a: AnswerEntry[];
	t: number;
}

export interface AnswerKeyEntry {
	questionId: string;
	answerId: string;
}

export interface AnswerCheck {
	answerKey: AnswerKeyEntry[];
	checkedAt: number;
}

export interface AnswerResultEntry {
	questionId: string;
	selectedAnswerId: string | null;
	correctAnswerId: string;
	status: 'correct' | 'wrong' | 'unanswered';
}
