


const telephone = `TEL:${phone_number}`

const geolocation = `http://maps.google.com/maps?q=${lat},${long}`

const calendar = `BEGIN:VCALENDAR\nBEGIN:VEVENT\nDTSTART:${startDate}\nDTEND:${endDate}\nSUMMARY:${title}\nEND:VEVENT\nEND:VCALENDAR`

const emailMessage = `MATMSG:TO:${emailTo};SUB:${subject};BODY:${message};;`

const sms = `smsto:${phoneNumber}:${message}`

/*
    auth options: nopass, WPA or WEB
    hidden: bool, indicates if network is hidden or not
*/
const wifi = `WIFI:T:${authentication};S:${name};P:${password};H:${hidden};`

const youtube = `youtube://${videoId}`

const instagram = `https://instagram.com/${username}`

const twitter = `https://twitter.com/${username}`

const twitterMessage = `https://twitter.com/intent/tweet?text=${content}`