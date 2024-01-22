import { useField } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

interface DatePickerProps {
  label: string;
  name: string;
  type?: string;
}

const InputDatePicker = ({ label, name, type, ...props }: DatePickerProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}>
        {label}
      </label>
     
      <DatePicker
        {...field}
        {...props}
        id={name}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(date) => helpers.setValue(date)}
      />
      {meta.touched && meta.error && (
        <div className="error text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

export default InputDatePicker;
