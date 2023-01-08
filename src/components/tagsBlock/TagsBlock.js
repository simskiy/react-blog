import ArticleInput from "../articleInput/ArticleInput"
import {Title, TagsWrapper, Item, styleLi, BtnAddTag, BtnDelete} from './styles'

const TagsBlock = ({tags, ...props}) => {
  return (
    <div>
      <Title>Tags</Title>
      <TagsWrapper {...props}>
        {tags.map((item, ind) => (
          <Item key={item}>
            <ArticleInput 
              value={item}
              style={styleLi}
            />
            {
              (ind > 0 || tags.length > 0) && <BtnDelete 
                onClick={() => console.log('delete')}
              >Delete</BtnDelete>
            }
            {
              (ind === (tags.length - 1) && ind!==0) && <BtnAddTag
                onClick={() => console.log('add')}
              >Add Tag</BtnAddTag>
            }
          </Item>
        ))}
      </TagsWrapper>
    </div>
  )
}

export default TagsBlock