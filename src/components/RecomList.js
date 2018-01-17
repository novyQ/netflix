import React from 'react';
import RecomItem from './RecomItem';

var RecomList = ({recomlist,handleAdd}) => (
  <div className='list-containter'>
    {recomlist.map((recomItem,index) =>
      <RecomItem
        key={recomItem.id}
        index={index}
        recomItem={recomItem}
        handleAdd={handleAdd}
      />
    )}
  </div>
);

export default RecomList;