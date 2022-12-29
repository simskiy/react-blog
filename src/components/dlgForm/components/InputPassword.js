import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputPassword = () => {
  const {state, dispatch, register, errors} = useDlgFormContext()
  const msg = 'Пароль должен быть от 6 до 40 символов (включительно)'

  const onChangeInputPassword = (value) => {
    dispatch({type: 'onChangePassword', payload: {password: value}})
  }

  const validate = {...register('passwordInput', {
      required: 'Поле обязательно к заполнению',
      minLength: {
        value: 6,
        message: msg
      },
      maxLength: {
        value: 40,
        message: msg
      }
    })
  }

  return (
    <Input 
      validate={validate}
      errorsMsg={errors?.passwordInput?.message}
      label='Password'
      value={state.password}
      type='password'
      onChangeInput={onChangeInputPassword}
      placeholder='Password'
    />
  )
}

export default InputPassword