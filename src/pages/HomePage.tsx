import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <main>
      <h1 className="visually-hidden">電撃 BEPPU 2027</h1>
      <section className="hero">
        <div className="hero__layers" aria-hidden="true">
          <img
            className="hero__photo"
            src="/hero-beppu.png"
            alt=""
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="hero__photo-scrim" />
        </div>

        <div className="hero__lightning" aria-hidden="true">
          <div className="hero__lightning-flash" />
          <svg
            className="hero__bolt hero__bolt--1"
            viewBox="0 0 100 210"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(248, 252, 255, 0.96)"
              d="M52 3 L30 76 L46 70 L16 208 L58 84 L38 88 L66 3 Z"
            />
          </svg>
          <svg
            className="hero__bolt hero__bolt--2"
            viewBox="0 0 100 210"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(235, 248, 255, 0.92)"
              d="M58 6 L34 82 L50 76 L20 205 L62 90 L44 94 L68 6 Z"
            />
          </svg>
          <svg
            className="hero__bolt hero__bolt--3"
            viewBox="0 0 100 210"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(248, 252, 255, 0.9)"
              d="M48 2 L26 74 L42 68 L14 212 L56 86 L36 90 L64 2 Z"
            />
          </svg>
        </div>

        <div className="hero__foreground">
          <div className="hero__intro">
            <div className="hero__intro-inner">
              <div className="hero__logo-buzz">
                <img
                  src="/dengekibeppu_logo.png"
                  alt="電撃 BEPPU 2027"
                  className="hero__logo"
                  width={2000}
                  height={1164}
                />
              </div>
            </div>
          </div>

          <div className="hero__scene">
            <div className="hero__scene-inner">
              <div className="hero__presenter">
                <img
                  src="/jsw_logo_white.png"
                  alt="JUN SKY WALKER(S)"
                  className="hero__presenter-logo"
                  width={1500}
                  height={180}
                  loading="lazy"
                  decoding="async"
                />
                <p className="hero__presents">
                  <span className="hero__presents-word">Presents</span>
                </p>
              </div>
              <p className="hero__date">
                2027年5月22日<span className="hero__wd">(土)</span>
                <span className="hero__sep">・</span>
                23日<span className="hero__wd">(日)</span>
              </p>
              <p className="hero__venue">別府ビーコンプラザ</p>
              <Link to="/tickets" className="hero__cta">
                チケット情報
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ticket-strip" aria-labelledby="topics-strip-title">
        <div className="ticket-strip__inner">
          <p id="topics-strip-title" className="ticket-strip__label">
            TOPICS
          </p>
          <div className="ticket-strip__body">
            <p className="ticket-strip__lead">
              JUN SKY WALKER(S) Presents 電撃BEPPU 2027開催決定
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
