import connect from 'redux-object-connect';
import LocationInfo from './LocationInfo';
import { getLocation } from 'reducer';

const mapStateToProps = {
  location: getLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfo);
