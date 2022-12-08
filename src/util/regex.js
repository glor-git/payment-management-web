export function checkNumber(e) {
  return e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}