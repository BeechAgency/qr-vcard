import QRCode from "./QRCode";

export default function QRCodeParser( { type, data } ) {

    let output = '';

    switch(type) {
        case 'telephone':
            output =  `TEL:${data.phone}`
            break;
        case 'calendar':
            output =  `BEGIN:VCALENDAR\nBEGIN:VEVENT\nDTSTART:${data.startDate}\nDTEND:${data.endDate}\nSUMMARY:${data.title}\nEND:VEVENT\nEND:VCALENDAR`
            break;
        case 'email':
            output =  `MATMSG:TO:${data.emailTo};SUB:${data.subject};BODY:${data.message};;`
            break;
        case 'sms':
            output =  `smsto:${data.phoneNumber}:${data.message}`
            break;
        case 'wifi':
            output =  `WIFI:T:${data.authentication};S:${data.name};P:${data.password};H:${data.hidden};`
            break;
        case 'youtube':
            output =  `youtube://${data.videoId}`
            break;
        case 'instagram':
            output = `https://instagram.com/${data.username}`
            break;
        case 'twitter':
            output =  `https://twitter.com/${data.username}`
            break;
        case 'twitterMessage':
            output =  `https://twitter.com/intent/tweet?text=${data.text}&url=${data.url}&hashtags=${data.hashtags}&via=${data.via}&related=${data.related}`
            break;
        case 'location':
            output =   `http://maps.google.com/maps?q=${data.lat},${data.long}`
            break;
        default:
            break;
    }

    return <QRCode qrString={output} />
}