import {Image} from 'antd'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'

import img from './avatar.png'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/' style={{marginRight: 'auto', textDecoration: 'none'}}><span className={styles.title}>Realworld Blog</span></Link>
        <Link to='/login'><button className={styles.btn_login}>Sign In</button></Link>
        <Link to='/create'><button className={styles.btn_create}>Sign Up</button></Link>
        <button className={styles.btn_article}>CreateArticle</button>
        <div className={styles.user}>
          <span className={styles.user_name}>John Doe</span>
          <Image alt='аватарка' className={styles.user_img} src={img}/>
        </div>
        <button className={styles.btn_logout}>Log out</button>
      </div>
    </div>
  )
}

export default Header