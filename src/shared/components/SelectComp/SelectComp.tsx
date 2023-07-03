import './SelectComp.css';
type obj = {
    value: string;
};
const SelectComp = (props: {
    formValuesController;
    value: string;
    name: string;
    optionData: Array<obj>;
    label?: string;
    required?: boolean;
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
