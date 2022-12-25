import {Image} from 'antd'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Realworld Blog</p>
      <button>Sign In</button>
      <Link to='/create'><button>Sign Up</button></Link>
      <button>CreateArticle</button>
      <div>
        <span>John Doe</span>
        <Image alt='аватарка' />
      </div>
      <button>Log out</button>
    </div>
  )
}

export default Header