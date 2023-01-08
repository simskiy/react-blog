import styled from 'styled-components'
// import { inputArticle } from '../../styles/mixins'
import { labelArticle } from '../../styles/mixins'
import { Input } from 'antd'

// const {TextArea} = Input

const LabelArticle = styled.label`
  ${labelArticle}
`
const ArticleInput = ({label, type,  ...props}) => {

  return (
    <LabelArticle>
      {label}
      {
        type==='textArea' ?
          <Input.TextArea 
            autoSize={{ minRows: 10 }} 
            style={{marginTop: '5px'}} 
            {...props} 
          /> :
          <Input
            style={{height: '40px', marginTop: '5px'}}
            {...props}
          />
      }
    </LabelArticle>    
  )
}

export default ArticleInput