import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputNewPassword = () => {
  const {state, dispatch, register, errors} = useDlgFormContext()
  const msg = 'Пароль должен быть от 6 до 40 символов (включительно)'

  const onChangeNewPassword = (value) => {
    dispatch({type: 'onChangeNewPassword', payload: {newPassword: value}})
  }
  const validate = {...register('newPasswordInput', {
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
      errorsMsg={errors?.newPasswordInput?.message}
      label='New password'
      value={state.newPassword}
      type='password'
      onChangeInput={onChangeNewPassword}
      placeholder='New password'
    />
  )
}

export default InputNewPassword