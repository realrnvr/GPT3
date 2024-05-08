import React from "react";
import "./gpt.css";
import Glimse from "../../components/glimse/Glimse";

function GPT() {
  const gptData = [
    {
      title: "Chatbots",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. ",
    },
    {
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b",
    },
  ];

  function renderGptGlimse() {
    const glimseData = gptData.map((glimse, index) => {
      return <Glimse key={index} title={glimse.title} text={glimse.text} />;
    });
    return glimseData;
  }

  return (
    <div className="gpt" id="whatisgpt3">
      <div className="gpt__header">
        <Glimse
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt__intro">
        <h2 className="gpt__title text-gradient">
          The possibilities are beyond your imagination
        </h2>
        <p className="gpt__text">Explore The Library</p>
      </div>
      <div className="gpt__footer">{renderGptGlimse()}</div>
    </div>
  );
}

export default GPT;
