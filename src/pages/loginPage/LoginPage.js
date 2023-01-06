import Header from "../../components/header/Header";
import DlgForm from "../../components/dlgForm";
import { Link, withRouter } from "react-router-dom";
import { useLoginAccountMutation } from "../../redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, setMode } from "../../redux/slice";

const LoginPage = ({history}) => {
  const [errorMsg, setErrorMsg] = useState(null)
  const [login, {isError, isSuccess, data}] = useLoginAccountMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isSuccess) {      
      sessionStorage.user = JSON.stringify(data.user)
      dispatch(setUser(data.user))
      dispatch(setMode('isUser'))
      history.push('/articles')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

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
        <DlgForm.Sign isSign={false} link={<Link to='/sign-up'>Sign Up</Link>} />
      </DlgForm>
    </>  
  )  
}

export default withRouter(LoginPage) 