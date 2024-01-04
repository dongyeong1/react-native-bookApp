import React, {useEffect, useState} from 'react';
import axios from 'axios';

export const useAxios = (opts, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    console.log('re');
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now()); // 현재 시각으로 state를 업데이트해서 리렌더링
  };

  useEffect(() => {
    axiosInstance(opts) //axios는 url를 인자로 받아 데이터 요청
      .then(data => {
        //반환된 값은 then을 통해 가공
        console.log('qqqqqq', data);
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch(err => {
        setState({...state, loading: false, err});
      });
  }, [trigger]);
  return {...state, refetch};
};
