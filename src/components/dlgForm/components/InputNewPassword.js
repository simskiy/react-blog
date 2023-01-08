import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputNewPassword = ({initValue=null}) => {
  const {state, dispatch, control} = useDlgFormContext()
  const msg = 'Пароль должен быть от 6 до 40 символов (включительно)'

  const action = (value) => {
    return {type: 'onChangeNewPassword', payload: {newPassword: value}}
  }
  
  const onChangeNewPassword = (value) => {
    dispatch(action(value))
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
      curValue={state?.newPassword}
      type='text'
      onChangeInput={onChangeNewPassword}
      placeholder='New password'
    />
  )
}

export default InputNewPassword