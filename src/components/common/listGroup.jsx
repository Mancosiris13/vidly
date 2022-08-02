import React from 'react';

const ListGroup = (props) => {
  const { items, itemName, idProperty, onItemSelect, selectedItem } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[idProperty]}
          className={
            item === selectedItem ? 'list-group-item active' : 'list-group-item'
          }
        >
          {item[itemName]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  itemName: 'genreName',
  idProperty: '_id',
};

export default ListGroup;
