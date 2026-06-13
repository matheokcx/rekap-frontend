import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.tsx';
import './lib/i18n';

const App = () => {
    return (
        <>
            {/*<NavBar />*/}
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/*<Route path="/login" element={<LoginPage />} />*/}
                {/*<Route path="/signup" element={<RegisterPage />} />*/}
                {/*<Route*/}
                {/*    path="/profile"*/}
                {/*    element={*/}
                {/*        <ProtectedRoute>*/}
                {/*            <ProfilePage />*/}
                {/*        </ProtectedRoute>*/}
                {/*    }*/}
                {/*/>*/}
            </Routes>
        </>
    );
};

export default App;
