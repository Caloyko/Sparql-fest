import React, { useState, useRef, useEffect } from 'react';

const MultiSelectDropdown = ({ options, selectedOptions, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter(item => item !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-60" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left text-sm"
      >
        <span className="block truncate">
          {selectedOptions.length > 0 ? selectedOptions.join(', ') : (placeholder || 'Select options')}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          ▼
        </span>
      </button>

      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-sm ring-1 ring-black ring-opacity-5 overflow-auto">
          {options.map(option => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-orange-500 hover:text-white ${
                selectedOptions.includes(option) ? 'font-semibold text-orange-700' : ''
              }`}
            >
              {option}
              {selectedOptions.includes(option) && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-orange-600">
                  ✓
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown;
