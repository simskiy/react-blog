import DlgForm from "../../components/dlgForm"
import Header from "../../components/header/Header"
import { setUser, setMode } from "../../redux/slice"
import useStorage from "../../components/hooks/useStorage"
import { useDispatch, useSelector } from "react-redux"
import { useUpdateAccountMutation } from "../../redux"
import { useEffect, useState } from "react"

const EditProfilePage = ({history}) => {
  const [errorLogin, setErrorLogin] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  useStorage(setUser, setMode)
  const user = useSelector(state => state.reducer.user)
  const [editProfile, {isError, isSuccess, data, error}] = useUpdateAccountMutation()
  const dispatch = useDispatch() 
  useEffect(() => {
    if (isSuccess) {
      sessionStorage.user = JSON.stringify(data.user)
      dispatch(setUser(data.user))
      history.push('/articles')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      const errors = error?.data?.errors
      if ('username' in errors) setErrorLogin({type: 'loginIsBusy', text: 'имя занято'})
      if ('email' in errors) setErrorEmail({type: 'emailIsBusy', text: 'email занят'})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError])
  
  const getData = async ({email, username, newPassword, avatar}) => {
    await editProfile({
      "user": {
        "username": username,
        "email": email,
        "password": newPassword,
        "image": avatar
      }
    })
  }

  return (
    <>
    <Header />
    <DlgForm mode='edit' getData={getData}>
      <DlgForm.Frame title='Edit Profile'>
        <DlgForm.InputUsername error={errorLogin} initValue={user?.username}/>
        <DlgForm.InputEmail error={errorEmail} initValue={user?.email}/>
        <DlgForm.InputNewPassword />
        <DlgForm.InputAvatar initValue={user?.image}/>
      </DlgForm.Frame>
      <DlgForm.Btn label='Save' />
    </DlgForm>
    </>
  )
}

export default EditProfilePage