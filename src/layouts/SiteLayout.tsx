import { useEffect, useState } from 'react'
import { NavLink, Outlet, Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { assetUrl } from '../lib/assetUrl'
import { NAV } from '../nav'
import { isFestivalYear, LATEST_YEAR, yearPath } from '../years'

export function SiteLayout() {
  const { year: yearParam } = useParams<{ year: string }>()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 900px)').matches) setMenuOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  if (!yearParam || !isFestivalYear(yearParam)) {
    return <Navigate to={`/${LATEST_YEAR}`} replace />
  }

  const year = yearParam

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className="header">
        <div className="header__inner">
          <Link to={yearPath(year)} className="header__brand" onClick={closeMenu}>
            <img
              className="header__brand-logo"
              src={assetUrl('/dengekibeppu_logo.png')}
              alt="電撃 BEPPU 2027"
              width={280}
              height={163}
            />
          </Link>
          <button
            type="button"
            className="header__burger"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="header__burger-lines" />
            <span className="visually-hidden">メニュー</span>
          </button>
          <nav
            id="site-nav"
            className={`nav ${menuOpen ? 'nav--open' : ''}`}
            aria-label="メインナビゲーション"
          >
            <ul className="nav__list">
              {NAV.map(({ segment, label }) => (
                <li key={segment || 'home'}>
                  <NavLink
                    to={yearPath(year, segment)}
                    end={segment === ''}
                    className={({ isActive }) =>
                      isActive ? 'nav__link nav__link--active' : 'nav__link'
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="site-content">
        <Outlet />
      </div>

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <img src={assetUrl('/dengekibeppu_logo.png')} alt="" width={200} height={116} loading="lazy" />
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} Dengeki Beppu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
