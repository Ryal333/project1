import './InputComp.css';

const Input = (props: {
    formValuesController?;
    setStateFunc?;
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
    if (!props.formValuesController && !props.setStateFunc) {
        console.warn(
            'At least one of formValuesController or setStateFunc must be provided.'
        );
    }

    const handleInputChange = (event: Event) => {
        if (props.setStateFunc && !props.formValuesController) {
            const input = event.target as HTMLInputElement;
            const { value } = input;
            props.setStateFunc(value);
        } else {
            const input = event.target as HTMLInputElement;
            const { name, value } = input;
            props.formValuesController(value, name);
        }
    };

    return (
        <div class="field_main_container">
            <label for="">
                {props.label}
                {props.required ? '*' : ''}
            </label>
            <input
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

export default Input;
