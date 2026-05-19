export function AccessPage() {
  return (
    <main>
      <section className="section">
        <div className="section__inner">
          <h1 className="section__title">
            <span className="section__title-en">ACCESS</span>
            <span className="section__title-ja">会場・アクセス</span>
          </h1>
          <div className="access-card">
            <h2 className="access-card__name">別府ビーコンプラザ</h2>
            <p className="access-card__note">
              住所・交通アクセスの詳細は追って掲載します。
            </p>
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
      </section>
    </main>
  )
}
