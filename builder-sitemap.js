import {ROUTES} from "./src/routes";

export const BuilderSitemap=()=>{
    let fs=require('browserify-fs');
    let routes=ROUTES;
    //const axios = require('axios');
    let header = '<?xml version="1.0" encoding="UTF-8"?>'
    let new_line = '\r\n'
    let urlset_start = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    let urlset_end = '</urlset>';
    let urls = '';
    let url_start = '<url><loc>';
    let url_end = '</loc></url>';
    /*axios.get('http://api_url_where_you_can_get_all_your_site_url').then((data) => {
        data.data.forEach(element => {
            let url = 'https://your-website-domain' + element.url
            urls = urls + new_line + url_start + url + url_end
        });
    }).then(()=>{*/
    (routes||[]).map((route)=>{
        console.log(route);
        let url = 'https://your-website-domain/' + route.path
        urls = urls + new_line + url_start + url + url_end
    })
    let final_str = header + new_line + urlset_start + new_line + urls + new_line + new_line + urlset_end;
    console.log(final_str);
    fs.writeFile('./public/sitemap.xml', final_str, function (err) {
        if (err) throw err;
        console.log('Saved!');
        //});
    })
}
