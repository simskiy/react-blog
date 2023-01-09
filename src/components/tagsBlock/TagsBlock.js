import ArticleInput from "../articleInput/ArticleInput"
import {Title, TagsWrapper, Item, styleLi, BtnAddTag, BtnDelete} from './styles'
import { useController } from "react-hook-form"
const TagsBlock = (props) => {
  const {
    control,
    name,
    tags,
    onChangeInput,
    onDeleteTag,
    onAddTag,
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
          <Item key={ind}>
            <ArticleInput
              placeholder='Tag'
              control={control}
              value={item}
              style={styleLi}
              name={name}
              onChange={(e) => {
                field.onChange(e.target.value)
                onChangeInput(e.target.value, ind)
              }}
            />
            {
              (ind > 0 || tags.length > 1) && <BtnDelete 
                type='button'
                onClick={() => onDeleteTag(ind)}
              >Delete</BtnDelete>
            }
            {
              (tags.length === 1 || ind === tags.length - 1) && <BtnAddTag
                type='button'
                onClick={() => {
                  if (item.trim().length > 0) {
                    const result = item.trim()
                    return onAddTag(result)
                  }                  
                }}
              >Add Tag</BtnAddTag>
            }
          </Item>
        ))}
      </TagsWrapper>
    </div>
  )
}

export default TagsBlock