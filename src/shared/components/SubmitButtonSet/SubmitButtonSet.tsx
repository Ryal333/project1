import './SubmitButtonSet.css';

const SubmitButtonSet = (props: { option: 'Add' | 'Edit' | 'View' }) => {
    return (
        <>
            <div class="df aic jcc">
                <button class="bttn exit ">Exit</button>
                {props.option !== 'View' && (
                    <>
                        {props.option === 'Edit' && (
                            <button class="save bttn" type={'submit'}>
                                Save
                            </button>
                        )}
                        {props.option === 'Add' && (
                            <button class="add bttn" type={'submit'}>
                                Add
                            </button>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default SubmitButtonSet;
