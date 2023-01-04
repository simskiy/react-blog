import Header from "../../components/header/Header";
import DlgForm from "../../components/dlgForm";
import { Link } from "react-router-dom";
import { useLoginAccountMutation } from "../../redux";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const [errorMsg, setErrorMsg] = useState(null)
  const [login, {isError, isSuccess, data}] = useLoginAccountMutation()

  if (isSuccess) {
    localStorage.setItem('token', data.user.token)
    console.log(data)
  }

  useEffect(() => {
    if (isError) {
      setErrorMsg({type: 'invalidLogin', text: 'не верный логин или пароль'})
    }
  }, [isError])

  const getData = async ({email, password}) => {
    await login({
      "user": {
        "email": email,
        "password": password
      }
    })
  }

  return (
    <>
      <Header />
      <DlgForm mode='login' getData={getData}>
        <DlgForm.Frame title='Sign In'>
          <DlgForm.InputEmail error={errorMsg} />
          <DlgForm.InputPassword error={errorMsg} />
        </DlgForm.Frame>
        <DlgForm.Btn label='Login' />
        <DlgForm.Sign isSign={false} link={<Link to='/create'>Sign Up</Link>} />
      </DlgForm>
    </>  
  )  
}

export default LoginPage