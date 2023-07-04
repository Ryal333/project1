import './SelectComp.css';
export type optionsObjType = {
    value: string;
};
const SelectComp = (props: {
    formValuesController?: (value: string, name: string) => any;
    setStateFunc?: (value: string) => any;
    value: string;
    name: string;
    optionData: Array<optionsObjType>;
    label?: string;
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
            <select
                name={props.name}
                id=""
                onChange={handleInputChange}
                required={props.required ? props.required : false}
                value={props.value}
            >
                {props.optionData.map((option, key) => {
                    return <option value={option.value}>{option.value}</option>;
                })}
            </select>
            <small class="error_text">this is error</small>
        </div>
    );
};

export default SelectComp;
