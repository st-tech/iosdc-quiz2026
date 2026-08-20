# iOSDC Quiz 2026

iOSDC Japan 2026 ブースクイズの来場者用アプリです。
問題に回答したあと、ブースでスタッフが提示する正答 QR を読み取ると正誤結果が表示されます。

## 起動

```bash
pnpm install
pnpm dev
```

\* `src/data/questions.public.ts` と `src/lib/{types,qr-codec,answer-key-codec,schedule}.ts` は、出題管理ツール（ローカル管理。正答・解説を含むマスターデータと sync スクリプト）で生成されるファイルです。このリポジトリ上では直接編集しないでください。

## License

MIT

---

Copyright &copy; ZOZO, Inc.
