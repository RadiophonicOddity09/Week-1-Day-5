var list = [];
function newList(num) {
 list.push(num);
}
function sortList() {
  list.sort(function(a, b) {
    return a - b;
  });
  return list;
}
module.exports = {
 newList: newList,
 sortList: sortList,
};
