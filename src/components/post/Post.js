// @ts-ignore
import styles from './post.module.scss';
import ReactMarkdown from "react-markdown";
import {format} from 'date-fns';
import { Button, Image } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import img from './NoImage.png'
import useStorage from '../hooks/useStorage';
import { setUser, setMode } from '../../redux/slice';
import { useDeleteArticleMutation } from '../../redux';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { EditArticlePage } from '../../pages/editArticlePage/EditArticlePage';

const showOverview = (text, numWords) => {
  const textArr = text.split(' ')
  let out = text
  if (textArr.length > numWords) {
    out = `${textArr.slice(0, numWords).join(' ')}\u00A0`      
  }
  return out
}

const Post = ({post, showText=false, history}) => {
  const text = <div className={styles.text}>
                 <ReactMarkdown children={post.body} />
               </div>
  const title = <h2 className={styles.title}>{post.title}</h2>
  const link = <Link  className={styles.link} to={`articles/${post.slug}`}>{title}</Link>
  
  useStorage(setUser, setMode)

  const [deleteArticle] = useDeleteArticleMutation()
  const username = useSelector(state => state?.reducer?.user?.username) || null
 
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        {showText?title:link}      
        <span className={styles.like}>{post.favoritesCount}</span>
      </header>
      
      <Author author={post.author} date={post.createdAt} />
      <ul className={styles.tags}>
          {post.tagList.map((item, ind) => (item && item.trim().length > 0 ? <li className={styles.tag} key={ind}>{item}</li> : null))}
      </ul>
      <div className={styles.wrapperDescription}>
        <p className={styles.description}>{showOverview(post.description, 25)}</p>
        {
        post.author.username === username?
          <div className={styles.btnBlock}>
            <Button
              onClick={() => {
                deleteArticle(post.slug)
                history.push('/articles')
              }}
            >Delete
            </Button>
            
            <Button
              onClick={() => {
                history.push(`/articles/${post.slug}/edit`)
              }}
            >Edit</Button>
            
          </div> :
          null
        }
      </div>
      
      {showText?text:null}
      
    </div>
  )
}

export function WithText (Component, props, displayName) {
  const WrappedComponent = () => {
    return <Component post={props} showText={true} />
  }
  WrappedComponent.displayName = displayName
  return WrappedComponent
}


const Author = (props) => {
  const date = new Date(props.date)
  return (
    <div className={styles.author}>
      <Image 
        className={styles.img}
        src={props.author.image}
        fallback={img}
        alt='аватар'
        width={45}
      />
      <span className={styles.name}>{props.author.username}</span>
      <span className={styles.date}>{format(date, 'LLLL c, yyyy ' )}</span>
    </div>
  )
}

export default withRouter(Post)