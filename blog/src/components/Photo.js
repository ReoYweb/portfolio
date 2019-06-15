import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const Photo = ({ photoItems }) => (
  <section className="photo">
    {photoItems.map(item => (
      <div key={item.en}>
        <div className="photos cf">
          <h2 className="sectionTitle photos__title">{item.title}</h2>
          <div className="photos__titlebox">
            <h3 className="photos__titlebox__jp">{item.jp}</h3>
            <span className="photos__titlebox__en">{item.en}</span>
          </div>
        </div>
        <PreviewCompatibleImage imageInfo={item.image} />
      </div>
    ))}
  </section>
);

Photo.propTypes = {
  photoItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      jp: PropTypes.string,
      en: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    })
  )
};

export default Photo;
