import React from 'react';
import ListItem from './ListItem';

var List = ({list, btnClass, handleRemove, handleAdd}) => (
  <div className='list-containter'>
    {list.map((myListItem,index) =>
      <ListItem
        key={myListItem.id}
        index={index}
        myListItem={myListItem}
        btnClass={btnClass}
        handleRemove={handleRemove}
        handleAdd={handleAdd}
      />
    )}
  </div>
);

// MyList.propTypes = {
//   mylist: React.PropTypes.array.isRequired
// };

export default List;