import React, { Component } from 'react';
import galleryAPI from '../../services/gallery-api';
import s from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    gallery: null,
    error: null,
    status: Status.IDLE,
    pageNumber: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const { pageNumber } = this.state;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });

      setTimeout(() => {
        galleryAPI
          .fetchGallery(nextQuery, pageNumber)
          .then(gallery => {
            this.setState({ gallery: gallery.hits, status: Status.RESOLVED });
            console.log('inside fetch', gallery.hits);
          })
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 1500);
    }
  }

  render() {
    const { gallery, status } = this.state;

    if (status === 'idle') {
      return <div>Input query.</div>;
    }

    if (status === 'pending') {
      return <div>PENDING</div>;
    }

    if (status === 'resolved') {
      return (
        <ul className={s.ImageGallery}>
          {gallery.map(item => {
            return (
              <li className="gallery-item" key={item.id}>
                <img src={item.webformatURL} alt="" />
              </li>
            );
          })}
        </ul>
      );
    }
  }
}
