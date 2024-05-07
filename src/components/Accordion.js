import React, { useState } from "react";
import Plus from "../assets/images/plus.svg";
import Minus from "../assets/images/minus.svg";

const Accordion = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpen(!open);
  };

  return (
    <div className="accordion">
      {questions.map((question, index) => (
        <div className="accordion_section" key={index}>
          <div
            className="accordion_header"
            onClick={() => toggleSection(index)}
          >
            {question.header}

            {open ? (
              <img src={Minus} alt="minus" />
            ) : (
              <img src={Plus} alt="Plus" />
            )}
          </div>
          {openIndex === index && (
            <p className="accordion_content">{question.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
