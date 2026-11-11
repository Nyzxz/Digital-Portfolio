import { useEffect, useState } from 'react';

export function useTypewriter(
  words: readonly string[],
  typeMs = 70,
  deleteMs = 35,
  pauseMs = 1400,
) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? deleteMs : typeMs;
    if (!deleting && text === word) delay = pauseMs;

    const id = window.setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
        return;
      }
      if (deleting && text === '') {
        setDeleting(false);
        setIndex((n) => n + 1);
        return;
      }
      setText(
        deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1),
      );
    }, delay);

    return () => window.clearTimeout(id);
  }, [text, deleting, index, words, typeMs, deleteMs, pauseMs]);

  return text;
}
