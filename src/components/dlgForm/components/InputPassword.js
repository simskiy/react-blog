import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputPassword = () => {
  const {state, dispatch} = useDlgFormContext()

  const onChangeInputPassword = (value) => {
    dispatch({type: 'onChangePassword', payload: {password: value}})
  }

  return (
    <Input 
      label='Password'
      value={state.password}
      type='password'
      onChangeInput={onChangeInputPassword}
      placeholder='Password'
    />
  )
}

export default InputPassword