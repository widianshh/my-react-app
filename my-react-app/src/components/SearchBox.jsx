
const SearchBox = ({ children }) => {
  return (
    <div className="flex justify-start mt-4">
      <div className="bg-custom-gray shadow-custom-inset p-4 w-full sm:w-[600px] md:w-[800px] lg:w-[1060px] rounded-[52px]">
        {children}
      </div>
    </div>
  );
};

export default SearchBox;
