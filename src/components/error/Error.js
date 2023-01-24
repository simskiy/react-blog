import { Result, Button } from 'antd';
import { withRouter } from 'react-router-dom';

const Error = ({code, msg, history}) => {
  return (
    <Result
    status={code}
    title={code}
    subTitle={msg}
    extra={<Button 
      type="primary"
      onClick={() => history.push('/articles')}
    >Back Home</Button>}
  />
  )
}

export default withRouter(Error)