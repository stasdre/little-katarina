const apiUrl = ''

export const getDates = (from, to) =>
    fetch(`${apiUrl}/get-booking-dates/${from}/${to}`)
        .then(response =>
            response.status !== 200 ? Promise.reject(response) : response.json()
        )
        .catch(error => error)
