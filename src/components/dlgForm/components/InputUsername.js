import { useDlgFormContext } from "../state/context";
import Input from "./Input";

const InputUsername = () => {
  const {state, dispatch} = useDlgFormContext()
  
  const onChangeInputUsername = (value) => {
    dispatch({type: 'onChangeUsername', payload: {username: value}})
  }
  
  return (
    <Input 
      label={'Username'}
      value={state.username} 
      type={'text'}
      onChangeInput={onChangeInputUsername}
      placeholder='Username' 
    />
  )
}

export default InputUsername