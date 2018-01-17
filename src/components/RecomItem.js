
import React, {Component} from 'react';

class RecomItem extends Component {
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

    let { recomItem, index, handleAdd } = this.props;

    return(
      <div className='list-item'
       onMouseEnter={this.handleHover}
       onMouseLeave={this.handleHover}
      >
      <div>
        <img className="img"
             src={recomItem.img}
             alt=""
        />
      </div>
      <div className="item-title">
        {recomItem.title}
        <button className={btnClass} onClick={() => handleAdd(recomItem,index)}>Add</button>
      </div>
  </div>
    )
  }
}

export default RecomItem;