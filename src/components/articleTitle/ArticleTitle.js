import styled from 'styled-components'
import { titleArticle } from '../../styles/mixins'

const TitleWrapper = styled.h1`
  ${titleArticle}
`

const ArticleTitle = () => {
  return (
    <TitleWrapper>
      Create new article
    </TitleWrapper>
  ) 
}

export default ArticleTitle