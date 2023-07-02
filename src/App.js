import { HomePage } from './pages/Home'
import MainLayout from './layout/main-layout'
// import ReactComponent from './tutorials/react-components/'
import {TutorialsPage} from './pages/tutorials'
import {BrowserRouter, } from 'react-router-dom'


function App() {
  return (
     <MainLayout >
      {/* <ReactComponent /> */}
      <TutorialsPage />
      <HomePage />
     </MainLayout>


  );
}

export default App;
