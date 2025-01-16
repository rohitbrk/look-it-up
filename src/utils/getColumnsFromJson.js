const getColumnsFromJson = (initialData) => {
  let columns_ = [];
  for (let key in initialData[0]) {
    columns_.push(key);
  }
  let columnArray = [];
  for (let key of columns_) {
    columnArray.push({ name: key, checked: true });
  }
  return columnArray;
};

export { getColumnsFromJson };
