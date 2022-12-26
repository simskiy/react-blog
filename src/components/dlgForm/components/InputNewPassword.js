import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputNewPassword = () => {
  const {state, dispatch} = useDlgFormContext()

  const onChangeNewPassword = (value) => {
    dispatch({type: 'onChangeNewPassword', payload: {newPassword: value}})
  }

  return (
    <Input 
      label='New password'
      value={state.newPassword}
      type='password'
      onChangeInput={onChangeNewPassword}
      placeholder='New password'
    />
  )
}

export default InputNewPassword