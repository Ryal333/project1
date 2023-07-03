import './TextAreaComp.css';

const TextAreaComp = (props: {
    formValuesController;
    label?: string;
    value: string;
    name: string;
    regex?: string;
    type?:
        | 'text'
        | 'email'
        | 'password'
        | 'number'
        | 'date'
        | 'checkbox'
        | 'radio'
        | 'file';
    maxLength?: number;
    minLength?: number;
    required?: boolean;
}) => {

    const handleInputChange = (event: Event) => {
        const input = event.target as HTMLTextAreaElement;
        const { name, value } = input;
        props.formValuesController(value, name)
      }

    return (
        <div class="field_main_container">
            <label for="">
                {props.label}
                {props.required ? '*' : ''}
            </label>
            <textarea
                value={props.value}
                name={props.name}
                pattern={props.regex}
                type={props.type ? props.type : 'text'}
                maxLength={props.maxLength}
                minLength={props.minLength}
                required={props.required ? props.required : false}
                onInput={handleInputChange}
            />
            <small class="error_text">this is error</small>
        </div>
    );
};

export default TextAreaComp;
