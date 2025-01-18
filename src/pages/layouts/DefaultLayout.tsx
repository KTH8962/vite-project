import Header from '@/components/header/Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'

function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ScrollRestoration /> {/* 스크롤 위치복원 */}
      </main>
    </>
  )
}

export default DefaultLayout
