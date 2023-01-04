import DlgForm from "../../components/dlgForm"
import Header from "../../components/header/Header"

const EditProfilePage = () => {
  const getData = ({mode, username, email, newPassword, avatar}) => {
    console.log(mode, username, email, newPassword, avatar)
  }
  return (
    <>
    <Header />
    <DlgForm mode='edit' getData={getData}>
      <DlgForm.Frame title='Edit Profile'>
        <DlgForm.InputUsername />
        <DlgForm.InputEmail />
        <DlgForm.InputNewPassword />
        <DlgForm.InputAvatar />
      </DlgForm.Frame>
      <DlgForm.Btn label='Save' />
    </DlgForm>
    </>
  )
}

export default EditProfilePage