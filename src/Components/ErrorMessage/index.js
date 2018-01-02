import connect from 'redux-object-connect';
import ErrorMessage from './ErrorMessage';
import { getError } from 'reducer';

const mapStateToProps = {
  getError,
};

export default connect(mapStateToProps)(ErrorMessage);
