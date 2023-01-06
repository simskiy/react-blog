import { Pagination} from "antd"
import { useGetArticlesListQuery} from "../../redux";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/header/Header";
import PostList from "../../components/postList/PostList";
import styled from "styled-components";
import {setUser, setMode} from '../../redux/slice'
import { useDispatch, useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

function PostListPage({history, location}) {
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const {data, isLoading, isError} = useGetArticlesListQuery(offset)
  let content = isLoading ? <h2>Loading...</h2>: <PostList data={data} />
  const dispatch = useDispatch()
  const isStateUser = useSelector(state => state.reducer.user)

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/articles')
    }

    if (sessionStorage.user && !isStateUser) {
      dispatch(setUser(JSON.parse(sessionStorage.user)))
      dispatch(setMode('isUser'))
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  if (isError) content = <h2>Error!!!</h2>

  return(
    <>
      <Header />
      {content}
      <Wrapper>
        <Pagination 
          onChange={(curPage) => {
            setPage(curPage)
            setOffset((curPage - 1)* 5)            
          }}
          showSizeChanger={false}
          current={page}
          total={data?.articlesCount}
        />
      </Wrapper>
  </>
  )
}

export default withRouter(PostListPage)