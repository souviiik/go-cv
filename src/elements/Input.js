const Input = ({ label, type, name, value, handleChange }) => {
  return (
    <div className="control mb-3">
      <label>{label}: </label>
      <input
        className="input"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
