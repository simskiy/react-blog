import PostListPage from '../../pages/postListPage/PostListPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss'
import PostPage from '../../pages/postPage/PostPage';
import CreateAccountPage from '../../pages/createAccountPage/CreateAccountPage';
import LoginPage from '../../pages/loginPage/LoginPage';
import EditProfilePage from '../../pages/editPrifilePage/EditProfilePage';
import {CreateArticlePage} from '../../pages/CreateArticlePage/CreateArticlePage';

function App() {
  // let data = null  
  return (
    <Router>
      <div className={styles.app}>
        <Route  path='/' exact render={() => (<PostListPage />)} />
        <Route path='/articles' exact render={() => (<PostListPage />)}/>
        <Route path='/articles/:slug' 
          render={({match}) => {
            const slug = match.params.slug
            return <PostPage slug={slug} />
          }} />
        <Route path='/sign-up' component={CreateAccountPage} />
        <Route path='/sign-in' component={LoginPage} />
        <Route path='/profile' component={EditProfilePage} />
        <Route path='/new-article' component={CreateArticlePage} />
      </div>
    </Router>
  );
}


export default App;
