import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  //  _(items) //Returns a lodash object and with that we can chain all the lodash methods
  // _.slice(items,startIndex)
  //_.take() pick a total number of items for a current page

  return _(items).slice(startIndex).take(pageSize).value(); //value converts the lodash wrapper to a regular array
}
