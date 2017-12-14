Zepto(function($){
    // setup image
    prepImage()
    // load json
    $.getJSON('index.json', displayRegions);
})

function prepImage () {
    const img = $('#comp img')
    const annotations = $('#annotations')
    annotations.width(img.width())
}

function displayRegions (json) {
    const regions = json.regions
    var xpos = 0;
    const el = $('#annotations')
    for(let i=0; i<regions.length; i++) {
        let region = regions[i]
        let html = '<div style="height:' + region.height + 'px; background-color: ' + region.bgcolor + '">'
        html += '<h1>' + region.title + '</h1>'
        html += '</div>'
        el.append(html)
    }
}

