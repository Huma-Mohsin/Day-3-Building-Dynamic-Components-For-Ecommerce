"use client"
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const items = [
  { id: 1, name: 'Nike Air Max' },
  { id: 2, name: 'Nike Running Shoes' },
  { id: 3, name: 'Nike T-shirt' },
  { id: 4, name: 'Nike Hat' },
  // Add more items as necessary
];

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items); // Initially show all items

  // Filter the items based on the search term
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);

    // Filter items based on search term (case-insensitive)
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredItems(filtered); // Update filtered items
  };

  return (
    <div className="flex flex-col items-center relative">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-xs sm:max-w-sm">
        <CiSearch className="text-gray-500 text-lg" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-sm outline-none pl-2 w-full"
          value={searchTerm}
          onChange={handleSearchChange} // Handle input change
          aria-label="Search"
        />
      </div>

      {/* Display Filtered Items only when there is a search term */}
      {searchTerm && (
        <div className="absolute top-full mt-2 w-full max-w-xs sm:max-w-sm bg-white shadow-lg rounded-lg z-10">
          {filteredItems.length > 0 ? (
            <ul className="max-h-60 overflow-y-auto border border-gray-300 rounded-lg">
              {filteredItems.map((item) => (
                <li key={item.id} className="p-2 border-b cursor-pointer hover:bg-gray-100">
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-2 text-gray-500">No items found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
