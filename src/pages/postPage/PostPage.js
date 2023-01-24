import Header from "../../components/header/Header"
import Post from "../../components/post/Post"
import { SinglePost } from "../../components/post/Post"
import { useGetArticleQuery } from "../../redux"
import Error from "../../components/error/Error"

const PostPage = ({slug}) => {
  const {data, isLoading, isError, error} = useGetArticleQuery(slug)
  if (isLoading) return <h2>Loading...</h2>                            
  if (isError) return (<Error 
                        code={error.originalStatus}
                        msg='Извините, данная страница не доступна'
                      />)
  const Content = SinglePost(Post, data.article, 'post', slug)
  return (
          <>
            <Header />
            <Content />
          </>
  )  
}

export default PostPage