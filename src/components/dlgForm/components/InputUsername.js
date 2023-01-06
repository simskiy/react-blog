import { useEffect } from "react";
import { useDlgFormContext } from "../state/context";
import Input from "./Input";

const InputUsername = ({error, initValue = null}) => {
  const {state, dispatch, control} = useDlgFormContext()
  const msg = 'Длина имени должна быть от 3 до 20 символов (включительно)'
  
  const action = (value) => {
    return {type: 'onChangeUsername', payload: {username: value}}
  }

  const rules = {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: /^[a-z][a-z0-9]*$/,
      message: 'Нужно использовать только английские буквы в нижнем регистре',
    },
    minLength: {
      value: 3,
      message: msg
    },
    maxLength: {
      value: 20,
      message: msg
    }    
  }

  const onChangeInputUsername = (value) => {
    dispatch(action(value))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(action(initValue)), [initValue])
  
  return (
    <Input
      control={control}
      name='inputUsername'
      rules={rules}
      label={'Username'}
      value={state?.username} 
      type={'text'}
      onChangeInput={onChangeInputUsername}
      placeholder='Username'
      error={error}
    />
  )
}

export default InputUsername