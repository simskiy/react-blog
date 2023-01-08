import styled from 'styled-components'
import { boxShadow, btnSend } from '../../styles/mixins'
import Header from '../../components/header/Header'
import ArticleTitle from '../../components/articleTitle/ArticleTitle'
import ArticleInput from '../../components/articleInput/ArticleInput'
import { useState } from 'react'
import TagsBlock from '../../components/tagsBlock/TagsBlock'
import { setUser, setMode } from '../../redux/slice'
import useStorage from '../../components/hooks/useStorage'
// import Input from 'antd/es/input/Input'
// import { Descriptions } from 'antd'

const ArticleWrapper = styled.div`
  ${boxShadow}
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  box-sizing: border-box;
  max-width: 940px;
  margin: auto;
  padding: 50px 30px;
  background-color: white;
`

const BtnSend = styled.button`
  ${btnSend}
`

const ArticlePage = ({
  // title='',
  // description='',
  // text='Привет от всех нас до всех вас'

}) => {
  const tagsInit = ['hello', 'mother', 'fucker']
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [text, setText] = useState('')
  const [tags, setTags] = useState(tagsInit)

  useStorage(setUser, setMode)

  return (
    <>
      <Header />
      <ArticleWrapper>      
        <ArticleTitle />
        <ArticleInput 
          label='Text'
          placeholder='Text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ArticleInput 
          label='Short Descriptions'
          placeholder='Desctiptions'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <ArticleInput 
          label='Text'
          placeholder='Text'
          value={text}
          type='textArea'
          onChange={(e) => setText(e.target.value)}
        />
        <TagsBlock tags={tags}/>
        <BtnSend
          type='submit'
        >Send</BtnSend>
      </ArticleWrapper>
    </>
    
  )
}

export default ArticlePage