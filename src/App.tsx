import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/HomePage'
import { ArtistsPage } from './pages/ArtistsPage'
import { TicketsPage } from './pages/TicketsPage'
import { AccessPage } from './pages/AccessPage'
import { GoodsPage } from './pages/GoodsPage'
import { AreamapPage } from './pages/AreamapPage'
import { GuidelinePage } from './pages/GuidelinePage'
import { TimetablePage } from './pages/TimetablePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="artists" element={<ArtistsPage />} />
          <Route path="tickets" element={<TicketsPage />} />
          <Route path="access" element={<AccessPage />} />
          <Route path="goods" element={<GoodsPage />} />
          <Route path="areamap" element={<AreamapPage />} />
          <Route path="guideline" element={<GuidelinePage />} />
          <Route path="timetable" element={<TimetablePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
