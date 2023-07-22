import { HomePage } from './pages/Home'
import MainLayout from './layout/main-layout'
import ReactComponent from './tutorials/react-components/'
import { WelcomePage } from './tutorials/welcome/'
import { TutorialsPage } from './pages/tutorials'
import { AboutPage } from './pages/about'
import { NotFoundPage } from './pages/not-found'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { StateInCc } from './tutorials/state-in-cc'
import { UsersPage } from './pages/users'
import { StateInFc } from './tutorials/state-in-fc'
import { ProductEditPage, ProductNewPage, ProductsPage } from './pages/product'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path='/' element={<HomePage /> } />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/new' element={<ProductNewPage />} />
            <Route path='/products/edit' element={<ProductEditPage />} />
            <Route path='tutorials' element={<TutorialsPage />} >
              <Route index element={<WelcomePage />} />
              <Route path='react-components' element={<ReactComponent />} />
              <Route path='state-in-cc' element={<StateInCc />} />
              <Route path='state-in-fc' element={<StateInFc />} />
            </Route>
            <Route path='about' element={<AboutPage />} />
            <Route path='users' element={<UsersPage />} />


            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
