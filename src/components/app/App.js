import PostListPage from '../../pages/postListPage/PostListPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss'
import PostPage from '../../pages/postPage/PostPage';
import CreateAccountPage from '../../pages/createAccountPage/CreateAccountPage';
import LoginPage from '../../pages/loginPage/LoginPage';
import EditProfilePage from '../../pages/editPrifilePage/EditProfilePage';
import { CreateArticlePage } from '../../pages/createArticlePage/CreateArticlePage';
import { EditArticlePage } from '../../pages/editArticlePage/EditArticlePage';

function App() {
  // let data = null  
  return (
    <Router>
      <div className={styles.app}>
        <Route  path='/' exact render={() => (<PostListPage />)} />
        
        <Route path='/articles'  exact render={() => {
          const params = window.location.search
          const searchParams = new URLSearchParams(params.substring(params.indexOf('?')))
          const curPage = searchParams.get('page')
          return (<PostListPage 
            curPage={curPage || 1}                                        
          />)}}/>
        <Route 
          exact
          path='/articles/:slug' 
          render={({match}) => {
            const slug = match.params.slug
            return <PostPage slug={slug} />
          }} />          
        <Route path='/sign-up' component={CreateAccountPage} />
        <Route path='/sign-in' component={LoginPage} />
        <Route path='/profile' component={EditProfilePage} />
        <Route path='/new-article' component={CreateArticlePage} />
        <Route path='/articles/:slug/edit'
          render={({match}) => {
            const slug = match.params.slug
            return <EditArticlePage slug={slug} />
          }}
        />
      </div>
    </Router>
  );
}

export default App;
