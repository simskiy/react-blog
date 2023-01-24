// @ts-ignore
import styles from './post.module.scss';
import ReactMarkdown from "react-markdown";
import {format} from 'date-fns';
import { Button, Image, Popover } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import img from './NoImage.png'
import useStorage from '../hooks/useStorage';
import { setUser, setMode } from '../../redux/slice';
import { useDeleteArticleMutation, 
         useSetFavoriteMutation, 
         useDelFavoriteMutation,
       } from '../../redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useState } from 'react';

const btn = `
  cursor: pointer;
  box-sizing: border-box;
  font: inherit;
  height: 24px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 400;
  color: #595959;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
`
const BtnNo = styled.button`
  ${btn}
  border-color: #D9D9D9;
  background-color: white;
  margin-left: auto;
  margin-right: 8px;
`
const BtnYes = styled.button`
  ${btn}
  color: white;
  background-color: #1890ff;
`

const showOverview = (text, numWords) => {
  const textArr = text.split(' ')
  let out = text
  if (textArr.length > numWords) {
    out = `${textArr.slice(0, numWords).join(' ')}\u00A0`      
  }
  return out
}

const Post = ({post, singlePost=false, history}) => {
  const text = <div className={styles.text}>
                 <ReactMarkdown children={post.body} />
               </div>
  const title = <h2 className={styles.title}>{post.title}</h2>
  const link = <Link  className={styles.link} to={`articles/${post.slug}`}>{title}</Link>
  
  useStorage(setUser, setMode)
  const [open, setOpen] = useState(false);

  // console.log(post)

  const [like, setLike] = useState(post.favorited)
  const [likeCount, setLikeCount] = useState(post.favoritesCount)

  const [deleteArticle] = useDeleteArticleMutation()
  const [setFavorite] = useSetFavoriteMutation()
  const [delFavorite] = useDelFavoriteMutation()
  const username = useSelector(state => state?.reducer?.user?.username) || null
  const isUser = useSelector(state => state.reducer?.mode === 'isUser')

  const favorCount = async() => {
    setLike(!like)
    if (!like) {
      await setFavorite(post.slug)
      setLikeCount(likeCount + 1)
    } else {
      await delFavorite(post.slug)
      setLikeCount(likeCount - 1)
    }
  }

  const btnDeleteContent = () => {
    return (
      <div className={styles.deleteBlock}>
        <p className={styles.deleteText}>Are you sure to delete this article?</p>
        <BtnNo className={styles.btnNo} onClick={hide}>No</BtnNo>
        <BtnYes classname={styles.bntYes} 
                onClick={() => {
                  deleteArticle(post.slug)
                  history.push('/articles')
                }}>Yes</BtnYes>
      </div>
    )
  }

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const hide = () => {
    setOpen(false);
  };

  return (
    <div className={styles.post}>
      <header className={styles.header}>
        {singlePost?title:link}
        <div className={styles.like}
          onClick={isUser?favorCount:null}
          style={isUser? {cursor: 'pointer'}: null}
        >
          <svg className={like?styles.favorited:null} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99998 15.1099C7.7722 15.1099 7.5526 15.0273 7.38146 14.8774C6.73509 14.3123 6.11193 13.7811 5.56212 13.3126L5.55932 13.3102C3.94738 11.9365 2.55542 10.7502 1.58691 9.58167C0.504272 8.27527 0 7.03662 0 5.68347C0 4.36877 0.450805 3.15588 1.26928 2.26807C2.09753 1.36975 3.234 0.875 4.46972 0.875C5.3933 0.875 6.23912 1.16699 6.98363 1.7428C7.35936 2.03345 7.69994 2.38916 7.99998 2.80408C8.30015 2.38916 8.64061 2.03345 9.01646 1.7428C9.76097 1.16699 10.6068 0.875 11.5304 0.875C12.766 0.875 13.9026 1.36975 14.7308 2.26807C15.5493 3.15588 16 4.36877 16 5.68347C16 7.03662 15.4958 8.27527 14.4132 9.58154C13.4447 10.7502 12.0528 11.9364 10.4411 13.3099C9.89036 13.7792 9.26622 14.3112 8.61839 14.8777C8.44737 15.0273 8.22765 15.1099 7.99998 15.1099ZM4.46972 1.81226C3.49889 1.81226 2.60705 2.19971 1.95825 2.90332C1.2998 3.61755 0.937132 4.60486 0.937132 5.68347C0.937132 6.82153 1.3601 7.83936 2.30847 8.98364C3.22509 10.0897 4.58849 11.2516 6.1671 12.5969L6.17003 12.5994C6.72191 13.0697 7.34752 13.6029 7.99864 14.1722C8.65367 13.6018 9.28026 13.0677 9.83323 12.5967C11.4117 11.2513 12.775 10.0897 13.6916 8.98364C14.6399 7.83936 15.0628 6.82153 15.0628 5.68347C15.0628 4.60486 14.7002 3.61755 14.0417 2.90332C13.393 2.19971 12.5011 1.81226 11.5304 1.81226C10.8192 1.81226 10.1662 2.03833 9.5897 2.48413C9.07591 2.88159 8.718 3.38403 8.50816 3.7356C8.40025 3.91638 8.21031 4.02429 7.99998 4.02429C7.78966 4.02429 7.59972 3.91638 7.49181 3.7356C7.28209 3.38403 6.92418 2.88159 6.41027 2.48413C5.83373 2.03833 5.18078 1.81226 4.46972 1.81226Z" fill="black" fillOpacity="0.75"/>
          </svg>
          {likeCount}
        </div>
      </header>      
      <Author author={post.author} date={post.createdAt} />
      <ul className={styles.tags}>
          {post.tagList.map((item, ind) => (item && item.trim().length > 0 ? <li className={styles.tag} key={ind}>{item}</li> : null))}
      </ul>
      <div className={styles.wrapperDescription}>
        <p className={styles.description}>{showOverview(post.description, 25)}</p>
        {
        post.author.username === username && singlePost?
          <div className={styles.btnBlock}>
            <Popover placement="rightBottom" content={btnDeleteContent} trigger="click" open={open} onOpenChange={handleOpenChange}>
              <Button
                className={styles.btnDelete}                
              >Delete
              </Button>
            </Popover>
            
            <Button
              className={styles.btnEdit}
              onClick={() => {
                history.push(`/articles/${post.slug}/edit`)
              }}
            >Edit</Button>
            
          </div> :
          null
        }
      </div>
      
      {singlePost?text:null}
      
    </div>
  )
}

export function SinglePost (Component, props, displayName) {  
  const WrappedComponent = () => {    
    return <Component post={props} singlePost={true} />
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

