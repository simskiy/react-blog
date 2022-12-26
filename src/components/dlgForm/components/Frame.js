import styled from "styled-components"
import { color } from "../../../styles/global"

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  row-gap: 12px;
  padding: 0;
  padding-top: 50px;
  & legend {
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: ${color.text};
  }
`

const Frame = ({children, title}) => {
  return (
    <Fieldset>
      <legend>{title} </legend>
      {children}
    </Fieldset>
  )
}

export default Frame