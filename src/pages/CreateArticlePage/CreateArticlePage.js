import { useCreateArticleMutation } from '../../redux'
import ArticlePage from '../articlePage/ArticlePage'

export const CreateArticlePage = () => {
  
//   // const Page = Article = (props) => {
//     const [createArticle, data] = useCreateArticleMutation()
    
//   const onSubmit = async() => {
//     const lastItem = tags[tags.length - 1]
//     let tagsArr = tags
//                                                                                                                                                          if (lastItem.trim().length === 0) {
//       tagsArr = tags.slice(0,-1)
//     } 
//     const result = {
//       "article": {
//         "title": title,
//         "description": description,
//         "body": text,
//         "tagList": tagsArr
//       }
//     }
//     await createArticle(result)
//   }
//   const Page = (<ArticlePage 
//                   initTitle={'Create new article'}
//                   data={data}
//                   onSubmit={onSubmit}
//                 />)
//   return Page
  return <ArticlePage />
}
 


