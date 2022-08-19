import React from "react";
import { MdLibraryBooks } from "react-icons/md";
import Question from "./Question";

// import data questions
import { questions } from "../data/data";

const Faq = () => {
  return (
    <section className="faq-sec">
      <div className="container faq">
        <div className="title --center-all">
          <MdLibraryBooks size={30} color="orange" />
          <h2 className="--mb2">FAQS</h2>
          <p className="--text-small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.” The
            purpose of lorem ipsum is to create a natural looking block of text
            that doesn't distract from the layout
          </p>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
