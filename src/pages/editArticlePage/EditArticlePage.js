import ArticlePage from "../articlePage/ArticlePage"
import { useEditArticleMutation, useGetArticleQuery } from "../../redux"
import { useEffect, useState } from "react"
// import tagsTrim from "../articlePage/trimTags"

export const EditArticlePage = ({slug}) => {
  const {data, isLoading, isSuccess} = useGetArticleQuery(slug) 
  const [editArticle, dataEditArticle] = useEditArticleMutation()
  
  const [title, setTitle] = useState(data?.article?.title)
  const [description, setDescription] = useState(data?.article?.description)
  const [text, setText] = useState(data?.article?.body)
  const [tags, setTags] = useState(data?.article?.tagList)

  const onSubmit = async() => {
    const result = {
      body: {
        "article": {
          "title": title,
          "description": description,
          "body": text,
          "tagList": tags
        }
      },
      slug: slug       
    }
    await editArticle(result)
  }

  useEffect(() => {
    if (data) {
      setTitle(data.article.title)
      setDescription(data.article.description)
      setText(data.article.body)
      setTags(data.article.tagList)
    }    
  },[data])

  return <ArticlePage
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          text={text}
          setText={setText}
          tags={tags || [' ']}
          setTags={setTags}
          data={dataEditArticle}
          onSubmit={onSubmit}
         />
}

