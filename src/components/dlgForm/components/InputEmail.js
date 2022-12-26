import { useDlgFormContext } from "../state/context";
import Input from "./Input";

const InputEmail = () => {

  const {state, dispatch, register, errors} = useDlgFormContext()

  const onChangeInputEmail = (value) => {
    dispatch({type: 'onChangeEmail', payload: {email: value}})
  }

  const validate = {...register('emailInput', {
      required: 'Поле обязательно к заполнению',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Не корректное имя email'
      }
    })
  }

  return (
    <Input
      validate = {validate}
      errorsMsg = {errors?.emailInput?.message}
      label='Email adress' 
      value={state.email} 
      onChangeInput={onChangeInputEmail} 
      type='text' 
      placeholder='Email adress'
    />
  )
}

export default InputEmail