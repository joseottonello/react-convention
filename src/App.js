import Home from './routes/Home'
import CheckOut from './routes/CheckOut'
import Information from './routes/Information'
import Payment from './routes/Payment'
import Success from './routes/Success'
import NotFound from './routes/NotFound'
import Layout from './components/Layout'
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const InitialState = useInitialState()
  
  return (
    <AppContext.Provider value={InitialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/checkout' element={<CheckOut/>} />
            <Route path='/checkout/information' element={<Information/>} />
            <Route path='/checkout/payment' element={<Payment/>} />
            <Route path='/checkout/success' element={<Success/>} />
            <Route element={<NotFound/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App

