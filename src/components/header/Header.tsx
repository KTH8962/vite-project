import styles from '@components/header/Hader.module.scss'
import { useRecoilValue } from 'recoil'
import { menuLink } from '@/store/selectors/menuLink'

function Header() {
  const linkArray = useRecoilValue(menuLink)
  return (
    <header className={styles.header}>
      <nav>{linkArray}</nav>
    </header>
  )
}

export default Header
