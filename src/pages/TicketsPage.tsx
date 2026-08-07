import { useEffect, useState } from 'react'

const TICKET_PRICES = [
  { type: 'スタンディング', price: '9,500円（税込）' },
  { type: '指定席', price: '9,500円（税込）' },
  { type: 'スタンディング 2日券', price: '18,000円（税込）' },
  { type: '指定席 2日券', price: '18,000円（税込）' },
  { type: 'U-18 スタンディング', price: '6,500円（税込）' },
  { type: 'U-18 指定席', price: '6,500円（税込）' },
  { type: 'U-18 スタンディング 2日券', price: '12,000円（税込）' },
  { type: 'U-18 指定席 2日券', price: '12,000円（税込）' },
] as const

const LOCAL_TICKET_PRICES = [
  {
    type: 'スタンディング',
    regular: '9,500円',
    local: '9,000円',
  },
  {
    type: '指定席',
    regular: '9,500円',
    local: '9,000円',
  },
  {
    type: 'U-18 スタンディング',
    regular: '6,500円',
    local: '6,000円',
  },
  {
    type: 'U-18 指定席',
    regular: '6,500円',
    local: '6,000円',
  },
] as const

const TICKET_TABS = [
  { id: 'ticket-price', label: '料金' },
  { id: 'ticket-local', label: '別府大分割' },
] as const

type TicketTabId = (typeof TICKET_TABS)[number]['id']

function scrollToSection(id: TicketTabId) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth',
    block: 'start',
  })
  history.replaceState(null, '', `#${id}`)
}

export function TicketsPage() {
  const [activeTab, setActiveTab] = useState<TicketTabId>('ticket-price')

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '') as TicketTabId
    if (TICKET_TABS.some((tab) => tab.id === hash)) {
      setActiveTab(hash)
      requestAnimationFrame(() => scrollToSection(hash))
    }
  }, [])

  useEffect(() => {
    const sections = TICKET_TABS.map((tab) => document.getElementById(tab.id)).filter(
      (el): el is HTMLElement => el != null,
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        const top = visible[0]
        if (top?.target.id) {
          setActiveTab(top.target.id as TicketTabId)
        }
      },
      {
        rootMargin: '-40% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )

    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <main>
      <nav className="page-tabs" aria-label="チケットページ内ナビゲーション">
        <ul className="page-tabs__list">
          {TICKET_TABS.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <li key={tab.id}>
                <a
                  href={`#${tab.id}`}
                  className={`page-tabs__link${isActive ? ' page-tabs__link--active' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={(event) => {
                    event.preventDefault()
                    setActiveTab(tab.id)
                    scrollToSection(tab.id)
                  }}
                >
                  {tab.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <section className="section section--muted">
        <div className="section__inner">
          <h1 className="section__title">
            <span className="section__title-en">TICKETS</span>
            <span className="section__title-ja">チケット</span>
          </h1>

          <div id="ticket-price" className="ticket-price">
            <div className="ticket-price__table-wrap">
              <table className="ticket-price__table">
                <thead>
                  <tr>
                    <th scope="col">チケット種別</th>
                    <th scope="col">料金</th>
                  </tr>
                </thead>
                <tbody>
                  {TICKET_PRICES.map((row) => (
                    <tr key={row.type}>
                      <th scope="row">{row.type}</th>
                      <td>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ticket-price__note">
              ※小学生以上有料／未就学児は保護者同伴に限り保護者1名につき1名のみ入場可
            </p>

            <div className="ticket-price__guide">
              <p>
                前方でライブを楽しみたい方はスタンディングをご購入ください。ゆっくり座ってご覧になりたい方は指定席をご購入ください。
              </p>
              <ul className="ticket-price__guide-notes">
                <li>
                  ※指定席をご購入のお客様は、スタンディングエリアでのご鑑賞はできません。
                </li>
                <li>
                  ※スタンディングエリア内には、安心してご観覧いただけるセーフティーエリアを設置予定です。
                </li>
              </ul>
            </div>
          </div>

          <div id="ticket-local" className="ticket-local">
            <h2 className="ticket-local__title">別府大分割チケット</h2>

            <dl className="ticket-local__meta">
              <div className="ticket-local__meta-row">
                <dt>発売期間</dt>
                <dd>8/10(月)〜8/21(金) ※平日のみ</dd>
              </div>
              <div className="ticket-local__meta-row">
                <dt>発売時間</dt>
                <dd>10:00〜15:00</dd>
              </div>
              <div className="ticket-local__meta-row">
                <dt>発売場所</dt>
                <dd>ビーコンプラザ 事務局 受付（1F）</dd>
              </div>
            </dl>

            <p className="ticket-local__caption">
              1日券（5/22(土)・5/23(日)）料金　※すべて税込
            </p>

            <div className="ticket-price__table-wrap">
              <table className="ticket-price__table ticket-price__table--local">
                <thead>
                  <tr>
                    <th scope="col">チケット種別</th>
                    <th scope="col">通常価格</th>
                    <th scope="col">別府大分割</th>
                  </tr>
                </thead>
                <tbody>
                  {LOCAL_TICKET_PRICES.map((row) => (
                    <tr key={row.type}>
                      <th scope="row">{row.type}</th>
                      <td>{row.regular}</td>
                      <td>{row.local}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="ticket-local__notes">
              <li>※各日50枚限定／お一人様4枚まで</li>
              <li>
                ※大分県または別府市にお住まいであることが確認できる顔写真付き身分証が必要です
              </li>
              <li>※お支払いは現金のみ</li>
              <li>※U-18：18歳以下／高校生以下</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
