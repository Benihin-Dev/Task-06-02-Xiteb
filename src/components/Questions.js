import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export default function Questions() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [questionAndAnswer, setQuestionAndAnswer] = useState([
    {
      que: "What is the difference between Draft and a traditional bank account?",
      ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus eius iure qui ad sunt fugit error iusto, corruptiquia, a quas consequuntur hic quibusdam! Voluptatum assumendadolor beatae nemo optio?",
      expanded: false,
    },
    {
      que: "Who can open a Draft account?",
      ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus eius iure qui ad sunt fugit error iusto, corruptiquia, a quas consequuntur hic quibusdam! Voluptatum assumendadolor beatae nemo optio?",
      expanded: false,
    },
    {
      que: "What if I withdraw money abroad?",
      ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus eius iure qui ad sunt fugit error iusto, corruptiquia, a quas consequuntur hic quibusdam! Voluptatum assumendadolor beatae nemo optio?",
      expanded: false,
    },
    {
      que: "Can I cancel my subscription or switch to another plan anytime?",
      ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus eius iure qui ad sunt fugit error iusto, corruptiquia, a quas consequuntur hic quibusdam! Voluptatum assumendadolor beatae nemo optio?",
      expanded: false,
    },
    {
      que: "What happens if I withdraw more than $250?",
      ans: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus eius iure qui ad sunt fugit error iusto, corruptiquia, a quas consequuntur hic quibusdam! Voluptatum assumendadolor beatae nemo optio?",
      expanded: false,
    },
  ]);

  const toggleAnswer = (index) => {
    setQuestionAndAnswer((prevQuestions) =>
      prevQuestions.map((question, i) =>
        i === index ? { ...question, expanded: !question.expanded } : question
      )
    );
  };
  return (
    <div
      ref={ref}
      className={`animated-component ${
        inView ? "is-visible" : ""
      }  w-full bg-[#f2f6ff] pt-20 pb-20`}
    >
      <div className=" w-11/12 sm:w-9/12 items-center mx-auto text-[#1433ff] pt-12 pb-5">
        <div className=" text-center">
          <p className=" w-full text-4xl font-semibold">
            Frequently
            <span className=" text-[#ff6262]"> asked questions</span>
          </p>
          <p className=" text-[#8c8fb6] text-xl mt-4 w-7/12 mx-auto">
            If you are not sure whether Draft is suitable for you or not, do not
            worry. We are here to explain everything you might want to know.
          </p>
        </div>
        <div className=" w-11/12 mx-auto space-y-3 text-[#12183d] mt-24">
          {questionAndAnswer.map((question, index) => (
            <div
              key={index}
              onClick={() => toggleAnswer(index)}
              className="cursor-pointer text-base shadow hover:shadow-md px-5 w-full py-3 sm:text-lg border rounded-2xl  bg-white"
            >
              <div className="flex justify-between items-center">
                <p className="w-10/12 ">{question.que}</p>
                <div className=" w-2/12 flex items-center justify-end">
                  {question.expanded ? (
                    <FiMinus className="size-5" />
                  ) : (
                    <FiPlus className="size-5" />
                  )}
                </div>
              </div>
              {question.expanded && (
                <p className=" text-sm text-[#5b5f79]">{question.ans}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
