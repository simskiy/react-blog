import { Pagination} from "antd"
import { useGetArticlesListQuery} from "../../redux";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/header/Header";
import PostList from "../../components/postList/PostList";
import styled from "styled-components";
import {setUser, setMode} from '../../redux/slice'
import useStorage from "../../components/hooks/useStorage";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

function PostListPage({history, location, curPage}) {
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(curPage)
  const {data, isLoading, isError} = useGetArticlesListQuery(offset)
  
  let content = isLoading ? <h2>Loading...</h2>: <PostList data={data} />

  useStorage(setUser, setMode)

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/articles')
    }
    setOffset((page - 1) * 5)
    // setPage(getCurPage())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    history.push(`/articles?page=${page}`)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  console.log(page)
  }, [page, history])

  if (isError) content = <h2>Error!!!</h2>  

  const onChange = (curPage) => {
    setPage(curPage)
    setOffset((curPage - 1)* 5) 
  }

  return(
    <>
      <Header />
      {content}
      <Wrapper>
        <Pagination 
            onChange={onChange}
            showSizeChanger={false}
            // current={page}
            defaultCurrent={page}
            total={data?.articlesCount}
  />
      </Wrapper>
  </>
  )
}

export default withRouter(PostListPage)