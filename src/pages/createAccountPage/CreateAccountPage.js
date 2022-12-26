import Header from "../../components/header/Header";
// import CreateAccountDlg from "../../components/createAccount/CreateAccountDlg";
import DlgForm from "../../components/dlgForm";
import { Link } from "react-router-dom";

const CreateAccountPage = () => {
  return (
    <>
      <Header />
      {/* <CreateAccountDlg /> */}
      <DlgForm value='hello mother fucker'>
        <DlgForm.Frame title='Create New Account'>
          <DlgForm.InputUsername />
          <DlgForm.InputEmail />
          <DlgForm.InputPassword />
          <DlgForm.InputRepeatPassword />
          <DlgForm.InputNewPassword />
          <DlgForm.InputAvatar />
        </DlgForm.Frame>
        <DlgForm.Line />
        <DlgForm.AgreeCheck />
        <DlgForm.Btn label='Create'/>
        <DlgForm.Sign isSign={true} link={<Link to='/login'>Sign In</Link>} />
        <DlgForm.Sign isSign={false} link={<Link to='/register'>Sign Up</Link>} />
      </DlgForm>
    </>
  )
}

export default CreateAccountPage