import {requireNativeComponent, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

const MODULE_NAME = 'ImageModule';

const viewProps = {
  name: MODULE_NAME,
  propTypes: {
    url: PropTypes.string,
    ...ViewPropTypes,
  },
};

module.exports = requireNativeComponent(MODULE_NAME, viewProps);
