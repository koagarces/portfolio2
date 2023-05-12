import React, { useState, useEffect } from "react";

const About = () => {
  const [text, setText] = useState("Software Engineer");
  const [fullText, setFullText] = useState("Software Engineer");
  const [finished, toggleFinish] = useState(true);
  const [line, toggleLine] = useState(true);

  const turnOn = () => {
    document.getElementById("typer").style.opacity = 0;
  };

  const turnOff = () => {
    document.getElementById("typer").style.opacity = 100;
  };

  useEffect(() => {
    if (line) {
      setTimeout(() => {
        turnOff();
        toggleLine(false);
      }, 400);
    }

    if (!line) {
      setTimeout(() => {
        toggleLine(true);
        turnOn();
      }, 400);
    }

    if (text.length == fullText.length) {
      setTimeout(() => {
        toggleFinish(true);
      }, 2000);
    }

    if (text.length == 9) {
      setTimeout(() => {
        toggleFinish(false);
      }, 2000);
    }

    if (finished && text.length > 9) {
      setTimeout(() => {
        setText(text.slice(0, text.length - 1));
      }, 400);
    }

    if (!finished) {
      setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 400);
    }
  });

  return (
    <div>
      <h1>Welcome👋👋👋</h1>
      <h1>I'm Koa Garces</h1>
      <h1>
        {text}
        <span Id="typer">|</span>
      </h1>
    </div>
  );
};

export default About;
