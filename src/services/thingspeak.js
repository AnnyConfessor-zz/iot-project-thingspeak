const API_URL = 'https://api.thingspeak.com'

export const getLedStatus = () =>
    fetch(`${API_URL}/channels/1178610/fields/1.json?results=1`, {
        method: 'GET'
    }).then(res => res.json())

export const updateLedStatus = status =>
    fetch(`${API_URL}/update?api_key=PXESGGPWX8ER3CNV&field1=${status}`, {
        method: 'GET'
    })