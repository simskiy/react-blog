// import {useDlgFormContext} from '../state/context'
import styled from 'styled-components'

const Note = styled.span`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 400;
  align-self: center;
  margin-top: 10px;
`

const Sign = ({isSign = true, link}) => {
  const signIn = <Note>Already have an account? {link}</Note>
  const signUp = <Note>Dont have an account? {link}</Note>
  const content = isSign ? signIn : signUp
  
  return (
    <>
      {content}
    </>
  )
}

export default Sign