function sortOrder(key, order = "asc") {
  return function (a, b) {
    let itemA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    let itemB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

    if (key === "date") {
      itemA = new Date(a[key]);
      itemB = new Date(b[key]);
    }

    let comparisonValue = 0;
    if (itemA > itemB) comparisonValue = 1;
    else if (itemA < itemB) comparisonValue = -1;

    return order === "desc" ? comparisonValue * -1 : comparisonValue;
  };
}

export { sortOrder };
