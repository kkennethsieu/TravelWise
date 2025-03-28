import Homepage from "./pages/Homepage/Homepage";
import Blogs from "./pages/Blogs/Blogs";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoginPage from "./pages/Login/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import BlogPost from "./pages/BlogPost/BlogPost";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogPost />} />
            <Route
              path="create"
              element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;
