import {Image} from 'antd'
import styles from './header.module.scss'
import { Link, withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setUser, setMode } from '../../redux/slice'
import img from './avatar.png'

const Header = ({history}) => {
  const mode = useSelector(state => state.reducer.mode)
  const currentUser = useSelector(state => state.reducer.user)
  const dispatch = useDispatch()
  const avatarImage = currentUser?.image

  const getContent = (mode) => {
    switch(mode) {
      case 'isGuest': return [loginButton, createButton]
      case 'isUser': return [createArticle, user, logOut]
      default: return null
    }
  }

  const logout = () => {
    dispatch(setUser(null))
    dispatch(setMode('isGuest'))
    sessionStorage.removeItem('user')
    history.push('/articles')
  }

  const loginButton = <Link key='login' to='/sign-in'><button className={styles.btn_login}>Sign In</button></Link>
  const createButton = <Link key='create' to='/sign-up'><button className={styles.btn_create}>Sign Up</button></Link>
  const createArticle = <Link key='article' to='/new-article'><button  className={styles.btn_article}>CreateArticle</button></Link>
  const user = (<div className={styles.user} key='user'>
                  <Link to='/profile'>
                    <span className={styles.user_name}>{currentUser?.username}</span>
                  </Link>
                  <Link to='/profile'>
                    <Image 
                      alt='аватар' 
                      className={styles.user_img} 
                      src={avatarImage || img}
                      // fallback={img}
                      width={45}
                    />
                  </Link>
                </div>)
  const logOut = <button key='logout' onClick={logout} className={styles.btn_logout}>Log out</button>

  const content = getContent(mode)
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Link to='/articles' style={{marginRight: 'auto', textDecoration: 'none'}}><span className={styles.title}>Realworld Blog</span></Link>        
        {content}        
      </div>
    </div>
  )
}



export default withRouter(Header)