import React, {Component} from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }


  render(){

    let { item, index, handleRemove, handleAdd } = this.props;

    var toggleBtn = function(){
      if(handleAdd){
        return 'Add';
      }else{
        return 'Remove';
      }
    }

    var click = function(){
      if(!handleAdd){
        handleRemove(item,index);
      }else{
        handleAdd(item,index);
      }
    }

    return(
      <div className="item-container">
        <img className="img"
               src={item.img}
               alt=""
        />
        <div className="overlay">
          <div className="overlay-text">
            <div className="item-title">
              {item.title}
            </div>
            <div>
              <button className={toggleBtn()} onClick={click}>{toggleBtn()}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ListItem;
