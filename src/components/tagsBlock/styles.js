import styled from 'styled-components'
import { labelArticle } from "../../styles/mixins"
import { btnAddTag, btnDelete } from "../../styles/mixins"

export const Title = styled.span`
  ${labelArticle}
  margin: 0;
  padding: 0;
`

export const TagsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  flex-wrap: no-wrap;
  column-gap: 15px;
`
export const BtnAddTag = styled.button`
  ${btnAddTag}
`

export const BtnDelete = styled.button`
  ${btnDelete}
`

export const styleLi = {
  width: '300px',
  padding: '8px 12px',
  fontSize: '16px'
}

