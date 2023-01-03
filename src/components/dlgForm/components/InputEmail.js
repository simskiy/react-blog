import { useDlgFormContext } from "../state/context";
import Input from "./Input";
const InputEmail = () => {

  const {state, dispatch, control } = useDlgFormContext()

  const onChangeInputEmail = (value) => {
    dispatch({type: 'onChangeEmail', payload: {email: value}})
  }

  const rules = {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: /^[_a-z0-9-\\+-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
      message: 'Не корректный email'
    },
  }
  return (    
    <Input
      control={control}
      name='imputEmail'
      label='Email adress' 
      value={state?.email}
      onChangeInput={onChangeInputEmail}
      type='text' 
      placeholder='Email adress'
      autocomplete={'off'}
      rules= {rules}
    />
  )
}

export default InputEmail