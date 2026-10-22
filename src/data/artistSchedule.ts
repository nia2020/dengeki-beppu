import {
  HARUKA_MIRAI_PUBLISH_AT,
  THIRD_WAVE_PUBLISH_AT,
  isReleasedAt,
} from '../lib/publishSchedule'

/** 出演アーティスト（日程ごとに編集してください） */
export type ArtistSlot = {
  name: string
  note?: string
  /** 写真を置くときは public からのパス（例: `/artists/jsw-announce.png`） */
  image?: string
  /** 五十音ソート用の読み（カタカナ）。JUN SKY WALKER(S) は先頭固定 */
  sortKey?: string
  /** この時刻以降に表示（ISO 8601）。未指定は常時表示 */
  visibleFrom?: string
  /** この時刻未満のみ表示（ISO 8601）。未指定は期限なし */
  visibleUntil?: string
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
      {
        name: 'JUN SKY WALKER(S)',
        image: '/artists/jsw.png',
        visibleUntil: THIRD_WAVE_PUBLISH_AT,
      },
      {
        name: 'JUN SKY WALKER(S)',
        image: '/artists/jsw-announce.png',
        visibleFrom: THIRD_WAVE_PUBLISH_AT,
      },
      {
        name: 'go!go!vanillas',
        image: '/artists/ggv.jpg',
        sortKey: 'ゴーゴーバニラズ',
      },
      {
        name: '四星球',
        image: '/artists/su-xing-cyu.png',
        sortKey: 'スーシンチュー',
        visibleFrom: THIRD_WAVE_PUBLISH_AT,
      },
      {
        name: 'ハルカミライ',
        image: '/artists/haruka-mirai.png',
        sortKey: 'ハルカミライ',
        visibleFrom: HARUKA_MIRAI_PUBLISH_AT,
      },
      {
        name: 'ROTTENGRAFFTY',
        image: '/artists/rottengraffty.png',
        sortKey: 'ロットングラフティー',
        visibleFrom: THIRD_WAVE_PUBLISH_AT,
      },
    ],
    showMoreComing: true,
  },
  {
    id: '2027-05-23',
    navLabel: '5/23',
    sectionHeading: '05/23.SUN',
    artists: [
      {
        name: 'JUN SKY WALKER(S)',
        image: '/artists/jsw.png',
        visibleUntil: THIRD_WAVE_PUBLISH_AT,
      },
      {
        name: 'JUN SKY WALKER(S)',
        image: '/artists/jsw-announce.png',
        visibleFrom: THIRD_WAVE_PUBLISH_AT,
      },
      {
        name: '純烈',
        image: '/artists/junretsu.png',
        sortKey: 'ジュンレツ',
        visibleFrom: THIRD_WAVE_PUBLISH_AT,
      },
      {
        name: 'FOMARE',
        image: '/artists/fomare.jpg',
        sortKey: 'フォマレ',
        visibleFrom: THIRD_WAVE_PUBLISH_AT,
      },
    ],
    showMoreComing: true,
  },
]

const HEADLINER_NAME = 'JUN SKY WALKER(S)'

function isArtistVisible(artist: ArtistSlot, nowMs: number): boolean {
  if (artist.visibleFrom && !isReleasedAt(artist.visibleFrom, nowMs)) {
    return false
  }
  if (artist.visibleUntil && isReleasedAt(artist.visibleUntil, nowMs)) {
    return false
  }
  return true
}

function sortArtists(artists: ArtistSlot[]): ArtistSlot[] {
  return [...artists].sort((a, b) => {
    const aHead = a.name === HEADLINER_NAME
    const bHead = b.name === HEADLINER_NAME
    if (aHead !== bHead) return aHead ? -1 : 1
    return (a.sortKey ?? a.name).localeCompare(b.sortKey ?? b.name, 'ja')
  })
}

export function getVisibleArtistSchedule(nowMs: number = Date.now()): ArtistDay[] {
  return ARTIST_SCHEDULE.map((day) => ({
    ...day,
    artists: sortArtists(day.artists.filter((artist) => isArtistVisible(artist, nowMs))),
  }))
}
