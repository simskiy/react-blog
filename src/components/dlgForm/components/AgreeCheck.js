import {useDlgFormContext} from '../state/context'
import styled from 'styled-components';
import { color } from '../../../styles/global';

const Check = styled.label`
  display: flex;
  align-items: flex-start;
  column-gap: 8px;
  & span {
    cursor: pointer;
    font-size: 14px;
    color: ${color.text};
    line-height: 22px;
    user-select: none;
    font-family: Roboto, Arial, Helvetica, sans-serif;
}
`

const AgreeCheck = () => {
  const {state, dispatch} = useDlgFormContext()

  const onAgreeCheck = () => {
    dispatch({type: 'onCheckAgree'})    
  }

  return (
    <Check>
      <input type='checkbox' checked={state.check} onChange={onAgreeCheck}/>
      <span>I agree to the processing of my personal information</span>
    </Check>
  )
}

export default AgreeCheck