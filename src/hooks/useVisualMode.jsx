import React, { useState } from 'react'

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode) {
    setMode(newMode);
    setHistory([...history, newMode]);
  };

  const back = function() {
    if (history.length > 1) {
      setHistory(history => {
        const newHistory = [...history].slice(0, history.length - 1);
        setMode(newHistory[newHistory.length - 1]);
        return newHistory
      });
    }
  }

  return {mode, transition, back};
};