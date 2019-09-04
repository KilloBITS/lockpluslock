import React from 'react';
import { connect } from 'react-redux';
import GameBlock from '../components/game'

class GameContainer extends React.Component {
  render() {
    return <GameBlock level={this.props.level} components={this.props.components}/>
  }
}

const mapStateToProps = state => {
  return {
    level: state.game.level,
    components: state.game.components
  };
}

export default connect(mapStateToProps)(GameContainer);
