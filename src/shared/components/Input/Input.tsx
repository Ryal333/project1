
const Input = (props:{formValuesController, value : string, name : string, regex? : string, type : string, maxLength? : number, minLength? : number, required : boolean,}) => {

  const handleInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const { name, value } = input;
    props.formValuesController(value, name)
  }

  return (
    <div class="field_main_container">
        <label for="">Name</label>
        <input value={props.value} name={props.name} pattern={props.regex} type={props.type} maxLength={props.maxLength} minLength={props.minLength} required={props.required}  onChange={handleInputChange} />
        <small class="error_text">this is error</small>
    </div>  
  )
}

export default Input