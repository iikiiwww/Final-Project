import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white p-6 shadow-md rounded-md duration-200 w-[350px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-lg font-bold">Order Now</h1>
                <IoCloseOutline className="text-2xl cursor-pointer" onClick={() => setOrderPopup(false)} />
              </div>
              {/* Form */}
              <div>
                <label className="block mb-2">
                  <span className="block text-sm font-medium">Name</span>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2 mb-2"
                  />
                </label>
                <label className="block mb-2">
                  <span className="block text-sm font-medium">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2 mb-2"
                  />
                </label>
                <label className="block mb-2">
                  <span className="block text-sm font-medium">Address</span>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2 mb-2"
                  />
                </label>
                <label className="block mb-2">
                  <span className="block text-sm font-medium">Type Handphone</span>
                  <input
                    type="text"
                    placeholder="Type Handphone"
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2 mb-2"
                  />
                </label>
                <label className="block mb-4">
                  <span className="block text-sm font-medium">Color</span>
                  <input
                    type="text"
                    placeholder="Color"
                    className="w-full rounded-full border bg-primary/70 text-black px-4 py-2"
                  />
                </label>
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 text-white py-2 px-6 rounded-full">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
