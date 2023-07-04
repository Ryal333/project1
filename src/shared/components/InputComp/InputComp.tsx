import "./InputComp.css";

const Input = (props: {
  formValuesController;
  label?: string;
  value: string;
  name: string;
  regex?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "date"
    | "checkbox"
    | "radio"
    | "file";
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  format?: string;
}) => {
  const handleInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const { name, value } = input;
    props.formValuesController(value, name);
  };

  return (
    <div class="field_main_container">
      <label for="">
        {props.label}
        {props.required ? "*" : ""}
      </label>
      <div class="input_wrapper">
        {props.format === "interest" && (
          <span class="helper_text_right">%</span>
        )}
        {props.format === "amount" && <span class="helper_text_left">INR</span>}
        <input
          value={props.value}
          name={props.name}
          pattern={props.regex}
          type={props.type ? props.type : "text"}
          maxLength={props.maxLength}
          minLength={props.minLength}
          required={props.required ? props.required : false}
          onInput={handleInputChange}
        />
      </div>
      <small class="error_text">this is error</small>
    </div>
  );
};

export default Input;
