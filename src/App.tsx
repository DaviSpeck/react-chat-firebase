import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import ChatRoom from "./pages/ChatRoom"
import Login from "./pages/Login"
import PrivateRoute from "./routes/ProvateRoute"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <div className="bg-neutral">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat"
            element={
              <PrivateRoute>
                <ChatRoom />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
