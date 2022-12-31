import { color } from '../../../styles/global'
import styled from 'styled-components'

const Error = styled.span`
  color: ${color.error};
  font-size: 14px;
  font-weight: 400;
`

const ErrorsMsg = ({msg}) => {
  if (msg) return <Error>{msg}</Error>
  return null
}

export default ErrorsMsg