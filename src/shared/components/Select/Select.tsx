import './Select.css'

const Select = (props:{formValuesController, value : string, name : string}) => {

  const handleInputChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const { name, value } = input;
    props.formValuesController(value, name)
  }
  return (
    <div class="field_main_container">
        <label for="">Name</label>
        <select name="" id="" onChange={handleInputChange}>
            <option value="">Data1</option>
            <option value="">Data2</option>
            <option value="">Data3</option>
        </select>
        <small class="error_text">this is error</small>
    </div>  
  )
}

export default Select