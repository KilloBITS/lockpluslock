import React from 'react';
import { connect } from 'react-redux';
import PanelBlock from '../components/panel'
import { setComponents } from '../store/game/actions';

class PanelContainer extends React.Component {
  render() {
    return <PanelBlock level={this.props.level} setComponents={this.props.setComponents}  components={this.props.components}/>
  }
}

const mapStateToProps = state => {
  return {
    level: state.game.level,
    components: state.game.components
  };
}

const mapDispatchProps = {
  setComponents
}

export default connect(mapStateToProps, mapDispatchProps)(PanelContainer);
