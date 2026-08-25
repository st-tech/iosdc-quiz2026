import type { Day, PublicQuestion } from '../lib/types';

export const QUESTIONS = [
	{
		id: 'b96c',
		day: 0,
		category: 'history',
		title:
			'株式会社スタートトゥデイの社名の由来となった、ハードコア・パンクバンドの名前は、〇〇ビスケッツ？',
		choices: [
			{
				id: '07d2',
				text: 'ポケット',
			},
			{
				id: 'e5ab',
				text: 'ロサンゼルス',
			},
			{
				id: '2ebd',
				text: 'ゴリラ',
			},
			{
				id: '58fc',
				text: 'ブラック',
			},
		],
	},
	{
		id: 'd1c5',
		day: 0,
		category: 'history',
		title: '1995年の創業のきっかけとなった事業は？',
		choices: [
			{
				id: 'a548',
				text: '古着屋の実店舗',
			},
			{
				id: 'fa5b',
				text: '輸入レコード・CDのカタログ販売',
			},
			{
				id: '8170',
				text: '雑誌の出版',
			},
			{
				id: '4595',
				text: 'ライブハウス運営',
			},
		],
	},
	{
		id: '8a08',
		day: 0,
		category: 'service',
		title:
			'2013年、カーラ・デルヴィーニュさんを起用してオープンした、10代〜20代女性向けショッピングモールの名前は？',
		choices: [
			{
				id: '2cbf',
				text: 'LE MARIA',
			},
			{
				id: 'dfe2',
				text: 'LA BOO',
			},
			{
				id: 'c118',
				text: 'LA OHANA',
			},
			{
				id: '3e2a',
				text: 'LA GOON',
			},
		],
	},
	{
		id: 'f8ba',
		day: 0,
		category: 'service',
		title: '「ツケ払い」、現在の利用上限金額はいくら？',
		choices: [
			{
				id: 'a2a7',
				text: '20,000円',
			},
			{
				id: 'e992',
				text: '54,000円',
			},
			{
				id: '1d91',
				text: '100,000円',
			},
			{
				id: 'd498',
				text: '500,000円',
			},
		],
	},
	{
		id: '513d',
		day: 0,
		category: 'ir',
		title: '現在のZOZOTOWNアクティブ会員数は？',
		choices: [
			{
				id: 'd759',
				text: '約550万人',
			},
			{
				id: '46ce',
				text: '約800万人',
			},
			{
				id: 'c212',
				text: '約1,250万人',
			},
			{
				id: '0cc0',
				text: '約3,000万人',
			},
		],
	},
	{
		id: '8f4b',
		day: 0,
		category: 'culture',
		title: 'ZOZOらしさを体現するための3つの約束、「従業員の約束」とは？',
		choices: [
			{
				id: '1c6c',
				text: 'ソウゾウしよう・生み出そう・頼られよう',
			},
			{
				id: '78b6',
				text: 'やってみよう・助け合おう・頼られよう',
			},
			{
				id: '5ad4',
				text: 'やってみよう・生み出そう・頼られよう',
			},
			{
				id: '5e97',
				text: 'ソウゾウしよう・助け合おう・信じよう',
			},
		],
	},
	{
		id: '0870',
		day: 0,
		category: 'creative',
		title: '過去にZOZOTOWNのCMに登場したことのある有名人は誰？',
		choices: [
			{
				id: 'b155',
				text: '木梨憲武',
			},
			{
				id: '20ba',
				text: '浅野忠信',
			},
			{
				id: '6cc8',
				text: '明石家さんま',
			},
			{
				id: 'f562',
				text: '江頭2:50',
			},
		],
	},
	{
		id: '5f73',
		day: 0,
		category: 'creative',
		title: 'ZOZOがクラブビジョン推進パートナーを務める、宮崎のサッカーチーム名は？',
		choices: [
			{
				id: 'f189',
				text: 'テバゲジャーロ',
			},
			{
				id: '5df5',
				text: 'サンシャインズ',
			},
			{
				id: '37f9',
				text: 'テゲバジャーロ',
			},
			{
				id: 'b8a6',
				text: 'ヴィアマテラス',
			},
		],
	},
	{
		id: '82cc',
		day: 0,
		category: 'ios',
		title: 'ZOZOTOWN iOSアプリで商品の検索をするときの色の絞り込み、選べる色は全部でいくつ？',
		choices: [
			{
				id: '7285',
				text: '8色',
			},
			{
				id: '53c6',
				text: '12色',
			},
			{
				id: 'f344',
				text: '15色（「その他」含む）',
			},
			{
				id: 'a86a',
				text: '20色',
			},
		],
	},
	{
		id: 'b8c1',
		day: 0,
		category: 'ios',
		title: 'ZOZOTOWNで買い物を完了したときに表示される、注文完了画面の呼び名は？',
		image: 'order_complete.png',
		imageAlt: '注文完了画面のスクリーンショット',
		choices: [
			{
				id: '7e2a',
				text: 'THANK YOU!画面',
			},
			{
				id: 'fedf',
				text: 'ARIGATO!画面',
			},
			{
				id: 'a68b',
				text: 'KANSHA!画面',
			},
			{
				id: '20e4',
				text: 'ORDER COMPLETE画面',
			},
		],
	},
	{
		id: 'd448',
		day: 1,
		category: 'history',
		title: 'ZOZOの会社設立記念日は何月何日？',
		choices: [
			{
				id: '2d3f',
				text: '12月15日',
			},
			{
				id: 'a4c9',
				text: '5月21日',
			},
			{
				id: '7e59',
				text: '12月11日',
			},
			{
				id: '581c',
				text: '2月15日',
			},
		],
	},
	{
		id: 'd0f8',
		day: 1,
		category: 'history',
		title: 'ZOZOTOWNが開設されたのはいつ？',
		choices: [
			{
				id: '0b5d',
				text: '2000年12月15日',
			},
			{
				id: 'aaab',
				text: '2002年12月15日',
			},
			{
				id: 'f3e6',
				text: '2004年12月15日',
			},
			{
				id: 'ea50',
				text: '2006年12月15日',
			},
		],
	},
	{
		id: 'b8a9',
		day: 1,
		category: 'service',
		title: 'ZOZOTOWNアプリの、メニューの並びで正しいものはどれ？',
		choices: [
			{
				id: '9578',
				text: 'A',
				image: 'tab_bar_A.png',
				imageAlt: 'メニュー並び順の候補A',
			},
			{
				id: '4ce4',
				text: 'B',
				image: 'tab_bar_B.png',
				imageAlt: 'メニュー並び順の候補B',
			},
			{
				id: '183c',
				text: 'C',
				image: 'tab_bar_C.png',
				imageAlt: 'メニュー並び順の候補C',
			},
			{
				id: '52b1',
				text: 'D',
				image: 'tab_bar_D.png',
				imageAlt: 'メニュー並び順の候補D',
			},
		],
	},
	{
		id: 'afd9',
		day: 1,
		category: 'service',
		title: '「ZOZOSUIT」が発表されたのはいつ？',
		choices: [
			{
				id: '8746',
				text: '2016年11月',
			},
			{
				id: '0776',
				text: '2017年11月',
			},
			{
				id: '68ae',
				text: '2018年11月',
			},
			{
				id: 'ea2e',
				text: '2019年11月',
			},
		],
	},
	{
		id: 'a8bc',
		day: 1,
		category: 'service',
		title: 'WEARへの移行で2015年に終了したサービスは？',
		choices: [
			{
				id: '0b98',
				text: 'ZOZOMAP',
			},
			{
				id: '6977',
				text: 'ZOZONAVI',
			},
			{
				id: '93bb',
				text: 'ZOZOSHOP',
			},
			{
				id: '1d18',
				text: 'ZOZOSEARCH',
			},
		],
	},
	{
		id: '66a3',
		day: 1,
		category: 'ir',
		title: '2026年3月期の連結商品取扱高は？',
		choices: [
			{
				id: 'd4ad',
				text: '5,744億円',
			},
			{
				id: '25e8',
				text: '6,144億円',
			},
			{
				id: '9290',
				text: '6,660億円',
			},
			{
				id: '213b',
				text: '7,474億円',
			},
		],
	},
	{
		id: '4403',
		day: 1,
		category: 'culture',
		title: 'ZOZOの企業理念として正しいものはどれ？',
		choices: [
			{
				id: 'cac7',
				text: '世界中をカッコよく、世界中に笑顔を。',
			},
			{
				id: '0383',
				text: '世界中に笑顔を、世界中をカッコよく。',
			},
			{
				id: '3fe6',
				text: '日本中をカッコよく、世界中に笑顔を。',
			},
			{
				id: 'ab8c',
				text: '世界中をおしゃれに、世界中に笑顔を。',
			},
		],
	},
	{
		id: '7818',
		day: 1,
		category: 'creative',
		title: 'ZOZOTOWNのWebサイトのローディングで使われている「ギターマン」。正しい向きはどっち？',
		choices: [
			{
				id: 'a0e6',
				text: 'A',
				image: 'guitar_man_a.png',
				imageAlt: 'ギターマンの向きの候補A',
			},
			{
				id: '3c9b',
				text: 'B',
				image: 'guitar_man_b.png',
				imageAlt: 'ギターマンの向きの候補B',
			},
		],
	},
	{
		id: '8511',
		day: 1,
		category: 'creative',
		title: 'ZOZO NEXTが始動した、日本の伝統工芸×先端技術プロジェクト名は？',
		choices: [
			{
				id: '9666',
				text: '結色',
			},
			{
				id: '8f29',
				text: '呼色',
			},
			{
				id: '11a4',
				text: '彩色',
			},
			{
				id: '580d',
				text: '和色',
			},
		],
	},
	{
		id: '3bb9',
		day: 1,
		category: 'ios',
		title: 'ZOZOTOWN iOSアプリでフルSwiftUIで実装されている画面はどれ？',
		choices: [
			{
				id: '3848',
				text: 'ホーム',
			},
			{
				id: 'e2aa',
				text: 'お気に入り',
			},
			{
				id: 'ef8a',
				text: '探す',
			},
			{
				id: '5296',
				text: 'ランキング',
			},
			{
				id: '8697',
				text: 'マイページ',
			},
		],
	},
	{
		id: '8b75',
		day: 2,
		category: 'history',
		title: '東京証券取引所マザーズに上場したのはいつ？',
		choices: [
			{
				id: '52fa',
				text: '2005年12月',
			},
			{
				id: '0232',
				text: '2007年12月',
			},
			{
				id: 'bf9e',
				text: '2009年12月',
			},
			{
				id: '36af',
				text: '2011年12月',
			},
		],
	},
	{
		id: '9851',
		day: 2,
		category: 'service',
		title: 'かつてZOZOTOWNで誕生日を迎えたユーザーへ贈っていたプレゼントは？',
		choices: [
			{
				id: 'a840',
				text: 'オリジナルTシャツ',
			},
			{
				id: 'fded',
				text: '靴下の詰め合わせ',
			},
			{
				id: '34d6',
				text: 'ミニチュアZOZO箱',
			},
			{
				id: 'b1c1',
				text: '5千円クーポン',
			},
		],
	},
	{
		id: 'b5de',
		day: 2,
		category: 'service',
		title: '2012年創刊の、ZOZOTOWN予約販売専用雑誌の名前は？',
		choices: [
			{
				id: 'a2ba',
				text: 'ZOZOCATALOG',
			},
			{
				id: 'b99c',
				text: 'ZOZOLIBRARY',
			},
			{
				id: '1dc9',
				text: 'ZOZOCOLLE',
			},
			{
				id: 'e229',
				text: 'ZOZOGALLERY',
			},
		],
	},
	{
		id: '1301',
		day: 2,
		category: 'service',
		title:
			'フィットネス・ダイエット・ボディメイクなどのさまざまな目的に対して、ワークアウトの進捗をサポートするボディーマネジメントサービス「ZOZOFIT」が展開されている国は？',
		choices: [
			{
				id: 'c8b2',
				text: 'アメリカのみ',
			},
			{
				id: 'b4cb',
				text: 'アメリカ・カナダの2カ国',
			},
			{
				id: '180a',
				text: 'カナダ・オーストラリア・ニュージーランド・アメリカの4カ国',
			},
			{
				id: '2830',
				text: '上記に日本を加えた5カ国',
			},
		],
	},
	{
		id: '250e',
		day: 2,
		category: 'ir',
		title: 'コーポレートサイトの澤田社長の代表メッセージは？',
		image: 'president_message.jpg',
		imageAlt: '澤田社長の代表メッセージ',
		choices: [
			{
				id: '4042',
				text: '人間力を最大に',
			},
			{
				id: '4716',
				text: '変化を追い風に',
			},
			{
				id: '9744',
				text: '全員野球で',
			},
			{
				id: '490b',
				text: '変化球を投げよう',
			},
		],
	},
	{
		id: 'bf44',
		day: 2,
		category: 'creative',
		title:
			'ラグジュアリーブランドやデザイナーズブランドを取り扱うデザイナーズゾン「ZOZOVILLA」のキービジュアルを手がけたアーティストは？',
		image: 'zozovilla_keyvisual.png',
		imageAlt: 'ZOZOVILLAのキービジュアル',
		choices: [
			{
				id: '060b',
				text: '長場雄',
			},
			{
				id: '2781',
				text: '桑原優',
			},
			{
				id: 'b634',
				text: '松田健',
			},
			{
				id: '8220',
				text: 'かがみけん',
			},
		],
	},
	{
		id: '5e50',
		day: 2,
		category: 'creative',
		title:
			'提灯と看板が彩る横丁風の演出を施し、「よい服。よい酒。よい出会い。」をテーマに、飲みながらファッションを楽しめる空間「ZOZO横丁」が開催された都市は？',
		choices: [
			{
				id: 'e4d3',
				text: '福岡',
			},
			{
				id: '371a',
				text: '仙台',
			},
			{
				id: '9f1c',
				text: '名古屋',
			},
			{
				id: '3b17',
				text: '札幌',
			},
		],
	},
	{
		id: '978b',
		day: 2,
		category: 'ios',
		title: 'ZOZOTOWN iOSアプリの画像読み込みに使われているOSSは？',
		choices: [
			{
				id: 'd6d2',
				text: 'Kingfisher',
			},
			{
				id: 'c15e',
				text: 'Nuke',
			},
			{
				id: 'c4f7',
				text: 'SDWebImage',
			},
			{
				id: 'c09f',
				text: 'AlamofireImage',
			},
		],
	},
	{
		id: '93fc',
		day: 2,
		category: 'ios',
		title: 'WEARのコーディネート検索で選べる「ジャンル」は全部でいくつ？',
		choices: [
			{
				id: '435d',
				text: '3',
			},
			{
				id: 'c6c8',
				text: '12',
			},
			{
				id: 'd897',
				text: '52',
			},
			{
				id: '721e',
				text: '80',
			},
		],
	},
	{
		id: '6965',
		day: 2,
		category: 'ios',
		title: 'WEAR iOSアプリにおける行数ベースで見たSwiftの割合は？',
		choices: [
			{
				id: 'b2b9',
				text: '約43%',
			},
			{
				id: '65bd',
				text: '約57%',
			},
			{
				id: 'fe87',
				text: '約92%',
			},
			{
				id: '1de3',
				text: '約100%',
			},
		],
	},
] satisfies PublicQuestion[];

export function getQuestionsForDay(day: Day, limit = 10): PublicQuestion[] {
	return QUESTIONS.filter((question) => question.day === day).slice(0, limit);
}
