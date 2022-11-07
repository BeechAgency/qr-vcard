import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import VCard from './components/VCard';

function App() {
  const [cardData, setCardData] = useState(templateCard);
  const [activeTab, setActiveTab] = useState('Personal');

  const tabs = ['Personal', 'Work', 'Address', 'Social'];

  const handleInputUpdate = (e) => {
    const { name, value } = e.target;
    //console.log( name, value );

    const update = {};
    update[name] = value;

    setCardData(current => {
      // 👇️ using spread syntax (...)
      return {
        ...current,
        ...update
      };
    });
  } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Make a vCard</h1>
      </header>
      <main>
        <section>

          <div className="form">

            <h3>DETAILS</h3>

            <div className="tabs-wrapper">

              <ul className="tab-header">
                {tabs.map( tab => {
                  return(<li key={tab} className={`tab-item ${activeTab === tab ? 'active' : ''}`} onClick={e=>{setActiveTab(tab)}}>{tab}</li>)
                } )}
              </ul>
              <div className="tab-body">

                <div className={`personal group tab ${activeTab === 'Personal' ? 'active' : ''}`}>
                  <h4>Personal</h4>
                  <Input name="firstName" label="First Name" value={cardData.firstName} handler={handleInputUpdate} />
                  <Input name="lastName" label="Last Name" value={cardData.lastName} handler={handleInputUpdate} />

                  <Input name="cellPhone" label="Mobile" value={cardData.cellPhone} handler={handleInputUpdate} />
                  <Input name="email" label="Email" value={cardData.email} handler={handleInputUpdate} />

                  <Input name="url" label="Website" value={cardData.url} handler={handleInputUpdate} classes="full" />
                  <Input name="photo" label="Image Url" value={cardData.imageUrl} handler={handleInputUpdate} classes="full" />
                </div>

                <div className={`work group tab ${activeTab === 'Work' ? 'active' : ''}`}>
                  <h4>Work</h4>
                  <Input name="organization" label="Organisation" value={cardData.organization} handler={handleInputUpdate} classes="full" />
                  <Input name="title" label="Title" value={cardData.title} handler={handleInputUpdate} classes="" />
                  <Input name="role" label="Role" value={cardData.role} handler={handleInputUpdate} classes="" />

                  <Input name="workPhone" label="Work Phone" value={cardData.workPhone} handler={handleInputUpdate} />
                  <Input name="workEmail" label="Work Email" value={cardData.workEmail} handler={handleInputUpdate} />
                  <Input name="workUrl" label="Work URL" value={cardData.workUrl} handler={handleInputUpdate} classes="full" />
                </div>

                <div className={`address group tab ${activeTab === 'Address' ? 'active' : ''}`}>
                  <h4>Address</h4>
                  <Input name="street" label="Street" value={cardData.street} handler={handleInputUpdate} classes="full" />
                  <Input name="city" label="Suburb" value={cardData.city} handler={handleInputUpdate} />
                  <Input name="stateProvince" label="State" value={cardData.stateProvince} handler={handleInputUpdate} />
                  <Input name="postalCode" label="Postcode" value={cardData.postalCode} handler={handleInputUpdate} />
                  <Input name="country" label="Country" value={cardData.country} handler={handleInputUpdate} />
                </div>

                <div className={`social group tab ${activeTab === 'Social' ? 'active' : ''}`}>
                  <h4>Social</h4>
                  <Input name="facebook" label="Facebook" value={cardData.facebook} handler={handleInputUpdate} />
                  <Input name="linkedIn" label="LinkedIn" value={cardData.linkedIn} handler={handleInputUpdate} />
                  <Input name="twitter" label="Twitter" value={cardData.twitter} handler={handleInputUpdate} />
                  <Input name="instagram" label="Instagram" value={cardData.instagram} handler={handleInputUpdate} />
                  <Input name="tiktok" label="TikTok" value={cardData.tiktok} handler={handleInputUpdate} />
                </div>
              </div>
            </div>
          </div>

          <div className="result">
            <h3>Card</h3>
            <div className="group">
              <h4>QR Code</h4>
              <VCard jsonCard={cardData} />
            </div>

            <pre htmlStyle="display: none;" className="hidden">
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