import styled from 'styled-components'
import { titleArticle } from '../../styles/mixins'

const TitleWrapper = styled.h1`
  ${titleArticle}
`

const ArticleTitle = ({title}) => {
  return (
    <TitleWrapper>
      {title}
    </TitleWrapper>
  ) 
}

export default ArticleTitle