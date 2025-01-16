const SearchComp = ({ searchStr, setSearchStr, handleSearchStr }) => {
  return (
    <input
      placeholder="Search by name"
      value={searchStr}
      onChange={(e) => {
        setSearchStr((prev) => e.target.value);
        handleSearchStr(e);
      }}
    />
  );
};

export default SearchComp;
