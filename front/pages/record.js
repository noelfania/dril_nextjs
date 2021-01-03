import React, { useCallback, useState, useEffect } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { LOG_OUT_REQUEST } from '../reducers/user';


const Record =() => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  useEffect(() => {
    if (me) {

    } else {
      Router.push('/');
    }
  }, [me && me.id]);

  return (
    <div>
      record
      <Button onClick={onLogout}>로그아웃</Button>
    </div>
  );
}

export default Record;