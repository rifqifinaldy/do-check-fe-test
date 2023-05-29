interface IInputProps {
  label: string;
  type: "text" | "number" | "date";
  required: boolean;
  value: string;
}

const Input: React.FC<IInputProps> = ({ label, type, required, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input value={value} type={type} required={required} />
    </div>
  );
};

export default Input;
