import styled from 'styled-components'
import { boxShadow, btnSend } from '../../styles/mixins'
import Header from '../../components/header/Header'
import ArticleTitle from '../../components/articleTitle/ArticleTitle'
import ArticleInput from '../../components/articleInput/ArticleInput'
import { useState } from 'react'
import TagsBlock from '../../components/tagsBlock/TagsBlock'
import { setUser, setMode } from '../../redux/slice'
import useStorage from '../../components/hooks/useStorage'
import {useController, useForm } from 'react-hook-form'

const ArticleForm = styled.form`
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

  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [text, setText] = useState(null)
  const [tags, setTags] = useState(tagsInit)
  useStorage(setUser, setMode)
  const { 
    // register, 
    handleSubmit, 
    // watch,
    control,
    formState,
    setValue
  } = useForm({mode: 'onChange'})
  
  const isValid = formState.isValid
  

  const rulesInput = {
    required: 'Поле обязталель но к заполнению'
  }

  const onSubmit = (data) => console.log(data)
  
  return (
    <>
      <Header />
      <ArticleForm onSubmit={handleSubmit(onSubmit)}>
        <ArticleTitle />           
        <ArticleInput
          control={control}
          rules={rulesInput}
          name='title'
          label='Title'
          placeholder='Text'
          value={title}
          onChangeInput={setTitle}
          setValue={setValue}
        />
        <ArticleInput
          rules={rulesInput}
          control={control}
          name='description'
          label='Short Descriptions'
          placeholder='Desctiptions'
          value={description}
          onChangeInput={setDescription}
          setValue={setValue}
        />
        <ArticleInput
          rules={rulesInput}
          control={control}
          name='text'
          label='Text'
          placeholder='Text'
          value={text}
          type='textArea'
          onChangeInput={setText}
          setValue={setValue}
        />
        <TagsBlock
          name='tag'
          tags={tags} 
          setTags={setTags}
          control={control}
        />
        <BtnSend
          type='submit'
          isValid={isValid}
        >Send</BtnSend>
      </ArticleForm>
    </>
  )
}

export default ArticlePage