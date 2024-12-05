import React, { useState } from 'react';
import { useFoodStore } from '@/lib/useFoodStore';

const MessageBox: React.FC = () => {
  const { items } = useFoodStore();
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent((prev) => !prev);
  };

  return (
    <div className="flex justify-start mb-4 w-full">
      <div className="px-4 py-3 bg-zinc-800 rounded-2xl shadow-xl w-full">
        <div className="max-h-[50dvh] overflow-y-auto"> {/* เพิ่ม scroll bar */}
          {items.map((item, index) => (
            <div key={index} className="flex items-start py-5">
              <div className="w-[4rem] h-8 flex items-start justify-center text-zinc-300">
                {item.icon}
              </div>
              <div className="text-md font-semibold text-zinc-300">
                {item.menu}
                <div className="mt-2 text-sm text-zinc-500">
                  {showFullContent ? item.description : `${item.description.slice(0, 100)}...`}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={toggleContent}
          className="mt-4 text-blue-400 hover:underline text-right w-full"
        >
          <span className="flex justify-end text-sm">{showFullContent ? 'Read Less' : 'Read More'}</span>
        </button>
      </div>
    </div>
  );
};

export default MessageBox;
