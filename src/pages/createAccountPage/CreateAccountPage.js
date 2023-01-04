import Header from "../../components/header/Header";
// import CreateAccountDlg from "../../components/createAccount/CreateAccountDlg";
import DlgForm from "../../components/dlgForm";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCreateAccountMutation } from "../../redux";

const CreateAccountPage = () => {
  const [errorLogin, setErrorLogin] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [createAccount, {isError, isSuccess, data, error}] = useCreateAccountMutation()
  
  if (isSuccess) {
    console.log(data)
  }

  useEffect(() => {
    if (isError) {
      const errors = error?.data?.errors
      if ('username' in errors) setErrorLogin({type: 'loginIsBusy', text: 'имя занято'})
      if ('email' in errors) setErrorEmail({type: 'emailIsBusy', text: 'email занят'})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isError])

  const getData = async ({username, email, password}) => {
    await createAccount({
      "user": {
        "username": username,
        "email": email,
        "password": password,
      }
    })
  }

  return (
    <>
      <Header />
      <DlgForm mode='create' getData={getData}>
        <DlgForm.Frame title='Create New Account'>
          <DlgForm.InputUsername error={errorLogin}/>
          <DlgForm.InputEmail error={errorEmail} />
          <DlgForm.InputPassword />
          <DlgForm.InputRepeatPassword />
        </DlgForm.Frame>
        <DlgForm.Line />
        <DlgForm.AgreeCheck />
        <DlgForm.Btn label='Create' />
        <DlgForm.Sign isSign={true} link={<Link to='/login'>Sign In</Link>} />
      </DlgForm>
    </>
  )
}

export default CreateAccountPage