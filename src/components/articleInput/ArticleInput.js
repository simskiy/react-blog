import styled from 'styled-components'
// import { inputArticle } from '../../styles/mixins'
import { labelArticle } from '../../styles/mixins'
import { Input } from 'antd'
import ErrorsMsg from '../dlgForm/components/ErrorsMsg'
import { useController } from 'react-hook-form'

// const {TextArea} = Input

const LabelArticle = styled.label`
  ${labelArticle}
`
const ArticleInput = (props) => {
  const {
    value,
    label, 
    type, 
    control, 
    name, 
    rules, 
    onChangeInput,
    setValue, 
    ...rest
  } = props 

  const {field, fieldState} = useController({
    control,
    name,
    rules,
  })

  // setValue(name, value)

  const getInput = (type) => {
    if (type === 'textArea') {
      return (
        <Input.TextArea
          // value={field.value}
          name={name}
          value={value}
          autoSize={{ minRows: 10 }} 
          style={{marginTop: '5px'}}
          onChange={(e) => {
            field.onChange(e.target.value)
            field.onBlur(e.target.value)
            onChangeInput(e.target.value)
          }}
          {...rest} 
        />
      )
    } else return (
      <Input
        // value={field.value}
        name={name}
        value={value}
        style={{height: '40px', marginTop: '5px'}}
        onChange={(e) => {
          field.onChange(e.target.value)
          field.onBlur(e.target.value)
          onChangeInput(e.target.value)
        }}
        {...rest}
      />
    )
  }

  const content = getInput(type)
  
  return (
    <>
      <LabelArticle>
        {label}
        {content}
        <ErrorsMsg msg={fieldState?.error?.message} />
      </LabelArticle>
      
    </>
  )
}



export default ArticleInput