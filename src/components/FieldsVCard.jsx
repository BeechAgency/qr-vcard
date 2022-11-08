import Input from "./Input"

export default function FieldsVCard({ activeTab, cardData, handleInputUpdate }) {
    
    return(
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
    )
}