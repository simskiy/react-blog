import { Result } from 'antd';

const Error = ({code, msg}) => {
  return (
    <Result
    status={code}
    title={code}
    subTitle={msg}
    // extra={<Button type="primary">Back Home</Button>}
  />
  )
}

export default Error