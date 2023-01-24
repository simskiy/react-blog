import Header from "../../components/header/Header"
import Post from "../../components/post/Post"
import { SinglePost } from "../../components/post/Post"
import { useGetArticleQuery } from "../../redux"

const PostPage = ({slug}) => {
  const {data, isLoading} = useGetArticleQuery(slug)
  const Content = isLoading ? () => (<h2>Loagind...</h2>) : SinglePost(Post, data.article, 'post', slug)
  return (
    <>
      <Header />
      <Content />
    </>    
  )
}

export default PostPage