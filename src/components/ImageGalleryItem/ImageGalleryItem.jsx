import React from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  item: { id, webformatURL, largeImageURL },
  onClick,
}) {
  return (
    <li className={s.Item}>
      <img
        src={webformatURL}
        alt=""
        className={s['Item-image']}
        id={id}
        onClick={() => onClick(largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.defaultProps = {
  onClick: () => null,
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
