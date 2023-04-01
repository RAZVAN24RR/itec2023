import React, { useState } from "react";
import { Form } from "react-bootstrap";

function MyForm() {
  const [showQuestions, setShowQuestions] = useState(false);

  const handleCheckboxChange = (event) => {
    setShowQuestions(event.target.checked);
  };

  return (
    <Form>
      <Form.Check
        type="checkbox"
        label="Arată întrebările"
        onChange={handleCheckboxChange}
      />

      {showQuestions && (
        <>
          <Form.Label>Întrebarea 1:</Form.Label>
          <Form.Control type="text" />

          <Form.Label>Întrebarea 2:</Form.Label>
          <Form.Control type="text" />
        </>
      )}
    </Form>
  );
}
export default MyForm;
