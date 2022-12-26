import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputRepeatPassword = () => {
  const {state, dispatch} = useDlgFormContext()

  const onChangeInputRepeatPassword = (value) => {
    dispatch({type: 'onChangeRepeatPaswword', payload: {repeatPassword: value}})
  }

  return (
    <Input 
      label='Repeat Password'
      value={state.repeatPassword}
      type='password'
      onChangeInput={onChangeInputRepeatPassword}
      placeholder='Password'
    />
  )
}

export default InputRepeatPassword