"use client";
import { useCallback, useRef, useEffect } from "react";

export default function Modal({ setOpenModal, info, setifno }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setifno((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(false);

    alert("اطلاعات شما ثبت شد!");
  };

  const overlay = useRef(null);
  const wrapper = useRef(null);

  const onDismiss = useCallback(() => {
    setOpenModal(false);
  }, []);

  const photoClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
      onClick={photoClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 p-6"
      >
        <div className="p-8 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            تکمیل این بخش کاملا اختیاری است
          </h2>
          <p className="mb-6 text-gray-600">
            اطلاعات را تکمیل کنید، در غیر این صورت از این بخش رد شوید
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">نام</label>
              <input
                type="text"
                name="name"
                value={info.name}
                onChange={handleChange}
                placeholder="نام خود را وارد کنید"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                نام خانوادگی
              </label>
              <input
                type="text"
                name="lastName"
                value={info.lastName}
                onChange={handleChange}
                placeholder="نام خانوادگی خود را وارد کنید"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">
                شماره موبایل
              </label>
              <input
                type="tel"
                name="mobile"
                value={info.mobile}
                onChange={handleChange}
                placeholder="مثال: 09123456789"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                ثبت اطلاعات
              </button>
              <button
                className="w-20 mr-5 bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105"
                onClick={onDismiss}
              >
                بستن
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
