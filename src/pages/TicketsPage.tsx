const TICKET_PRICES = [
  { type: 'スタンディング', price: '9,500円（税込）' },
  { type: '指定席', price: '9,500円（税込）' },
  { type: 'スタンディング 2日券', price: '18,000円（税込）' },
  { type: '指定席 2日券', price: '18,000円（税込）' },
  { type: 'U-18 スタンディング', price: '6,500円（税込）' },
  { type: 'U-18 指定席', price: '6,500円（税込）' },
  { type: 'U-18 スタンディング 2日券', price: '12,000円（税込）' },
  { type: 'U-18 指定席 2日券', price: '12,000円（税込）' },
  { type: '別府大分割', price: '9,000円（税込）' },
] as const

export function TicketsPage() {
  return (
    <main>
      <section className="section section--muted">
        <div className="section__inner">
          <h1 className="section__title">
            <span className="section__title-en">TICKETS</span>
            <span className="section__title-ja">チケット</span>
          </h1>

          <div className="ticket-price">
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
        </div>
      </section>
    </main>
  )
}
