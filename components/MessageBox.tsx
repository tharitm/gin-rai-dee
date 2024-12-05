import React from 'react';
import { FormattedResponse } from './Hero';


interface MessageBoxProps {
  items: FormattedResponse[];
}

const MessageBox: React.FC<MessageBoxProps> = ({ items }) => {
  return (
    <div className="flex justify-start mb-4 w-full">
      <div className="px-4 py-3 bg-zinc-800 rounded-2xl shadow-xl w-full">
        {items.map((item, index) => (
          <div key={index} className="flex items-start py-5">
            <div className="w-[5rem] h-8 flex items-start justify-start text-zinc-300">
              {item.icon}
            </div>
            <div className="ml-3 text-md font-semibold text-zinc-300">
              {item.menu}
              <div className="mt-2 text-sm text-zinc-500">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default MessageBox;
