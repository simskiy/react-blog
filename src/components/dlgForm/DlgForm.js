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
import { useReducer } from "react";
import { reducer } from "./state/reducer";
import styled from "styled-components";
import { formDlg } from "../../styles/mixins";
import {useForm} from 'react-hook-form'

const Form = styled.form `
  ${formDlg}
`;

const DlgForm = ({children}) => {

  const {
    register,
    formState: {errors, isValid},
    handleSubmit,
  } = useForm({mode: "onBlur"})

  const onSubmit = (data) => {
    console.log(JSON.stringify(data))
  }

  const [state, dispatch] = useReducer(reducer, {
    check: true
  })
  
  return (
    <DlgFormProvider value={{state, dispatch, register, errors, isValid}}>
      <Form onSubmit={handleSubmit(onSubmit)}>
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