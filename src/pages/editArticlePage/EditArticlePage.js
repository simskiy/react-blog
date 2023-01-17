import ArticlePage from "../articlePage/ArticlePage"
import { useEditArticleMutation, useGetArticleQuery } from "../../redux"
import { useState } from "react"
import tagsTrim from "../articlePage/trimTags"

export const EditArticlePage = ({slug}) => {
  const [editArticle, dataEditArticle] = useEditArticleMutation()
  const {data} = useGetArticleQuery(slug)

  const [title, setTitle] = useState(data.article.title)
  const [description, setDescription] = useState(data.article.description)
  const [text, setText] = useState(data.article.body)
  const [tags, setTags] = useState(data.article.tagList)


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

  return <ArticlePage
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          text={text}
          setText={setText}
          tags={tagsTrim(tags) || [' ']}
          setTags={setTags}
          data={dataEditArticle}
          onSubmit={onSubmit}
         />
}

