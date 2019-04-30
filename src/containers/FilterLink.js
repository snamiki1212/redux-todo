import Link from '../components/Link';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {console.log('test message 1')}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);