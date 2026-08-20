// public/questions/ に配置された問題画像のURLを base path 付きで解決する
export function questionImageUrl(fileName: string): string {
	return `${import.meta.env.BASE_URL}questions/${fileName}`;
}
