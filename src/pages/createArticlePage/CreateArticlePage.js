import { useCreateArticleMutation } from '../../redux'
import ArticlePage from '../articlePage/ArticlePage'
import { useState } from 'react'
import tagsTrim from '../articlePage/trimTags'

export const CreateArticlePage = () => {
  
  const [createArticle, data] = useCreateArticleMutation()
 
  const [title, setTitle] = useState(null)
  const [description, setDescription] = useState(null)
  const [text, setText] = useState(null)
  const [tags, setTags] = useState([''])

  const onSubmit = async() => {
    const result = {
      "article": {
        "title": title,
        "description": description,
        "body": text,
        "tagList": tagsTrim(tags)
      }
    }
    
    await createArticle(result)
  }

  return <ArticlePage
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          text={text}
          setText={setText}
          tags={tags}
          setTags={setTags}
          data={data}
          onSubmit={onSubmit}
        />
}
