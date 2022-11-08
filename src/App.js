import { useState, useEffect } from 'react';
import './App.css';
import FieldsVCard from './components/FieldsVCard';
import TabsBody from './components/TabsBody';
import VCard from './components/VCard';
import QRCodeParser from './components/QRCodeParser';

import qrTypes from './lib/qrTypes';

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

    console.log(e);

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
        <h1>Make a QR Code</h1>
      </header>
      <main>
        <section>

          <div className="form">
            <div className="type-selector">
              <h3>TYPE</h3>
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

              {activeType === 'vcard' ? 
                <FieldsVCard activeTab={activeTab} cardData={cardData} handleInputUpdate={handleInputUpdate} /> :
                <TabsBody activeTab={activeTab} handler={handleInputUpdate} data={returnActiveTypeObject()} /> }
            </div>
          </div>

          <div className="result">
            <h3>QR CODE</h3>
            
            <div className="group">
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

