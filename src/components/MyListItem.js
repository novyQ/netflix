import React from 'react';

var MyListItem = ({myListItem,handleHover,index,btnClass,handleRemove}) => (
  <div className='list-item'
       onMouseEnter={handleHover}
       onMouseLeave={handleHover}>
    <div>
      <img className="img" src={myListItem.img} alt="" />
    </div>
    <div className="item-title">
      {myListItem.title}
      <button className={`mylist-${btnClass}-${myListItem.id}`} onClick={() => handleRemove(index)}>Remove</button>
    </div>
  </div>
);


export default MyListItem;