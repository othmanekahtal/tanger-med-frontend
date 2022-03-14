export default function ({
  type,
  labelValue,
  value,
  onChangeAction,
  placeholder,
}) {
  return (
    <div className="mb-6">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {labelValue}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChangeAction}
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder={placeholder}
        // required
      />
    </div>
  );
}
