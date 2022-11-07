import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { useState } from 'react';
import Input from './Input';

export default function VCard( { jsonCard } ) {
    const [qrSettings, setQrSettings] = useState({
        bgColor : '#000000',
        fgColor : '#ffffff',
        level : 'L',
        size : 512,
        render : 'svg'
    });


    const handleInputUpdate = (e) => {
        const { name, value } = e.target;
        console.log( name, value );

        const update = {};
        update[name] = value;

        setQrSettings(current => {
            // 👇️ using spread syntax (...)
            return {
                ...current,
                ...update
            };
        });
  } 

    const handleDownload = (e) => {
        const download = e.currentTarget;
        let image;

        if(qrSettings.render === 'canvas') {
            image = document.querySelector(".qr > *").toDataURL("image/png")
                .replace("image/png", "image/octet-stream");

            download.setAttribute("href", image);
        } else {
            image = document.querySelector(".qr svg");
            image.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

            const blob = new Blob([image.parentElement.innerHTML]);
            download.setAttribute('href', window.URL.createObjectURL(blob));
            download.setAttribute('download', 'your-vcard-qr.svg');
        }
    }

    const { 
        firstName, 
        lastName, 
        email, workEmail, 
        organization, 
        cellPhone, workPhone,
        photo,
        timeZone, 
        url,
        workUrl,
        title,
        role,
        street,
        city,
        stateProvince,
        postalCode,
        country,
        facebook,
        linkedIn,
        twitter,
        instagram,
        tiktok,
        custom
    } = jsonCard;

    let vcardString = `BEGIN:VCARD\nVERSION:4.0\n`
        vcardString += `FN:${firstName} ${lastName}\n`
        vcardString += `N:${lastName};${firstName}\n`
        vcardString += `TEL;TYPE;cell:${cellPhone}\n`
        vcardString += `TEL;TYPE;work:${workPhone}\n`
        vcardString += `EMAIL;TYPE;Home:${email}\n`
        vcardString += `EMAIL;TYPE;Work:${workEmail}\n`
        vcardString += `ORG:${organization}\n`
        vcardString += `TITLE:${title}\n`
        vcardString += `ROLE:${role}\n`
        vcardString += `PHOTO;JPEG:${photo}\n`
        vcardString += `URL;TYPE;Website:${url}\n`
        vcardString += `URL;TYPE;Business Website:${workUrl}\n`
        vcardString += `URL;TYPE;Facebook:${facebook}\n`
        vcardString += `URL;TYPE;LinkedIn:${linkedIn}\n`
        vcardString += `URL;TYPE;Twitter:${twitter}\n`
        vcardString += `URL;TYPE;Instagram:${instagram}\n`
        vcardString += `URL;TYPE;Tiktok:${tiktok}\n`
        vcardString += `ADR;TYPE;work:${street};${city};${stateProvince};${postalCode};${country}\n`
        //vcardString += `BDAY:${birthday}\n`
        vcardString += `END:VCARD`
        
    return(
        <div className="qr-wrapper">
            <div className="group">
                <Input name="bgColor" label="Background" value={qrSettings.bgColor} handler={handleInputUpdate} classes="" type="color" />
                <Input name="fgColor" label="Foreground" value={qrSettings.fgColor} handler={handleInputUpdate} classes="" type="color" />
                {/*<div className="input-group">
                    <label htmlFor='type'>Render Type</label>
                    <select>
                        <option>SVG</option>
                        <option>Canvas</option>
                    </select>
                </div>*/}
            </div>

            <div class="qr">
                <QRCodeSVG value={vcardString} size={qrSettings.size} bgColor={qrSettings.bgColor} fgColor={qrSettings.fgColor} level={qrSettings.level} />
            </div>
            
            <a href="/" className="download" onClick={handleDownload}>DOWNLOAD</a>

        </div>
    )
}