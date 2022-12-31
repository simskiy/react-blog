import { useDlgFormContext } from "../state/context";
import Input from "./Input";

const InputUsername = () => {
  const {state, dispatch, control} = useDlgFormContext()
  const msg = 'Длина имени должна быть от 3 до 20 символов (включительно)'
  
  const onChangeInputUsername = (value) => {
    dispatch({type: 'onChangeUsername', payload: {username: value}})
  }

  const rules = {
    required: 'Поле обязательно к заполнению',
    minLength: {
      value: 3,
      message: msg
    },
    maxLength: {
      value: 20,
      message: msg
    },
    pattern: {
      value: /^[a-z][a-z0-9]*$/,
      message: 'Нужно использовать только английские буквы в нижнем регистре',
    }
  }
  
  return (
    <Input
      control={control}
      name='inputUsername'
      rules={rules}
      label={'Username'}
      value={state.username} 
      type={'text'}
      onChangeInput={onChangeInputUsername}
      placeholder='Username' 
    />
  )
}

export default InputUsername