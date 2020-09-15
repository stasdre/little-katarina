const apiUrl = ''

export const getDates = (from, to) =>
    fetch(`${apiUrl}/get-booking-dates/${from}/${to}`)
        .then(response =>
            response.status !== 200 ? Promise.reject(response) : response.json()
        )
        .catch(error => error)

export const bookTime = data =>
    fetch(`${apiUrl}/booking-time`, {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute('content'),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response =>
            response.status !== 200 ? Promise.reject(response) : response.json()
        )
        .catch(error => error)
