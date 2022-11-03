export default function Input( {name, value, label, handler, classes = '', type = 'text'} ) {

    return(
        <div className={`input-group ${classes}`}>
            <label htmlFor={'input-'+name}>{label}</label>
            <input type={type} value={value} name={name} id={'input-'+name} onChange={handler} />
        </div>
    );
}