export default function Select( {name, options = [], label, handler, classes = ''} ) {

    return(
        <div className={`input-group ${classes}`}>
            <label htmlFor={'input-'+name}>{label}</label>
            <select name={name} id={'select-'+name} onChange={handler} >
                {options.map( t => {
                    return <option key={t.name} value={t.name}>{t.label}</option>
                })}
            </select>
        </div>
    );
}