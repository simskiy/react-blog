import { Pagination} from "antd"
import { useGetArticlesListQuery } from "../../redux";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../../components/header/Header";
import PostList from "../../components/postList/PostList";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

function PostListPage(props) {
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1)
  const {data, isLoading, isError} = useGetArticlesListQuery(offset)
  let content = isLoading ? <h2>Loading...</h2>: <PostList data={data} />

  if (isError) content = <h2>Error!!!</h2>

  return(
    <>
      <Header />
      {content}
      <Wrapper>
        <Pagination 
          onChange={(page) => {
            setOffset((page - 1)* 5)
            setPage(page)
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