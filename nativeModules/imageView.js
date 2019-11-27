import { requireNativeComponent } from "react-native";
import PropTypes from "prop-types";

const MODULE_NAME = "ImageModule";

const viewProps = {
  name: MODULE_NAME,
  url: PropTypes.string
};

const ImageModule = requireNativeComponent(MODULE_NAME, viewProps);

module.exports = ImageModule;
