import React from 'react';

let mappingBlock = (blockArray, select) => {
  let block_size = (590 / 4 - 10);
  const looklook = blockArray.map((block, key) => <div key={key} style={{width: block_size, height: block_size}} className="look_box">
    <div className="childBox" image_card={block} index={key} onClick={select}></div>
  </div>);
  return looklook
}

class TicketComponent extends React.Component {
  constructor(props){
    super(props);
    //default properties from this game
    this.selectBox = this.selectBox.bind(this);
    this.selected = [];
    this.isClicked = true;
    this.isIndex = null;
    this.goods = 0;
  }
  //click box function
  selectBox(event){
    let image_num = event.target.getAttribute("image_card");
    let image_index = event.target.getAttribute("index");
    if(this.isClicked && event.target.className !== "childBox good" && this.isIndex !== image_index){
      let load_image = require("../images/cards/"+image_num+".png");
      event.target.className = 'childBox select';
      event.target.style.backgroundImage = "url("+load_image+")";
      this.isIndex = image_index;
      if(this.selected.length === 0){
        this.selected.push(event.target);
      }else{
        this.selected.push(event.target);
        if(this.selected[0].getAttribute("image_card") === this.selected[1].getAttribute("image_card")){
          this.selected[0].className = "childBox good";
          this.selected[1].className = "childBox good";
          this.selected = [];
          this.goods = this.goods+1;
          //TO DO WINNER FUNCTION
        }else{
          this.isClicked = false;
          setTimeout(() => {
            this.selected[0].className = "childBox";
            this.selected[0].removeAttribute('style');
            this.selected[1].className = "childBox";
            this.selected[1].removeAttribute('style');
            this.selected = [];
            this.isClicked = true;
          }, 1500);
        }
      }
    }
  }

  render() {
    return <div className="inline box game" ref={(el) => this.instance = el}>
      {(this.props.components !== null)
        ?mappingBlock(this.props.components, this.selectBox)
        :<div className="noneGame">
          <div className="noneGameBigTitle">Peach game</div>
          <div className="noneGameText">
            Peach game is a test task for the front-end developer. The task was completed with technologies: react, redux.
          </div>
          <div className="noneGameText">
            2019
          </div>
        </div>
      }
    </div>
  }
}

export default TicketComponent;
