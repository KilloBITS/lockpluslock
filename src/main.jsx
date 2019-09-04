import React from 'react';
import { connect } from 'react-redux';
//import containers
import GameContainer from './containers/gameContainer';
import PanelContainer from './containers/panelContainer';

class MainPageContainer extends React.Component {
  render() {
    return <div className="look_look">
      <GameContainer/>
      <PanelContainer/>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    //...
  };
}

export default connect(mapStateToProps)(MainPageContainer);
