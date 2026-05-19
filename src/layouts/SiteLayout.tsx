import { useEffect, useState } from 'react'
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { NAV } from '../nav'

export function SiteLayout() {
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

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <header className="header">
        <div className="header__inner">
          <Link to="/" className="header__brand" onClick={closeMenu}>
            <img
              className="header__brand-logo"
              src="/dengekibeppu_logo.png"
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
              {NAV.map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    end={path === '/'}
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
            <img src="/dengekibeppu_logo.png" alt="" width={200} height={116} loading="lazy" />
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} Dengeki Beppu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
