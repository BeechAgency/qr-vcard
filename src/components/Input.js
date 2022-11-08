export default function Input( {name, value, label, handler, classes = '', type = 'text'} ) {

    return(
        <div className={`input-group ${classes}`}>
            <label htmlFor={'input-'+name}>{label}</label>
            {type !== 'checkbox' ? 
            <input type={type} value={value} name={name} id={'input-'+name} onChange={handler}  /> : 
            <input type={type} name={name} id={'input-'+name} onChange={handler} checked={ value  }  /> 
            }
        </div>
    );
}