// components/AdvancedButton.jsx
const AdvancedButton = ({
  onClick,
  children,
  className,
  disabled,
  loading,
}) => (
  <button
    onClick={onClick}
    className={`relative inline-flex items-center justify-center px-6 py-3 font-medium text-white transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 ${className} 
      ${
        disabled || loading
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      }`}
    disabled={disabled || loading}
  >
    {/* Show loader if loading is true */}
    {loading ? <Loader /> : <span className="relative z-10">{children}</span>}
  </button>
);

export default AdvancedButton;
