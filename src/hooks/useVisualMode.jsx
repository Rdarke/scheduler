import React, { useState } from 'react'

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // allows the transition of the mode value to the new mode value.
  const transition = function(newMode, replace = false) {
    if (replace === true) {
      setHistory([...history]);
    } else {
      setHistory([...history, newMode]);
    }
    setMode(newMode);
  };

  // back represents a push & pop of the stack via the history array.
  const back = function() {
    if (history.length > 1) {

      setHistory(history => {
        const newHistory = [...history].slice(0, history.length - 1); // refactor using ..prev instead.
        setMode(newHistory[newHistory.length - 1]);
        return newHistory
      });
    }
  };

  return {mode, transition, back};
};