import React, {Component} from 'react';

class MyListItem extends Component {
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

    let { myListItem, index, handleRemove } = this.props;

    return(
      <div className='list-item'
       onMouseEnter={this.handleHover}
       onMouseLeave={this.handleHover}
      >
      <div>
        <img className="img"
             src={myListItem.img}
             alt=""
        />
      </div>
      <div className="item-title">
        {myListItem.title}
        <button className={btnClass} onClick={() => handleRemove(index)}>Remove</button>
      </div>
  </div>
    )
  }
}


export default MyListItem;