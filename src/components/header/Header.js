import {Image} from 'antd'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Realworld Blog</p>
      <Link to='/login'><button>Sign In</button></Link>
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