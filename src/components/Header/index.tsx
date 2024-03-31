import styles from './header.module.css'

import logo from '../../assets/Logo.png'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Logo De um foguete escrito todo" />
    </header>
  )
}
