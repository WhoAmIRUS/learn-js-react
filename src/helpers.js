import { OrderedMap, Record } from 'immutable';

export function arrToMap(arr, ModelRecord) {
  return arr.reduce((acc, item) => acc.set(item.id, ModelRecord(item)), new OrderedMap({}));
}

export function mapToArr(map) {
  return map.valueSeq().toArray();
}
