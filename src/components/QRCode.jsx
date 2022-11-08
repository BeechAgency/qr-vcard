import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import Input from './Input';

export default function QRCode( { qrString } ) {
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
        
    return(
        <div className="qr-wrapper">
            <div className="group">
                <Input name="bgColor" label="Background" value={qrSettings.bgColor} handler={handleInputUpdate} classes="" type="color" />
                <Input name="fgColor" label="Foreground" value={qrSettings.fgColor} handler={handleInputUpdate} classes="" type="color" />
            </div>
            <div className="qr">
                <QRCodeSVG value={qrString} size={qrSettings.size} bgColor={qrSettings.bgColor} fgColor={qrSettings.fgColor} level={qrSettings.level} />
            </div>
            <a href="/" className="download" onClick={handleDownload}>DOWNLOAD</a>
        </div>
    )
}