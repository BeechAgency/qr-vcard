
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
      fields : [{ name : 'startDate', label: 'Start Date', classes: ''}, { name : 'endDate', label: 'Start Date', classes: ''}, { name : 'title', label: 'Event Title', classes: 'full'}]
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
        { name : 'name', label: 'Wifi Name', classes: 'full'},
        { name : 'password', label: 'Password', classes: 'full'},
        { name : 'authentication', label: 'Authentication', classes: '', type : 'select', options: [{ name: 'WPA', label: 'WPA'},{ name: 'WEP', label: 'WEP'},{ name: 'nopass', label: 'No Password'}]},
        { name : 'hidden', label: 'Hidden Network?', classes: '', type: 'select', options: [{ label: 'Hidden', name: 1}, { label: 'Visible', name: 0 } ]}
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
      fields : [
        { name : 'text', label: 'Tweet Content', classes: 'full'},
        { name : 'url', label: 'Link to a thing', classes: 'full'},
        { name : 'hashtags', label: 'Hashtags (no hash necessary)', classes: 'full'},
        { name : 'via', label: 'Via Twitter username', classes: 'full'},
        { name : 'related', label: 'Related Twitter username', classes: 'full'},
        ]
    }
  ];
    /* https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent */

    export default qrTypes