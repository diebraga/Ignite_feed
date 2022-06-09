import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://media.istockphoto.com/photos/fireworks-at-the-ghats-of-varanasi-on-the-occasions-of-dev-deepawali-picture-id1359314055?b=1&k=20&m=1359314055&s=170667a&w=0&h=iguMC52K0cKhki6XLldJaHmSgXaADEiEPpi3yNUbyu8="
        className={styles.cover}
      />

      <div className={styles.profile}>
        <img src="https://github.com/diebraga.png" />
        <strong>Diego Braga</strong>
        <span>Fullstack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> 
          Edit profile
        </a>
      </footer>
    </aside>
  )
}
