export default function getListStudentIds(array) {
  /* Returns an array of ids from a list of object */

  if (Array.isArray(array) === false
  || typeof array !== 'object'
  || array === null) {
    return [];
  }

  const ids = [];
  for (const element of array) {
    if (Object.keys(element).includes('id')) {
      ids.push(element.id);
    }
  }
  return ids;
}
