import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default class LoaderItem extends Component {
  //other logic
  render() {
    return (
      <Loader
        className={s.Loader}
        type="MutatingDots"
        color="#6ef8d6"
        height={100}
        width={100}
        timeout={2000} //3 secs
        radius={20}
        secondaryColor="#1262a8"
      />
    );
  }
}
