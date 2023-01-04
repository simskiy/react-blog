// import styles from './input.module.scss'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from '../../../styles/global'
import ErrorsMsg from './ErrorsMsg';
import { useController } from 'react-hook-form';
import { useEffect } from 'react';
import { useDlgFormContext } from '../state/context';

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

const Input = (props) => {
  const {     
    autocomplete = 'off',
    control,
    name,
    label,
    value,
    onChangeInput,
    type,
    placeholder,
    rules,
    error
  } = props

  const {field: {onChange, onBlur}, fieldState} = useController({
    control,
    name,
    rules
  })

  const {setError, clearErrors, dispatch} = useDlgFormContext()

  useEffect(() => {
    if (error) {
      dispatch({type: 'onReset', payload: {component: name}})
      setError(name, {type: error?.type, message: error?.text})
    }
    setTimeout(() => {
      clearErrors()
    }, 5000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error])

  return (
    <InputWrapper error={fieldState?.error}>
      <label>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          autoComplete={autocomplete}
          value={value || ''}
          onChange={(event) => {
            onChange(event.target.value)
            onBlur(event.target.value)
            onChangeInput(event.target.value)
          }}
        />
      </label>
      <ErrorsMsg msg={fieldState?.error?.message}/> 
    </InputWrapper>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.oneOf(['on', 'off']),
  name: PropTypes.string,
}

export default Input

