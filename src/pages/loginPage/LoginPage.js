import Header from "../../components/header/Header";
import DlgForm from "../../components/dlgForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Header />
      <DlgForm >
        <DlgForm.Frame title='Sign In'>
          <DlgForm.InputEmail />
          <DlgForm.InputPassword />
        </DlgForm.Frame>
        <DlgForm.Btn label='Login' />
        <DlgForm.Sign isSign={false} link={<Link to='/create'>Sign Up</Link>} />
      </DlgForm>
    </>  
  )  
}

export default LoginPage