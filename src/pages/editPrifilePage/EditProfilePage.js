import DlgForm from "../../components/dlgForm"
import Header from "../../components/header/Header"

const EditProfilePage = () => {
  return (
    <>
    <Header />
    <DlgForm>
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