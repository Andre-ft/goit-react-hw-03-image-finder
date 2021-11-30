import React from 'react';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ item: { id, webformatURL } }) {
  return (
    <li className={s.Item}>
      <img src={webformatURL} alt="" className={s['Item-image']} />
    </li>
  );
}
