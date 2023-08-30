import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import BootstrapNavbar from '../../components/BootstrapNavbar/BootstrapNavbar';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
// import NavBar from '../../components/NavBar/NavBar';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <>
      <BootstrapNavbar user={user} setUser={setUser}/>
      <Container>
        <Row>
          {user ? (
            <>
              <Routes>
                {/* Route components in here */}
                <Route path="/orders/new" element={<NewOrderPage />} />
                <Route path="/orders" element={<OrderHistoryPage />} />
              </Routes>
            </>)
            : (
              <AuthPage setUser={setUser} />
            )}
        </Row>
      </Container>
    </>
  );
}
