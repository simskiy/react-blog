// @ts-ignore
import styles from './post.module.scss';
import ReactMarkdown from "react-markdown";
import {format} from 'date-fns';

const post = {
      "slug": "novaya-statya-kj5hhl",
      "title": "Новая статья!!!",
      "description": "Тут описание:)",
      "body": "## Заголовок статьи\n```js\nconst a = 2 + 4;\n```",
      "createdAt": "2022-12-15T15:54:16.565Z",
      "updatedAt": "2022-12-15T16:10:28.480Z",
      "tagList": [
        "js",
        "jsx",
        "css"
      ],
      "favorited": false,
      "favoritesCount": 12,
      "author": {
        "username": "bublik222",
        "image": "https://i.ytimg.com/vi/P9ZHhtutPxw/hqdefault.jpg",
        "following": false
      }
    }



export default function Post() {
  return (
    <div className={styles.post}>
      <header className={styles.header}>
        <h2 className={styles.title}>{post.title}</h2>
        <span className={styles.like}>{post.favoritesCount}</span>
      </header>
      
      <Author author={post.author}/>
      <ul className={styles.tags}>
          {post.tagList.map(item => (<li className={styles.tag}>{item}</li>))}
      </ul>
      <p className={styles.description}>{post.description}</p>
      <div className={styles.text}>
          <ReactMarkdown children={post.body} />
      </div>
    </div>
  )
}

const Author = (props) => {
  const date = new Date(post.createdAt)
  return (
    <div className={styles.author}>
      <img className={styles.img} src={props.author.image} alt="аватар" width={45}/>
      <span className={styles.name}>{props.author.username}</span>
      <span className={styles.date}>{format(date, 'LLLL c, yyyy ' )}</span>
    </div>
  )
}