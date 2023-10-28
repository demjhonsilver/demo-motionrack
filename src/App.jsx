import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import { AppRouter } from './navigation/router'; 
import './App.css';

function App() {
  
  return (
    <>
    <BrowserRouter>
       <Layout>
       <AppRouter />
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App