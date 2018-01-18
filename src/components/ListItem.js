import React, {Component} from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false
    };

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(){
    this.setState({
      isHovered: !this.state.isHovered
    })
  }

  render(){
    let btnClass = this.state.isHovered ? 'hovered':'unhovered';

    let { myListItem, index, handleRemove, handleAdd } = this.props;

    var toggleBtn = function(){
      if(handleAdd){
        return 'Add';
      }else{
        return 'Remove';
      }
    }

    var click = function(){
      if(!handleAdd){
        handleRemove(myListItem,index);
      }else{
        handleAdd(myListItem,index);
      }
    }

    return(
      <div className="list-item"
           onMouseEnter={this.handleHover}
           onMouseLeave={this.handleHover}
      >
        <div>
          <img className="img"
               src={myListItem.img}
               alt=""
          />
        </div>
        <div className={"item-title "+btnClass}>
          {myListItem.title}
          <button className={btnClass} onClick={click}>{toggleBtn()}</button>
        </div>
  </div>
    )
  }
}


export default ListItem;