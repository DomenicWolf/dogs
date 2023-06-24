import { Route,redirect,Routes,BrowserRouter,Navigate } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';
import './App.css';

function App(props) {
  console.log(props.dogs)
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route  path="/dogs" element={<DogList props={props.dogs}/>} >
          
        </Route>
        <Route path="/dogs/:name" element={<DogDetails props={props.dogs}/>} >
          {/* <DogDetails props={props.dogs}/> // what props will this need? */}
        </Route>
        {/* <redirect to="/dogs" /> */}
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'https://cdn.mos.cms.futurecdn.net/ASHH5bDmsp6wnK6mEfZdcU.jpg',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'https://hips.hearstapps.com/hmg-prod/images/best-guard-dogs-1588364974.jpg?resize=1200:*',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAAKNz1-J7ZuylwM9AJ7wWztDXXmSWvirbWQ&usqp=CAU',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
export default App;
