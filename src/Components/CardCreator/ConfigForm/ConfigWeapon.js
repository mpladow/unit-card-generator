const ConfigDynamicList = (props) => {

    const valueChangeHandler = (event) => {
    }

    return <div>
        <div className='label'><label>{props.formFieldLabel}</label></div>
        <div className='form-container flex row'>
            <div className='flex column'>
                <div className='label'><label>Name</label></div>
                <div className='input'>
                    <input onChange={valueChangeHandler} id='tactical' type='text' value={props.weapon.name}></input>
                </div>
            </div>
            <div className='flex column'>
                <div className='label'><label>Range</label></div>
                <div className='input'>
                    <input onChange={valueChangeHandler} id='tactical' type='text' value={props.weapon.range}></input>
                </div>
            </div>
            <div className='flex column'>
                <div className='label'><label>Moving ROF</label></div>
                <div className='input'>
                    <input onChange={valueChangeHandler} id='tactical' type='text' value={props.weapon.movingRof}></input>
                </div>
            </div>
        </div>
    </div>
}

export default ConfigDynamicList;