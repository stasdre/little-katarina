import supportsWebP from 'supports-webp'

async function checkSupport() {
    const supported = await supportsWebP

    if (supported) {
        document.body.classList.add('webp')
    } else {
        document.body.classList.add('no-webp')
    }
}
checkSupport()
