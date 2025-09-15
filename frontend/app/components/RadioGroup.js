



export default function RadioGroup  ({ question, name, options, value, onChange })   {
  return (
    <div>
      <label className="block text-lg font-medium text-gray-700 mb-3">{question}</label>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3">
        {options.map((option) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`${name}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor={`${name}-${option.value}`} className="mr-3 block text-md text-gray-800">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
