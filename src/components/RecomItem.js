import React from 'react';

var RecomItem = ({recomItem,index,handleAdd}) => (

  <div className='list-item'>
    <div>
      <img className="img" src={recomItem.img} alt="" />
    </div>
    <div className="item-title">
      {recomItem.title}
      <button onClick={() => handleAdd(recomItem,index)}>Add</button>
    </div>

  </div>
);


export default RecomItem;