import React, { useState } from 'react'

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode) {
    setMode(newMode);
  };

  const back = function() {

  }

  return {mode, transition, back};
};