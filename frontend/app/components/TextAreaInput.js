export default function TextAreaInput({
  question,
  name,
  value,
  onChange,
  rows = 3,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-lg font-medium text-gray-700 mb-2"
      >
        {question}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        className="mt-1 block w-full rounded-md border-2 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}
