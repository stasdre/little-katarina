const apiUrl = ''

export const getDates = (from, to) =>
    fetch(`${apiUrl}/admin/get-booking/${from}/${to}`)
        .then(response =>
            response.status !== 200 ? Promise.reject(response) : response.json()
        )
        .catch(error => error)

export const setDate = date =>
    fetch(`${apiUrl}/admin/set-booking/${date}`, {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute('content'),
        },
    })
        .then(response =>
            response.status !== 200 ? Promise.reject(response) : response.json()
        )
        .catch(error => error)

export const unsetDate = date =>
    fetch(`${apiUrl}/admin/uncheck-booking/${date}`, {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute('content'),
        },
    })
        .then(response =>
            response.status !== 200 ? Promise.reject(response) : response.json()
        )
        .catch(error => error)
