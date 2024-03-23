import './App.css';
import MatchUp from './Components/Views/MatchUp';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Views/Home';
import Navbar from './Components/Organisms/Navbar/Navbar';
import MatchResults from './Components/Views/MatchResults';
import PlayerStatus from './Components/Views/PlayerStatus';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MainProvider } from './Context/Context';
import AddPlayer from './Components/Views/AddPlayer';
import Players from './Components/Views/Players';
import ProtectedRoute from './ProtecedRoute/ProtectedRoute';
import Footer from './Components/Organisms/Footer/Footer';
import Schedule from './Components/Views/Schedule';
import GoalieSchedule from './Components/Views/GoalieSchedule';

function App() {
    return (
        <MainProvider>
            <Navbar />
            <div style={{ flex: 1 }}>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route
                        path='/Status'
                        element={
                            <ProtectedRoute>
                                <PlayerStatus />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/Match/:id?'
                        element={
                            <ProtectedRoute>
                                <MatchUp />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/Scores'
                        element={
                            <ProtectedRoute>
                                <MatchResults />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/Players'
                        element={
                            <ProtectedRoute>
                                <Players />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/AddPlayer'
                        element={
                            <ProtectedRoute>
                                <AddPlayer />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/Schedule'
                        element={
                            <ProtectedRoute>
                                <Schedule />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/GoalieSchedule'
                        element={
                            <ProtectedRoute>
                                <GoalieSchedule />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </div>

            <Footer />
        </MainProvider>
    );
}

export default App;
