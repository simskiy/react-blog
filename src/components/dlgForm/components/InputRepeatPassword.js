import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputRepeatPassword = () => {
  const {state, dispatch, register, errors} = useDlgFormContext()
  const msg = 'Пароль должен быть от 6 до 40 символов (включительно)'

  const onChangeInputRepeatPassword = (value) => {
    dispatch({type: 'onChangeRepeatPaswword', payload: {repeatPassword: value}})
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
      value={state.repeatPassword}
      label='Repeat Password'
      type='password'
      onChangeInput={onChangeInputRepeatPassword}
      placeholder='Password'
    />
  )
}

export default InputRepeatPassword