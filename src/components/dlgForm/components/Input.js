// import styles from './input.module.scss'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../../../styles/global'

const InputWrapper = styled.div`
& label {
  font-size: 14px;
  color: ${color.text};
  line-height: 22px;

  & input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({error}) => error ? color.error : color.inputBorder};
  border-radius: 4px;
  padding: 8px 12px;
  font: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 24px;
  color: ${color.text};
  outline: none;
  &::placeholder {
    color: gray;
  }
}
`;

const Error = styled.span`
  color: ${color.error};
  font-size: 14px;
  font-weight: 400;
`

const Input = (props) => {
  const {
    label, 
    type, 
    placeholder, 
    autocomplete = 'off',
    value,
    onChangeInput,
    validate,
    errorsMsg
  } = props
  return (
    <InputWrapper error={errorsMsg}>
      <label>
        {label}
        <input
          {...validate}
          type={type}
          placeholder={placeholder}
          autoComplete={autocomplete}
          value={value || ''}
          onChange={(event) => onChangeInput(event.target.value)}
        />        
      </label>
      {errorsMsg?<Error>{errorsMsg}</Error>:null }
    </InputWrapper>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.oneOf(['on', 'off'])
}

export default Input

