const ratings = [
  { value: 1, label: "خیلی کم" },
  { value: 2, label: "کم" },
  { value: 3, label: "متوسط" },
  { value: 4, label: "خوب" },
  { value: 5, label: "عالی" },
];

export default function RatingScale({ question, name, value, onChange }) {
  return (
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-3">
        {question}
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {ratings.map((rating) => (
          <div key={rating.value}>
            <input
              type="radio"
              id={`${name}-${rating.value}`}
              name={name}
              value={rating.value}
              checked={value === rating.value}
              onChange={(e) => onChange(Number(e.target.value))}
              className="sr-only"
            />
            <label
              htmlFor={`${name}-${rating.value}`}
              className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                value === rating.value
                  ? "border-blue-500 bg-blue-50 text-blue-800 shadow-md"
                  : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              <span className="text-2xl font-bold">{rating.value}</span>
              <span className="text-sm mt-1">{rating.label}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
