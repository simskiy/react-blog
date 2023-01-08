import ArticleInput from "../articleInput/ArticleInput"
import {Title, TagsWrapper, Item, styleLi, BtnAddTag, BtnDelete} from './styles'
import { useController } from "react-hook-form"
const TagsBlock = (props) => {
  const {
    control,
    name,
    tags,
    ...rest
  } = props

  const {field, fieldState} = useController({
    control,
    name,
    // rules,
  })

  return (
    <div>
      <Title>Tags</Title>
      <TagsWrapper {...rest}>
        {tags.map((item, ind) => (
          <Item key={item}>
            <ArticleInput
              control={control}
              value={item}
              style={styleLi}
              name={name}
              onChange={(e) => {
                field.onChange(e.target.value)
              }}
            />
            {
              (ind > 0 && tags.length > 0) && <BtnDelete 
                type='button'
                onClick={() => console.log('delete')}
              >Delete</BtnDelete>
            }
            {
              (ind === (tags.length - 1) || ind!==0) && <BtnAddTag
                type='button'
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