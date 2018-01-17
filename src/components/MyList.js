import React from 'react';
import MyListItem from './MyListItem';

var MyList = ({mylist, handleHover, btnClass, handleRemove}) => (
  <div className='list-containter'>
    {mylist.map((myListItem,index) =>
      <MyListItem
        key={myListItem.id}
        index={index}
        myListItem={myListItem}
        handleHover={handleHover}
        btnClass={btnClass}
        handleRemove={handleRemove}
      />
    )}
  </div>
);

// MyList.propTypes = {
//   mylist: React.PropTypes.array.isRequired
// };

export default MyList;