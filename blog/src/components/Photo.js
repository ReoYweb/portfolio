import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const Photo = ({ photoItems }) => (
  <section className="photo">
    {photoItems.map(item => (
      <div key={item.en}>
        <div className="photoinner cf">
          <h2 className="sectionTitle photoinner__title">{item.title}</h2>
          <div className="photoinner__titlebox">
            <h3 className="photoinner__titlebox__jp">{item.jp}</h3>
            <span className="photoinner__titlebox__en">{item.en}</span>
          </div>
        </div>
        <PreviewCompatibleImage imageInfo={item.image} />
        <p className="photo__text1">{item.imagetext1}</p>
        <p className="photo__text2">{item.imagetext2}</p>
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
      imagetext1: PropTypes.string,
      imagetext2: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    })
  )
};

export default Photo;
