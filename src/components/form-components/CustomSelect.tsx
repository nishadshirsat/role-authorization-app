import { Field, useField } from 'formik';

interface InputSelectProps {
    label: string;
    name: string;
    type?: string;
    list: string[]
}

const CustomSelect = ({ label, name, type, list }: InputSelectProps) => {
    const [field, meta] = useField(name);

    return (
        <div className="mb-4">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={name}>
                {label}
            </label>
            <Field
                className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                {...field} as="select" id={name}>
                <option value="" label="Select Company Type" />
                {list.map((type) => (
                    <option

                        key={type} value={type}>
                        {type}
                    </option>
                ))}
            </Field>
            {meta.touched && meta.error && (
                <div className="error text-red-500">{meta.error}</div>
            )}
        </div>
    );
};

export default CustomSelect;
