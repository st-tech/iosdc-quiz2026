import { ENCRYPTED_EXPLANATIONS } from '../data/explanations.encrypted';
import { encodeAnswerKey } from './answer-key-codec';
import type { AnswerKeyEntry, Day } from './types';

// 読み取った正答QRの内容から鍵を導出して、その日の解説文を復号する。
// 復号に失敗した場合は null を返し、答え合わせ画面は解説なしで表示される。
export async function decryptExplanations(
	day: Day,
	answerKey: AnswerKeyEntry[]
): Promise<Record<string, string> | null> {
	try {
		const blob = ENCRYPTED_EXPLANATIONS[day];
		const encoder = new TextEncoder();
		const payload = encodeAnswerKey(answerKey);
		const keyBytes = await crypto.subtle.digest('SHA-256', encoder.encode(payload));
		const key = await crypto.subtle.importKey('raw', keyBytes, 'AES-GCM', false, ['decrypt']);
		const plain = await crypto.subtle.decrypt(
			{ name: 'AES-GCM', iv: fromBase64(blob.iv) },
			key,
			fromBase64(blob.data)
		);
		return JSON.parse(new TextDecoder().decode(plain)) as Record<string, string>;
	} catch (_) {
		return null;
	}
}

function fromBase64(value: string): Uint8Array<ArrayBuffer> {
	const binary = atob(value);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i += 1) {
		bytes[i] = binary.charCodeAt(i);
	}
	return bytes;
}
