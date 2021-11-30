import React, { Component } from 'react';
import galleryAPI from '../../services/gallery-api';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import ErrorQuery from '../ErrorQuery';

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
          })
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 2000);
    }
  }

  render() {
    const { gallery, status, error } = this.state;

    if (status === 'idle') {
      return <div>Input query.</div>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ErrorQuery message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <ul className={s.ImageGallery}>
          {gallery.map(item => (
            <ImageGalleryItem item={item} key={item.id} />
          ))}
        </ul>
      );
    }
  }
}
