import styled from 'styled-components'
import { boxShadow, btnSend } from '../../styles/mixins'
import Header from '../../components/header/Header'
import ArticleTitle from '../../components/articleTitle/ArticleTitle'
import ArticleInput from '../../components/articleInput/ArticleInput'
import { useEffect } from 'react'
import TagsBlock from '../../components/tagsBlock/TagsBlock'
import { setUser, setMode } from '../../redux/slice'
import useStorage from '../../components/hooks/useStorage'
import {useForm } from 'react-hook-form'
import { rulesTitle, rulesDescription, rulesText } from './rules'
import { Button } from 'antd'
import { withRouter } from 'react-router-dom'

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

const BtnSend = styled(Button)`
  ${btnSend}
`

const ArticlePage = ({
  title,
  setTitle,
  description,
  setDescription,
  text,
  setText,
  // mode='create'
  tags,
  setTags,
  data,  
  onSubmit,
  history,
}) => {  
  
  useStorage(setUser, setMode)
  const { 
    handleSubmit,                                                                                       
    control,
    formState,
    setValue,
  } = useForm({mode: 'onChange'})

  const isValid = formState.isValid
  
  const changeTag = (value, ind) => {
    setTags(tags.map((v, i) => i === ind ? value : v))
  }

  const deleteTag = (ind) => {
   setTags(tags.filter((_,i) => ind !== i))
  }

  const addTag = (value) => {
    const result = new Set([...tags.slice(0, -1), value, ''])
    setTags(Array.from(result))
  }

  useEffect(() => {
    if (data.isSuccess) {
      history.push('/articles')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.isSuccess])

  useEffect(() => {
    if (data.isError) {
      console.log(data.error)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.isError])

  useEffect(() => {
    setValue('title', title)
    setValue('description', description)
    setValue('text', text)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <Header />
      <ArticleForm onSubmit={handleSubmit(onSubmit)}>
        <ArticleTitle />           
        <ArticleInput
          control={control}
          rules={rulesTitle}
          name='title'
          label='Title'
          placeholder='Text'
          value={title}
          onChangeInput={setTitle}
          // setValue={setTitle}
          maxLength={128}
        />
        <ArticleInput
          rules={rulesDescription}
          control={control}
          name='description'
          label='Short Descriptions'
          placeholder='Desctiptions'
          value={description}
          onChangeInput={setDescription}
          // setValue={setValue}
          maxLength={512}
        />
        <ArticleInput
          rules={rulesText}
          control={control}
          name='text'
          label='Text'
          placeholder='Text'
          value={text}
          type='textArea'
          onChangeInput={setText}
          // setValue={setValue}
        />
        <TagsBlock
          // rules={rulesTags}
          name='tag'
          tags={tags = tags.length === 0 ? [''] : tags} 
          // setTags={setTags}
          control={control}
          onChangeInput={changeTag}
          onDeleteTag={deleteTag}
          onAddTag={addTag}
          maxLength={50}
        />
        <BtnSend
          type='primary'
          htmlType='submit'
          disabled={!isValid}
          // isValid={isValid}
        >Send</BtnSend>
      </ArticleForm>
    </>
  )
}

export default withRouter(ArticlePage)