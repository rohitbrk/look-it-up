const SearchComp = ({ searchStr, handleFilteredList }) => {
  return (
    <input
      placeholder="Search by name"
      value={searchStr}
      onChange={(e) => {
        handleFilteredList(e);
      }}
    />
  );
};

export default SearchComp;
