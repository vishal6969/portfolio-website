import React, { useState, useEffect } from "react";

const useGetAnimatedText = (wordArray: Array<string>) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  function addText() {
    const word = wordArray[wordIndex];
    setText((prev) => word.substring(0, prev.length - temp));
    const temp = isDeleting ? 1 : -1;
    if (!isDeleting && text === word) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % wordArray.length);
    }
  }

  useEffect(() => {
    const timer = setTimeout(addText, 100);

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting]);

  return text;
};

export default useGetAnimatedText;
