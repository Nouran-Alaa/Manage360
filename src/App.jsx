import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import SignIn from './features/auth/sign-in/SignIn';
import SignUp from './features/auth/sign-up/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/sign-in" />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="*" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
