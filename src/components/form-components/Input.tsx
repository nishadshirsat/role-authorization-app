import { useField } from 'formik';

interface InputProps {
  label: string;
  name: string;
  type: string;
}

const Input = ({ label, name, type }: InputProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}>
        {label}
      </label>
      <input
        className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
        {...field}
        id={name}
        type={type} />
      {meta.touched && meta.error && (
        <div className="error text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

export default Input;
