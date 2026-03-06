import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App';

export function MainRoutes() {
    return <Router basename='/myportfolio'>
        <Routes>
            <Route>
                <Route
                path='/'
                element={<App />}
                />
            </Route>
        </Routes>
    </Router>
}