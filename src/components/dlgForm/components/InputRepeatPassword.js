import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputRepeatPassword = () => {
  const {state, dispatch, control} = useDlgFormContext()

  const onChangeInputRepeatPassword = (value) => {
    dispatch({type: 'onChangeRepeatPaswword', payload: {repeatPassword: value}})
  }

  const rules = {
    required: 'Поле обязательно к заполнению',
    validate: {
      required: (value) => {
        if (value !== state.password && value.length > 0) {
          return 'Пароли не совпадают'
        }
      }
    }
  }

  return (
    <Input 
      control={control}
      name='inputRepeatPassword'
      rules={rules}
      curValue={state?.repeatPassword}
      label='Repeat Password'
      type='password'
      onChangeInput={onChangeInputRepeatPassword}
      placeholder='Password'
    />
  )
}

export default InputRepeatPassword