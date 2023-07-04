import SelectComp, { optionsObjType } from '../SelectComp/SelectComp';
import './OptionSelector.css';

const OptionSelector = (props: {
    value: string;
    setStateFunc: (value: string) => void;
}) => {
    const val = 'hu';
    const options = [{ value: 'Add' }, { value: 'Edit' }, { value: 'View' }];
    const formValuesController = () => {};
    return (
        <>
            <SelectComp
                name={'option'}
                value={props.value}
                label={'Option'}
                optionData={options}
                setStateFunc={props.setStateFunc}
            />
        </>
    );
};

export default OptionSelector;
