import { requireNativeComponent } from "react-native";
import PropTypes from "prop-types";

const MODULE_NAME = "CardModule";

const CardView = props => <CardModule {...props} />;

const viewProps = {
  name: MODULE_NAME
};

const CardModule = requireNativeComponent(MODULE_NAME, CardView);

module.exports = CardModule;
