import DlgForm from "../../components/dlgForm"
import Header from "../../components/header/Header"
import { setUser, setMode } from "../../redux/slice"
import useStorage from "../../components/hooks/useStorage"
import { useSelector } from "react-redux"

const EditProfilePage = () => {
  useStorage(setUser, setMode)
  const user = useSelector(state => state.reducer.user)
  const getData = async (data) => {
  }
  return (
    <>
    <Header />
    <DlgForm mode='edit' getData={getData}>
      <DlgForm.Frame title='Edit Profile'>
        <DlgForm.InputUsername initValue={user?.username}/>
        <DlgForm.InputEmail initValue={user?.email}/>
        <DlgForm.InputNewPassword />
        <DlgForm.InputAvatar initValue={user?.image}/>
      </DlgForm.Frame>
      <DlgForm.Btn label='Save' />
    </DlgForm>
    </>
  )
}

export default EditProfilePage