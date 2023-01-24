import { List } from "antd"
import styles from './postList.module.scss'
import Post from "../post/Post"

const PostList = ({data}) => {
  return (
    <List
        itemLayout="horizontal"
        dataSource={data.articles}
        className={styles.list}
        split={false}
        renderItem = {(item) => {
          return (<List.Item key={item.slug} className={styles.item} >
            <Post post={item} />
          </List.Item>)  
        }} 
      />    
  )
}

export default PostList