import { useEffect, useMemo, useState } from 'react'
import { getVisibleArtistSchedule } from '../data/artistSchedule'
import { useIsReleased } from '../hooks/useIsReleased'
import { assetUrl } from '../lib/assetUrl'
import { THIRD_WAVE_PUBLISH_AT } from '../lib/publishSchedule'

function blockId(dayId: string) {
  return `artist-block-${dayId}`
}

export function ArtistsPage() {
  const thirdWaveReleased = useIsReleased(THIRD_WAVE_PUBLISH_AT)
  const schedule = useMemo(
    () => getVisibleArtistSchedule(),
    [thirdWaveReleased],
  )
  const defaultBlockId = blockId(schedule[0]?.id ?? '')
  const [activeBlockId, setActiveBlockId] = useState(defaultBlockId)

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace(/^#/, '')
      if (hash && schedule.some((day) => blockId(day.id) === hash)) {
        setActiveBlockId(hash)
        return
      }
      setActiveBlockId(defaultBlockId)
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [defaultBlockId, schedule])

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
              {schedule.map((day) => {
                const weekday = day.sectionHeading.split('.')[1] ?? ''
                const isActive = activeBlockId === blockId(day.id)
                return (
                  <li key={day.id}>
                    <a
                      href={`#${blockId(day.id)}`}
                      className={`artist-jump__link${isActive ? ' artist-jump__link--active' : ''}`}
                      aria-current={isActive ? 'location' : undefined}
                    >
                      <span className="artist-jump__date">{day.navLabel}</span>
                      {weekday ? (
                        <span className="artist-jump__weekday">{weekday}</span>
                      ) : null}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="artist-days artist-days--stacked">
            {schedule.map((day) => (
              <section
                key={day.id}
                id={blockId(day.id)}
                className="artist-day artist-day--block"
                aria-labelledby={`artist-day-heading-${day.id}`}
              >
                <h2 className="artist-day__heading" id={`artist-day-heading-${day.id}`}>
                  {day.sectionHeading}
                </h2>
                <ul className="artist-list artist-list--vertical">
                  {day.artists.map((a, index) => (
                    <li key={`${day.id}-${a.name}-${index}`}>
                      <article className="artist-entry">
                        <div className="artist-entry__visual">
                          {a.image ? (
                            <img
                              className="artist-entry__img"
                              src={assetUrl(a.image)}
                              alt={a.name}
                              loading="lazy"
                              width={1000}
                              height={842}
                            />
                          ) : (
                            <div className="artist-entry__placeholder" aria-hidden="true" />
                          )}
                        </div>
                        {!a.image || a.note ? (
                          <div className="artist-entry__body">
                            {!a.image ? (
                              <h3 className="artist-entry__name">{a.name}</h3>
                            ) : null}
                            {a.note ? (
                              <p className="artist-entry__note">{a.note}</p>
                            ) : null}
                          </div>
                        ) : null}
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
