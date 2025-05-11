const ErrorMessage = ({ error }) => {
  if (!error) return null;

  return (
    <div className="w-full text-center p-4 rounded-lg bg-red-50 text-red-700 border-red-50 mb-5">
      <p className="text-lg font-bold">{error}</p>
    </div>
  );
};

export default ErrorMessage;
