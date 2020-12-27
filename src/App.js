
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView/HomeView';
import SingleFilmView from './views/SingleFilmView/SingleFilmView';
import MoviesSearchView from './views/MoviesSearchView/MoviesSearchView';


export default function App() {
  return (
    <Container>
       <AppBar/>
  
    
    <Switch>
      <Route path="/" exact>
        <HomeView/>
      </Route>
     <Route path="/movies/:moviesId">
        <SingleFilmView/>
      </Route>
     <Route path="/movies">
        <MoviesSearchView/>
      </Route>
    </Switch> 
    </Container>

  );
}

