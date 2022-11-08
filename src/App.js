import { useState, useEffect } from 'react';
import './App.css';
import FieldsVCard from './components/FieldsVCard';
import Input from './components/Input';
import TabsBody from './components/TabsBody';
import VCard from './components/VCard';
import QRCodeParser from './components/QRCodeParser';

function App() {
  const [cardData, setCardData] = useState(templateCard);
  const [qrData, setQrData] = useState({});

  const [activeTab, setActiveTab] = useState('Personal');
  const [tabs, setTabs] = useState(['Personal', 'Work', 'Address', 'Social']);
  
  const [activeType, setActiveType] = useState('vcard');

  useEffect( () => {
    activeType === 'vcard' ? setTabs(['Personal', 'Work', 'Address', 'Social']) : setTabs(['Info'])
    activeType === 'vcard' ? setActiveTab('Personal') : setActiveTab('Info')

  }, [activeType, setActiveTab]); 

  const handleInputUpdate = (e) => {
    const { name, value } = e.target;
    //console.log( name, value );

    const update = {};
    update[name] = value;

    if(activeType === 'vcard') {
      setCardData(current => {
        // 👇️ using spread syntax (...)
        return {
          ...current,
          ...update
        };
      });
    } else {
      setQrData(current => {
        // 👇️ using spread syntax (...)
        return {
          ...current,
          ...update
        };
      });
    }
  } 

  const returnActiveTypeObject = () => {
    const activeObj = qrTypes.find( e => e.name === activeType )

    return activeObj
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Make a vCard</h1>
      </header>
      <main>
        <section>

          <div className="form">
            <div className="type-selector">
              <h3>DETAILS</h3>
              <select onChange={(e) => { setActiveType(e.target.value) }}>
                {qrTypes.map( t => {
                  return <option key={t.name} value={t.name}>{t.label}</option>
                })}
              </select>
            </div>

            <h3>DETAILS</h3>

            <div className="tabs-wrapper">

              <ul className="tab-header">
                {tabs.map( tab => {
                  return(<li key={tab} className={`tab-item ${activeTab === tab ? 'active' : ''}`} onClick={e=>{setActiveTab(tab)}}>{tab}</li>)
                } )}
              </ul>

              <FieldsVCard activeTab={activeTab} cardData={cardData} handleInputUpdate={handleInputUpdate} />
              <TabsBody activeTab={activeTab} handler={handleInputUpdate} data={returnActiveTypeObject()} />
            </div>
          </div>

          <div className="result">
            <h3>Card</h3>
            
            <div className="group">
              <h4>QR Code</h4>
              {activeType === 'vcard' ? <VCard jsonCard={cardData} /> : <QRCodeParser type={activeType} data={qrData} /> }
            </div>

            <pre htmlstyle="display: none;" className="hidden">
            {JSON.stringify(cardData,  null, 4)}
            </pre>
          </div>

        </section>
      </main>
      <footer>
        <p>This is a footer.</p>
      </footer>
    </div>
  );
}

export default App;

/* Schema */
const  templateCard = {
  lastName: 'Smith',
  firstName: 'Philippa',
  organization: 'ACME Corporation',
  workPhone: '',
  cellPhone: '',
  birthday: "20140112",
  title: 'Crash Test Dummy',
  role: 'Crash Testing',
  email: 'philippa.smith@testmail',
  workEmail: 'philippa.smith@workmail',
  url: 'http://philippa.smith',
  workUrl: 'http://acemecompany/philippa.smith',

  photo : '',

  street: '2/21 Bolton St',
  city: 'Newcastle',
  stateProvince: 'NSW',
  postalCode: '2300',
  country: 'Australia',

  note: 'Notes',

  facebook: '',
  linkedIn: '',
  twitter: '',
  instagram: '',
  tiktok: '',
  custom: ''
};


/*
  QR Types
*/
const qrTypes = [
  { 
    name : 'vcard' , 
    label : 'VCard',
    fields : []
  },
  { 
    name : 'telephone' , 
    label : 'Telephone',
    fields : [{ name : 'phone', label: 'Phone Number', classes: ''}]
  },
  { 
    name : 'calendar' , 
    label : 'Calendar',
    fields : [{ name : 'startDate', label: 'Start Date', classes: ''}, { name : 'startDate', label: 'Start Date', classes: ''}, { name : 'title', label: 'Event Title', classes: 'full'}]
  },
  { 
    name : 'email' , 
    label : 'Email',
    fields : [{ name : 'emailTo', label: 'Email To', classes: 'full'},{ name : 'subject', label: 'Subject Line', classes: 'full'},{ name : 'message', label: 'Message', classes: 'full'}]
  },
  { 
    name : 'sms' , 
    label : 'SMS Message',
    fields : [{ name : 'phoneNumber', label: 'Phone', classes: 'full'},{ name : 'message', label: 'Message', classes: 'full'}]
  },
  { 
    name : 'wifi' , 
    label : 'WiFi',
    fields : [
      { name : 'authentication', label: 'Authentication', classes: '', type : 'select', options: [{ name: 'WPA', label: 'WPA'},{ name: 'WEP', label: 'WEP'},{ name: 'nopass', label: 'No Password'}]},
      { name : 'name', label: 'Wifi Name', classes: 'full'},
      { name : 'password', label: 'Password', classes: 'full'},
      { name : 'hidden', label: 'Hidden Network?', classes: '', type: 'checkbox'}
    ]
  },
  { 
    name : 'youtube' , 
    label : 'Youtube',
    fields : [{ name : 'videoId', label: 'Youtube Video Id', classes: 'full'}]
  },
  { 
    name : 'instagram' , 
    label : 'Instagram',
    fields : [{ name : 'username', label: 'Username', classes: 'full'}]
  },
  { 
    name : 'twitter' , 
    label : 'Twitter',
    fields : [{ name : 'username', label: 'Username', classes: 'full'}]
  }, 
  { 
    name : 'twitterMessage' , 
    label : 'Twitter Message',
    fields : [{ name : 'content', label: 'Tweet Content', classes: 'full'}]
  }
];