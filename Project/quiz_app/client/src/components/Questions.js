import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFetchQestion } from '../hooks/FetchQuestion';
import { updateResult } from '../hooks/setResult';

export default function Questions({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector(state => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchQestion();

  const questions = useSelector(state => state.questions.queue[state.questions.trace])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateResult({ trace , checked })); // Assuming trace is always 0 for a single random question
  }, [checked])

  function onSelect(qid,i) {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ qid,i})); // Assuming trace is always 0 for a single random question
  }

  if (isLoading) return <h3 className="text-light">Loading...</h3>;
  if (serverError) return <h3 className="text-light">{serverError.message || 'Unknown Error'}</h3>;

  // const randomQuestion = apiData[Math.floor(Math.random() * apiData.length)];

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>

      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name={`options-${q.id}`}
              id={`q${i}-option`}
              onChange={() => onSelect(q.id,i)}
            />

            <label className="text-primary" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div className={`check ${result[trace] === i ? 'checked' : ''}`}></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
