# iOSDC Quiz 2026

iOSDC Japan 2026 ブースクイズの来場者用アプリです。
問題に回答したあと、ブースでスタッフが提示する正答 QR を読み取ると正誤結果が表示されます。

## 起動

```bash
pnpm install
pnpm dev
```

\* iosdc-quiz2026-staff リポジトリのgit submoduleとして併せて開発されています。AI開発時はstaffリポジトリ側をワークスペースディレクトリとしてください。

\* `src/data/questions.public.ts` と `src/lib/{types,qr-codec,answer-key-codec,schedule}.ts` は staff リポジトリの `pnpm sync-questions` で生成されるファイルです。直接編集せず、staff 側のマスターを編集してください。

## License

MIT

---

Copyright &copy; ZOZO, Inc.
