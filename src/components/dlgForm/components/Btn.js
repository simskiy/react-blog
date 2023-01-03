import {useDlgFormContext} from '../state/context'
import styled from 'styled-components';
import { color } from '../../../styles/global';
import PropTypes from 'prop-types'

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  display: flex;
  background-color: ${color.info};
  height: 40px;
  width: 100%;
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  justify-content: space-around;
  align-items: center;
  outline: 0;
  border: none;
  border-radius: 4px;
  margin-top: 20px;
  &:active {
    transform: translate(-2px, -2px);
  }
  &:disabled {
    background-color: ${color.inputBorder};
    &:active {
      transform: none;
    }
  }
`

const Btn = ({label, getData}) => {
  const {dispatch, isValid, reset, state} = useDlgFormContext()
  const onClickSubmit = () => {
    getData(state)
    dispatch({type: 'onSubmit'})
  }

  return (
    <Button 
      type='submit' 
      disabled = {!isValid} 
      onClick={() => {
        onClickSubmit()
        reset()
      }}
    >{label}</Button>
  )
}

Btn.propTypes = {
  label: PropTypes.string,
  getData: PropTypes.func
}

export default Btn
