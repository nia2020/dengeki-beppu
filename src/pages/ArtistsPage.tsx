import { ARTIST_SCHEDULE } from '../data/artistSchedule'
import { assetUrl } from '../lib/assetUrl'

export function ArtistsPage() {
  return (
    <main>
      <section className="section section--artists">
        <div className="section__inner">
          <h1 className="section__title">
            <span className="section__title-en">ARTISTS</span>
            <span className="section__title-ja">出演アーティスト</span>
          </h1>

          <nav className="artist-jump" aria-label="日程ごとの出演者へ">
            <ul className="artist-jump__list">
              {ARTIST_SCHEDULE.map((day) => (
                <li key={day.id}>
                  <a href={`#artist-block-${day.id}`} className="artist-jump__link">
                    {day.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="artist-days artist-days--stacked">
            {ARTIST_SCHEDULE.map((day) => (
              <section
                key={day.id}
                id={`artist-block-${day.id}`}
                className="artist-day artist-day--block"
                aria-labelledby={`artist-day-heading-${day.id}`}
              >
                <h2 className="artist-day__heading" id={`artist-day-heading-${day.id}`}>
                  {day.sectionHeading}
                </h2>
                <ul className="artist-list artist-list--vertical">
                  {day.artists.map((a, index) => (
                    <li key={`${day.id}-${index}`}>
                      <article className="artist-entry">
                        <div className="artist-entry__visual">
                          {a.image ? (
                            <img
                              className="artist-entry__img"
                              src={assetUrl(a.image)}
                              alt=""
                              loading="lazy"
                              width={1200}
                              height={800}
                            />
                          ) : (
                            <div className="artist-entry__placeholder" aria-hidden="true" />
                          )}
                        </div>
                        <div className="artist-entry__body">
                          <h3 className="artist-entry__name">{a.name}</h3>
                          {a.note ? <p className="artist-entry__note">{a.note}</p> : null}
                        </div>
                      </article>
                    </li>
                  ))}
                  {day.showMoreComing ? (
                    <li>
                      <article className="artist-entry artist-entry--tba">
                        <div className="artist-entry__body">
                          <h3 className="artist-entry__name">To be announced</h3>
                          <p className="artist-entry__note">随時発表予定</p>
                        </div>
                      </article>
                    </li>
                  ) : null}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
