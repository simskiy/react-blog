// import useInitValue from "../../hooks/useInitValue";
import { useEffect } from "react";
import { useDlgFormContext } from "../state/context";
import Input from "./Input";
const InputEmail = ({error, initValue = null}) => {

  const {state, dispatch, control} = useDlgFormContext()
  const action = (value) => {
    return {type: 'onChangeEmail', payload: {email: value}}
  }

  const onChangeInputEmail = (value) => {
    dispatch(action(value))
  }
   
  const rules = {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: /^[_a-z0-9-\\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
      message: 'Не корректный email'
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(action(initValue)), [initValue])
  
  return (    
    <Input
      control={control}
      name='inputEmail'
      label='Email adress' 
      value={state?.email}
      onChangeInput={onChangeInputEmail}
      type='text' 
      placeholder='Email adress'
      autocomplete={'off'}
      rules= {rules}
      error={error}
    />
  )
}

export default InputEmail