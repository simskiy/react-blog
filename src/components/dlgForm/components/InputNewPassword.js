import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputNewPassword = () => {
  const {state, dispatch, control} = useDlgFormContext()
  const msg = 'Пароль должен быть от 6 до 40 символов (включительно)'

  const onChangeNewPassword = (value) => {
    dispatch({type: 'onChangeNewPassword', payload: {newPassword: value}})
  }

  const rules ={
    required: 'Поле обязательно к заполнению',
    minLength: {
      value: 6,
      message: msg
    },
    maxLength: {
      value: 40,
      message: msg
    }
  }

  return (
    <Input 
      control={control}
      name='inputNewPassword'
      rules={rules}
      label='New password'
      value={state?.newPassword}
      type='password'
      onChangeInput={onChangeNewPassword}
      placeholder='New password'
    />
  )
}

export default InputNewPassword