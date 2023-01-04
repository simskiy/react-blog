import Header from "../../components/header/Header";
import DlgForm from "../../components/dlgForm";
import { Link } from "react-router-dom";
import { useLoginAccountMutation } from "../../redux";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState(null)
  const [login, {isError, isSuccess}] = useLoginAccountMutation()
  
  const handleLogin = async({email, password}) => {
    await login({
      "user": {
        "email": email,
        "password": password
      }
    })
  }

  if (isSuccess) console.log('success login')

  useEffect(() => {
    if (isError) {
      setErrorMsg({type: 'invalidLogin', text: 'не верный логин или пароль'})
    }
  }, [isError])  

  const getData = async (data) => {
    return await handleLogin(data)
  }

  return (
    <>
      <Header />
      <DlgForm mode='login' getData={getData} error={errorMsg}>
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