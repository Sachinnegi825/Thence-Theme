import React, { useState } from "react";
import Plus from "../assets/images/plus.svg";
import Minus from "../assets/images/minus.svg";

const Accordion = ({ questions }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
            {openIndex === index ? (
              <img src={Minus} alt="minus" />
            ) : (
              <img src={Plus} alt="plus" />
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
