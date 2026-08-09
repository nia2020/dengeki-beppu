const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=%E5%88%A5%E5%BA%9C%E3%83%93%E3%83%BC%E3%82%B3%E3%83%B3%E3%83%97%E3%83%A9%E3%82%B6&hl=ja&z=15&output=embed'

export function AccessPage() {
  return (
    <main>
      <section className="section">
        <div className="section__inner">
          <h1 className="section__title">
            <span className="section__title-en">ACCESS</span>
            <span className="section__title-ja">会場・アクセス</span>
          </h1>

          <div className="access-layout">
            <div className="access-card">
              <h2 className="access-card__name">別府ビーコンプラザ</h2>
              <address className="access-card__address">
                <p>〒874-0828</p>
                <p>大分県別府市山の手町12-1</p>
              </address>
              <p className="access-card__transit">別府駅西口から徒歩20分</p>
              <p className="access-card__note">
                詳細はビーコンプラザHPをご覧ください
              </p>
              <div className="access-card__links">
                <a
                  className="access-card__maplink"
                  href="https://www.b-conplaza.jp/access/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ビーコンプラザ アクセス
                </a>
                <a
                  className="access-card__maplink"
                  href="https://www.google.com/maps/search/?api=1&query=%E5%88%A5%E5%BA%9C%E3%83%93%E3%83%BC%E3%82%B3%E3%83%B3%E3%83%97%E3%83%A9%E3%82%B6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Googleマップで見る
                </a>
              </div>
            </div>

            <div className="access-map">
              <iframe
                className="access-map__frame"
                title="別府ビーコンプラザの地図"
                src={MAP_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
