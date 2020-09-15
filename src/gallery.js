import 'svgxuse'
import './assets/js/webp-checker'
import './assets/js/burger'

import Glide from '@glidejs/glide'

const glide = new Glide('.glide', {
    type: 'carousel',
    focusAt: 'center',
    perView: 1,
    autoplay: 3000,
    gap: 0,
    hoverpause: true,
})

glide.mount()
