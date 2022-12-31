import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputAvatar = () => {
  const {state, dispatch, control} = useDlgFormContext()

  const onChangeInputAvatar = (value) => {
    dispatch({type: 'onChangeAvatar', payload: {avatar: value}})
  }

  const rules={
  }

  return (
    <Input
      control={control}
      name='inputAvatar'
      rules={rules} 
      label='Avatar image (url)'
      value={state.avatar}
      type='url'
      onChangeInput={onChangeInputAvatar}
      placeholder='Avatar image'
    />
  )
}

export default InputAvatar