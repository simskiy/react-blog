import { useDlgFormContext } from "../state/context";
import Input from "./Input";

const InputUsername = () => {
  const {state, dispatch, register, errors} = useDlgFormContext()
  const msg = 'Короткое имя. Длина имени должна быть от 3 до 20 символов'
  
  const onChangeInputUsername = (value) => {
    dispatch({type: 'onChangeUsername', payload: {username: value}})
  }

  const validate = {...register('usernameInput', {
      required: 'Поле обязательно к заполнению',
      minLength: {
        value: 3,
        message: msg
      },
      maxLength: {
        value: 20,
        message: msg
      }
    })
  }
  
  return (
    <Input
      validate = {validate}
      errorsMsg = {errors?.usernameInput?.message}
      label={'Username'}
      value={state.username} 
      type={'text'}
      onChangeInput={onChangeInputUsername}
      placeholder='Username' 
    />
  )
}

export default InputUsername