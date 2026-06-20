import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage.tsx';
import MentionsLegalesPage from './pages/legal/MentionsLegalesPage.tsx';
import PolitiqueConfidentialitePage from './pages/legal/PolitiqueConfidentialitePage.tsx';
import PolitiqueCookiesPage from './pages/legal/PolitiqueCookiesPage.tsx';
import CgvPage from './pages/legal/CgvPage.tsx';
import CguPage from './pages/legal/CguPage.tsx';
import './lib/i18n';

const App = () => {
    return (
        <>
            {/*<NavBar />*/}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
                <Route
                    path="/politique-de-confidentialite"
                    element={<PolitiqueConfidentialitePage />}
                />
                <Route path="/politique-cookies" element={<PolitiqueCookiesPage />} />
                <Route path="/cgv" element={<CgvPage />} />
                <Route path="/cgu" element={<CguPage />} />
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
