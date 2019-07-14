import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    console.log(startIndex)
    const items1 =  _(items).slice(startIndex).take(pageSize).value()
    console.log(items1)
    return items1
    // _.slice(items, startIndex)
    // _.take()
}