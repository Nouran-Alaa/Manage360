/* eslint-disable react/prop-types */
import { useState } from 'react';
import { colorMap } from '../../../helper/helper';

const TagsInput = ({ tags, setTags, title }) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput('');
    } else if (e.key === 'Backspace' && !input) {
      setTags(tags.slice(0, tags.length - 1));
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-wrap items-center border border-gray-300 rounded-md p-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className={
            title === 'color'
              ? `flex items-center ${colorMap[tag]} px-2 py-[3px] mr-2 mb-2 rounded-full text-sm`
              : 'flex items-center bg-indigo-100 text-indigo-600 px-2 py-[3px] mr-2 mb-2 rounded-full text-sm'
          }
        >
          <span>{tag}</span>
          <button
            type="button"
            onClick={() => removeTag(index)}
            className="ml-2 text-indigo-500 hover:text-indigo-700 focus:outline-none"
          >
            &times;
          </button>
        </div>
      ))}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={
          title ? `Press Enter to add ${title}` : 'Press Enter to add Tag'
        }
        className="flex-1 min-w-[150px] outline-none border-none focus:ring-0 placeholder:text-sm"
      />
    </div>
  );
};

export default TagsInput;
