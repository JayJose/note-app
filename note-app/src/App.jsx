import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Welcome home</h1>} />
        <Route path="/new" element={<h1>Welcome to another page.</h1>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;
