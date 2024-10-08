function Button({ childern, version, type, isDisable }) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {childern}
    </button>
  );
}

Button.defaultProps = {
  childern: "Submit",
  version: "primary",
  type: "submit",
  isDisable: false,
};

export default Button;
