import { Link } from 'react-router-dom'
import { useFestivalYear } from '../hooks/useFestivalYear'
import { assetUrl } from '../lib/assetUrl'
import { yearPath } from '../years'

const FIRST_ARTISTS = [
  { name: 'JUN SKY WALKER(S)', slug: 'jsw-announce' },
  { name: 'ROTTENGRAFFTY', slug: 'rottengraffty' },
  { name: '四星球', slug: 'su-xing-cyu' },
  { name: 'ハルカミライ', slug: 'haruka-mirai' },
] as const

export function HomePage() {
  const year = useFestivalYear()
  return (
    <main>
      <h1 className="visually-hidden">電撃 BEPPU 2027</h1>
      <section className="hero">
        <div className="hero__layers" aria-hidden="true">
          <img
            className="hero__photo"
            src={assetUrl('/hero-beppu.png')}
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
                  src={assetUrl('/dengekibeppu_logo.png')}
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
                  src={assetUrl('/jsw_logo_white.png')}
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
              <Link to={yearPath(year, 'tickets')} className="hero__cta">
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
          <ul className="ticket-strip__list">
            <li className="ticket-strip__item">
              <div className="ticket-strip__text">
                <p className="ticket-strip__lead">イープラス 先行予約</p>
                <p className="ticket-strip__meta">
                  8月21日（金）〜30日（日）23:59
                </p>
              </div>
              <a
                className="ticket-strip__link"
                href="https://eplus.jp/dengekibeppu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                詳細はこちら
              </a>
            </li>
            <li className="ticket-strip__item">
              <div className="ticket-strip__text">
                <p className="ticket-strip__lead">別府大分割チケット発売</p>
                <p className="ticket-strip__meta">
                  8/10(月)〜8/21(金) ※平日のみ 10:00〜15:00／ビーコンプラザ事務局
                </p>
              </div>
              <Link
                className="ticket-strip__link"
                to={`${yearPath(year, 'tickets')}#ticket-local`}
              >
                詳細はこちら
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="lineup-announce"
        aria-labelledby="lineup-announce-title"
      >
        <div className="lineup-announce__inner">
          <h2 id="lineup-announce-title" className="lineup-announce__title">
            <span className="lineup-announce__title-en">1st ARTISTS</span>
            <span className="lineup-announce__title-ja">
              第一弾出演アーティスト発表
            </span>
          </h2>
          <ul className="lineup-announce__grid">
            {FIRST_ARTISTS.map((artist) => (
              <li key={artist.slug}>
                <figure className="lineup-announce__item">
                  <img
                    className="lineup-announce__img"
                    src={assetUrl(`/artists/${artist.slug}.png`)}
                    alt={artist.name}
                    width={1000}
                    height={842}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="visually-hidden">{artist.name}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
          <p className="lineup-announce__more">and more...</p>
        </div>
      </section>

      <section className="media-news" aria-labelledby="media-news-title">
        <div className="media-news__inner">
          <h2 id="media-news-title" className="media-news__title">
            <span className="media-news__title-en">MEDIA</span>
            <span className="media-news__title-ja">メディア出演</span>
          </h2>
          <ul className="media-news__list">
            <li className="media-news__item">
              <p className="media-news__date">8/18(火)</p>
              <div className="media-news__body">
                <p className="media-news__guest">森純太</p>
                <p className="media-news__outlet">OBS 大分放送</p>
                <p className="media-news__program">おはようナイスキャッチ</p>
                <p className="media-news__slot">9:55-10:20 生出演</p>
              </div>
            </li>
            <li className="media-news__item">
              <p className="media-news__date">8/18(火)</p>
              <div className="media-news__body">
                <p className="media-news__guest">森純太</p>
                <p className="media-news__outlet">OBSラジオ 大分放送</p>
                <p className="media-news__program">情熱ライブ！Voice</p>
                <p className="media-news__slot">16時台 生出演</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
