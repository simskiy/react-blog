import { List } from "antd"
import Post from "../post/Post";
// @ts-ignore
import styles from './postList.module.scss';


const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
];

export default function PostList() {
  return <List
          itemLayout="horizontal"
          dataSource={data}
          className={styles.list}
          pagination={{
            onChange: (page) => console.log(page),
            pageSize: 5,
          }}
          renderItem = {(item) => (
            <List.Item>
              <Post
              />
            </List.Item>  
          )} 
         />
}

