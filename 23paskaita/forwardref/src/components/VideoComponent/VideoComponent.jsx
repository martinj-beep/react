// CustomVideo.js
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CustomVideo = forwardRef(({ videoUrl }, ref) => {
  return <video ref={ref} src={videoUrl} controls />;
});

CustomVideo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

CustomVideo.displayName = "CustomVideo"

export default CustomVideo;
