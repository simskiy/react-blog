import Header from "../../components/header/Header";
// import CreateAccountDlg from "../../components/createAccount/CreateAccountDlg";
import DlgForm from "../../components/dlgForm";
import { Link } from "react-router-dom";
import { useState } from "react";

const CreateAccountPage = () => {
  const [errorMsg, setErrorMsg] = useState()
  // const handleCreateAccount = async ({})

  const getData = async (data) => {
    // return await handleCreateAccount(data)
  }

  const error = 'Кастомная ошибка'

  return (
    <>
      <Header />
      <DlgForm mode='create' getData={getData} error={errorMsg}>
        <DlgForm.Frame title='Create New Account'>
          <DlgForm.InputUsername />
          <DlgForm.InputEmail />
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