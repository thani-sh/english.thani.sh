import React, { useState } from "react";
import styles from "./Alphabet.module.css";

const LETTERS = [
  { letter: "a", sound: "ah" },
  { letter: "b", sound: "ba" },
  { letter: "c", sound: "ka" },
  { letter: "d", sound: "da" },
  { letter: "e", sound: "e" },
  { letter: "f", sound: "fä" },
  { letter: "g", sound: "ga" },
  { letter: "h", sound: "ha" },
  { letter: "i", sound: "ii" },
  { letter: "j", sound: "jah" },
  { letter: "k", sound: "ka" },
  { letter: "l", sound: "lah" },
  { letter: "m", sound: "ma" },
  { letter: "n", sound: "na" },
  { letter: "o", sound: "oh" },
  { letter: "p", sound: "pa" },
  { letter: "q", sound: "qa" },
  { letter: "r", sound: "ra" },
  { letter: "s", sound: "sa" },
  { letter: "t", sound: "ta" },
  { letter: "u", sound: "ah" },
  { letter: "v", sound: "vah" },
  { letter: "w", sound: "wa" },
  { letter: "x", sound: "exa" },
  { letter: "y", sound: "ya" },
  { letter: "z", sound: "za" },
];

const speakLetter = (i: number) => {
  const utter = new SpeechSynthesisUtterance();
  utter.text = LETTERS[i].sound;
  speechSynthesis.speak(utter);
};

interface PrimaryLetterProps {
  index: number;
}

const PrimaryLetter = ({ index }: PrimaryLetterProps) => {
  return (
    <div className={styles.primary} onClick={() => speakLetter(index)}>
      {LETTERS[index].letter}
    </div>
  );
};

interface KeyboardLetterProps {
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
}

const KeyboardLetter = ({
  index,
  isSelected,
  onSelect,
}: KeyboardLetterProps) => {
  let className = styles.button;
  if (isSelected) {
    className += " " + styles.active;
  }
  const handleClick = (i: number) => {
    onSelect(i);
    speakLetter(i);
  };
  return (
    <div
      className={className}
      key={`l${index}`}
      onClick={() => handleClick(index)}
    >
      {LETTERS[index].letter}
    </div>
  );
};

export const Alphabet = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.wrapper}>
      <PrimaryLetter index={index} />
      <div className={styles.buttons}>
        {LETTERS.map((l, i) => (
          <KeyboardLetter
            index={i}
            isSelected={i === index}
            onSelect={(i) => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};
