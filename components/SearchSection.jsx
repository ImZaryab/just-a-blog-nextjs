function SearchSection() {
  return (
    <div className="flex items-center text-slate-600 dark:text-slate-500">
      <div className="text-md sm:text-2xl lg:text-4xl py-8 ml-4 sm:ml-12 mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <h2 className="text-md sm:text-2xl lg:text-4xl">
        Looking for something? Search it here...
      </h2>
    </div>
  );
}

export default SearchSection;
