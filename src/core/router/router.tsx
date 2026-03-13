import App from '@/App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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