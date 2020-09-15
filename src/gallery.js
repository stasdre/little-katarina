import 'svgxuse'
import './assets/js/webp-checker'
import './assets/js/burger'

import Glide from '@glidejs/glide'

const glide = new Glide('.glide', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
    autoplay: 3000,
    gap: 50,
    hoverpause: true,
    breakpoints: {
        1200: { perView: 3 },
        1024: { perView: 2 },
        800: { perView: 1 },
    },
})

glide.mount()
