import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

function MyFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActiveIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      id: 1,
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      id: 3,
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
  ];

  const generateFaqItems = () => {
    return faqItems.map((item) => {
      return (
        <Card key={item.id}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="link"
              eventKey={item.id}
              onClick={() => toggleActiveIndex(item.id)}
            >
              {item.question}
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse
            eventKey={item.id}
            isActive={activeIndex === item.id}
          >
            <Card.Body>{item.answer}</Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    });
  };

  return <Accordion>{generateFaqItems()}</Accordion>;
}

export default MyFaq;
