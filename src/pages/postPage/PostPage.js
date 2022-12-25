import Header from "../../components/header/Header"
import Post from "../../components/post/Post"
import { WithText } from "../../components/post/Post"
import { useGetArticleQuery } from "../../redux"

const PostPage = ({slug}) => {
  const {data, isLoading} = useGetArticleQuery(slug)
  const Content = isLoading ? () => (<h2>Loagind...</h2>) : WithText(Post, data.article, '111')
  return (
    <>
      <Header />
      <Content />
    </>    
  )
}

export default PostPage