import Form from "react-bootstrap/Form";

const RadioChecks = () => {
  return (
    <Form>
      <div key={`inline-radio`} className="mb-3">
        {[1, 2, 3, 4, 5].map((num) => (
          <Form.Check
            inline
            label={` ${num}`}
            type="radio"
            name="group1"
            id={`inline-radio-${num}`}
          />
        ))}
      </div>
    </Form>
  );
};

export default RadioChecks;
