import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputPassword = ({error}) => {
  const {state, dispatch, control} = useDlgFormContext()
  const msg = 'Пароль должен быть от 6 до 40 символов (включительно)'

  const onChangeInputPassword = (value) => {
    dispatch({type: 'onChangePassword', payload: {password: value}})
  }

  const rules = { 
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
      name='inputPassword'
      rules={rules}
      label='Password'
      curValue={state?.password}
      type='password'
      onChangeInput={onChangeInputPassword}
      placeholder='Password'
      error={error}
    />
  )
}

export default InputPassword