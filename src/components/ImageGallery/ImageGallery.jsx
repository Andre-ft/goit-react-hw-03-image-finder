import React, { Component } from 'react';
import galleryAPI from '../../services/gallery-api';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import Loader from '../Loader';
import ErrorQuery from '../ErrorQuery';
import Button from '../Button';
import PropTypes from 'prop-types';

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
    // activeImageURL: null
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const { pageNumber } = this.state;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING, pageNumber: 1 });
      // setTimeout(() => {
      galleryAPI
        .fetchGallery(nextQuery, 1)
        .then(gallery => {
          this.setState({ gallery, status: Status.RESOLVED });
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
      // }, 1500);
    }

    if (prevState.pageNumber !== pageNumber && pageNumber !== 1) {
      galleryAPI
        .fetchGallery(nextQuery, pageNumber)
        .then(newGallery => {
          this.setState(({ gallery }) => ({
            gallery: [...gallery, ...newGallery],
            status: Status.RESOLVED,
          }));
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  getActiveImageURL = imageURL => {
    // this.setState({ activeImageURL: imageURL });
    this.props.getImageURL(imageURL);
  };

  loadMoreImages = () => {
    this.setState(({ pageNumber }) => ({ pageNumber: pageNumber + 1 }));
  };

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
        <>
          <ul className={s.ImageGallery}>
            {gallery.map(item => (
              <ImageGalleryItem
                item={item}
                key={item.id}
                onClick={this.getActiveImageURL}
              />
            ))}
          </ul>

          <Button onClick={this.loadMoreImages} aria-label="Load more images" />
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  getImageURL: PropTypes.func.isRequired,
};
