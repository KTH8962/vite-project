import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import Router from '@/pages/Index.tsx'

createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <Router />
  </RecoilRoot>
)
