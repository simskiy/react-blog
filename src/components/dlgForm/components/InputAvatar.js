// import useInitValue from '../../hooks/useInitValue'
import { useEffect } from 'react'
import {useDlgFormContext} from '../state/context'
import Input from './Input'

const InputAvatar = ({initValue=null}) => {
  const {state, dispatch, control} = useDlgFormContext()
  const action = (value) => {
    return {type: 'onChangeAvatar', payload: {avatar: value}}
  }

  const onChangeInputAvatar = (value) => {
    dispatch(action(value))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => dispatch(action(initValue)), [initValue])
  
  const rules={
  }

  return (
    <Input
      control={control}
      name='inputAvatar'
      rules={rules} 
      label='Avatar image (url)'
      curValue={state?.avatar}
      type='url'
      onChangeInput={onChangeInputAvatar}
      placeholder='Avatar image'
    />
  )
}

export default InputAvatar