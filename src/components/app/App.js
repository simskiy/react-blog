import PostListPage from '../../pages/postListPage/PostListPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss'
import PostPage from '../../pages/postPage/PostPage';
import CreateAccountPage from '../../pages/createAccountPage/CreateAccountPage';

function App() {
  // let data = null  
  
  const getPosts = (posts) => {
    // console.log(posts.articles)
    // data = posts?.articles
  }

  return (
    <Router>
      <div className={styles.app}>
        <Route  path='/' exact render={() => (<PostListPage getPosts={getPosts} />)} />
        <Route path='/articles' exact render={() => (<PostListPage getPosts={getPosts} />)}/>
        <Route path='/articles/:slug' 
          render={({match, location, history}) => {
            const slug = match.params.slug
            return <PostPage slug={slug} />
          }} />
        <Route path='/create' component={CreateAccountPage} />
      </div>
    </Router>
  );
}


export default App;
