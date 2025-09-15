export default function SurveySection({ title, children }) {
  return (
    <div className="border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">{title}</h2>
      <div className="space-y-8">{children}</div>
    </div>
  );
}
