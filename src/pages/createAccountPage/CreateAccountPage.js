import Header from "../../components/header/Header";
// import CreateAccountDlg from "../../components/createAccount/CreateAccountDlg";
import DlgForm from "../../components/dlgForm";
import { Link } from "react-router-dom";

const CreateAccountPage = () => {

  const getData = (value) => {
    // console.log(value)
  }

  return (
    <>
      <Header />
      <DlgForm value='hello mother fucker'>
        <DlgForm.Frame title='Create New Account'>
          <DlgForm.InputUsername />
          <DlgForm.InputEmail />
          <DlgForm.InputPassword />
          <DlgForm.InputRepeatPassword />
        </DlgForm.Frame>
        <DlgForm.Line />
        <DlgForm.AgreeCheck />
        <DlgForm.Btn label='Create' getData={getData}/>
        <DlgForm.Sign isSign={true} link={<Link to='/login'>Sign In</Link>} />
      </DlgForm>
    </>
  )
}

export default CreateAccountPage