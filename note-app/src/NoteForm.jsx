import { Form, Stack, Row, Col, Button } from "react-bootstrap";
import CreateableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export function NoteForm({ onSubmit }) {
  const titleRef = useRef(null);
  const markdownRef = useRef(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: titleRef.current.value,
      markdown: markdownRef.current.value,
      tags: [],
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreateableReactSelect
                isMulti
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="body">
              <Form.Label>Body</Form.Label>
              <Form.Control
                required
                as="textarea"
                ref={markdownRef}
                rows={15}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Stack direction="horizontal" gap={2} className={"justify-content-end"}>
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to={".."}>
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
