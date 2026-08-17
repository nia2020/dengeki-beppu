/** 出演アーティスト（日程ごとに編集してください） */
export type ArtistSlot = {
  name: string
  note?: string
  /** 写真を置くときは public からのパス（例: `/artists/jsw.png`） */
  image?: string
}

export type ArtistDay = {
  id: string
  /** 上部ジャンプナビ用の短い表記（例: 5/22） */
  navLabel: string
  /** セクション見出し（参考: TRIANGLE の 04/25.SAT 形式） */
  sectionHeading: string
  artists: ArtistSlot[]
  /** その日の追加発表ありのとき To be announced を表示 */
  showMoreComing?: boolean
}

export const ARTIST_SCHEDULE: ArtistDay[] = [
  {
    id: '2027-05-22',
    navLabel: '5/22',
    sectionHeading: '05/22.SAT',
    artists: [
      { name: 'JUN SKY WALKER(S)', image: '/artists/jsw.png' },
    ],
    showMoreComing: true,
  },
  {
    id: '2027-05-23',
    navLabel: '5/23',
    sectionHeading: '05/23.SUN',
    artists: [
      { name: 'JUN SKY WALKER(S)', image: '/artists/jsw.png' },
    ],
    showMoreComing: true,
  },
]
