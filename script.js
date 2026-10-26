window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 25) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const regionCategories = {
        // Frisbee countries (Gold)
        US: 'frisbee',
        GB: 'frisbee',

        // General travel countries (Dark Slate)
        FR: 'travel',
        CA: 'travel',
        JP: 'travel',
        AU: 'travel',
        IT: 'travel',
        ES: 'travel',
        BR: 'travel',
        MA: 'travel',
        CN: 'travel',
        SG: 'travel',
        TH: 'travel',
        HU: 'travel',
        AT: 'travel',
        CZ: 'travel',
        IE: 'travel'
    };

    new jsVectorMap({
        selector: '#world-map',
        map: 'world',
        zoomButtons: false,
        zoomOnScroll: false,

        /* 2. Map styling */
        regionStyle: {
            initial: { 
                fill: '#eaeaea', 
                stroke: '#ffffff', 
                strokeWidth: 0.6 
            },
            hover: {
                fillOpacity: 0.9
            }
        },
        series: {
            regions: [{
                attribute: 'fill',                    
                scale: {
                    frisbee: '#b37000', // Gold
                    travel: '#2e3d3d'   // Dark Slate
                },
                values: regionCategories
            }]
        },

        /* 3. Dynamic resize handler */
        onLoaded(mapInstance) {
            window.addEventListener('resize', function () {
                mapInstance.updateSize();
            });
        }
    });
});