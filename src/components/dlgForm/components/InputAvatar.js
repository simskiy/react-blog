import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputAvatar = () => {
  const {state, dispatch} = useDlgFormContext()

  const onChangeInputAvatar = (value) => {
    dispatch({type: 'onChangeAvatar', payload: {avatar: value}})
  }

  return (
    <Input 
      label='Avatar image (url)'
      value={state.avatar}
      type='url'
      onChangeInput={onChangeInputAvatar}
      placeholder='Avatar image'
    />
  )
}

export default InputAvatar