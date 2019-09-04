import React from 'react';
//chunk array
let chunkArray = (arr,n) => {
     var chunkLength = Math.max(arr.length/n ,1);
     var chunks = [];
     for (var i = 0; i < n; i++) {
         if(chunkLength*(i+1)<=arr.length)chunks.push(arr.slice(chunkLength*i, chunkLength*(i+1)));
     }
     return chunks;
}
//shuffle array
let shuffle = (array) => {
  return array.sort(() => Math.random() - 0.5);
}
//generated level
let generateBox = (level) => {
  let size = (4*level)*(4*level);
  let box_array = new Array(...Array(size).keys());
  let chunked_array = chunkArray(shuffle(box_array),2);
  let contact_array = chunked_array[0].concat(chunked_array[0]);
  return shuffle(contact_array)
}

class PanelComponent extends React.Component {
  constructor(){
    super()
    this.createGame = this.createGame.bind(this);
    this.clearGame = this.clearGame.bind(this);
  }
  createGame(){
    this.props.setComponents(generateBox(this.props.level));
  }

  clearGame(){
    this.props.setComponents(null);
  }
  render() {
    return <div className="inline box panel">
      <div className="panelBox">
        <div className="panelBoxTitle">peach game</div>
      </div>
      <div className="panelBox">
        {(this.props.components !== null)
          ?<div className="button stopButton" onClick={this.clearGame}>STOP GAME</div>
          :<div className="button startButton" onClick={this.createGame}>START GAME</div>
        }
      </div>
    </div>
  }
}

export default PanelComponent;
