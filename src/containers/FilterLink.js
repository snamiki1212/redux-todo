import Link from '../components/Link';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);