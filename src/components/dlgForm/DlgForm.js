import { DlgFormProvider } from "./state/context"
import Frame from "./components/Frame";
import InputEmail from "./components/InputEmail";
import InputUsername from "./components/InputUsername";
import InputPassword from "./components/InputPassword";
import InputRepeatPassword from "./components/InputRepeatPassword";
import InputNewPassword from "./components/InputNewPassword";
import InputAvatar from "./components/InputAvatar";
import Line from "./components/Line";
import AgreeCheck from "./components/AgreeCheck";
import Btn from "./components/Btn";
import Sign from "./components/Sign";
import { useEffect, useReducer } from "react";
import { reducer } from "./state/reducer";
import styled from "styled-components";
import { formDlg } from "../../styles/mixins";
import {useForm} from 'react-hook-form'
import { initialState } from "./state/reducer";

const Form = styled.form `
  ${formDlg}
  background-color: white;
  margin-top: 45px;
`;

const DlgForm = ({children, mode, getData}) => {
  const {
    formState,
    handleSubmit,
    control,
    reset,
    setError,
    clearErrors,
    setValue   
  } = useForm({mode: 'onChange'})
  const [state, dispatch] = useReducer(reducer, initialState)
  const isValid = formState.isValid

  const onSubmit = async () => {
    await getData(state) 
  }

  const onErrors = (data) => {
    console.log(data)
  }
  
  useEffect(() => {
    dispatch({type: 'onSelectMode', payload: {mode: mode}})
  }, [mode])

  return (
    <DlgFormProvider value={{state, dispatch, isValid, control, reset, setError, clearErrors, setValue}}>
      <Form onSubmit={handleSubmit(onSubmit, onErrors)} noValidate>
        {children}
      </Form>
    </DlgFormProvider>
  )
}

DlgForm.Frame = Frame
DlgForm.InputEmail = InputEmail
DlgForm.InputUsername = InputUsername
DlgForm.InputPassword = InputPassword
DlgForm.InputRepeatPassword = InputRepeatPassword
DlgForm.InputNewPassword = InputNewPassword
DlgForm.InputAvatar = InputAvatar
DlgForm.Line = Line
DlgForm.AgreeCheck = AgreeCheck
DlgForm.Btn = Btn
DlgForm.Sign = Sign

export default DlgForm