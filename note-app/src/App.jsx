import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { NewNote } from "./NewNote";

function App() {
  const [notes, setNotes] = useLocalStorage("NOTES", []);
  const [tags, setTags] = useLocalStorage("TAGS", []);

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Welcome home</h1>} />
        <Route path="/new" element={<NewNote />} />
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
