import Input from "./Input";
import Select from "./Select";

export default function TabsBody ( { activeTab, handler, data } ) {

    return(
        <div className="tab-body">
            <div className={`info group tab ${activeTab === 'Info' ? 'active' : ''}`}>
                <h4>{data.label}</h4>

                {data.fields.map( field => {
                    const { name, label, classes = '', type = 'input', options = [] } = field
                    
                    if ( type === 'select' ) {
                        return (<Select key={data.name + ":" + name} name={name} label={label} classes={classes} options={options} handler={handler} />)
                    }
                    if ( type === 'input' ) {
                        return (<Input key={data.name + ":" + name} name={name} label={label} classes={classes} handler={handler} /> )
                    }

                    if ( type === 'checkbox' ) {
                        return (<Input key={data.name + ":" + name} name={name} label={label} classes={classes} handler={handler} type={type} /> )
                    }

                    return false;
                })}

            </div>
        </div>
    )
}