import {ROUTES} from "./routes";
import fs from 'browserify-fs';

export const BuilderSitemap=()=>{
    let routes=ROUTES;
    fs.chmod('../src','777',function (){
        console.log('permisos insertados');
    })

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
        let url = 'https://www.nutrigeli.com' + route.path
        urls = urls + new_line + url_start + url + url_end
    })
    let final_str = header + new_line + urlset_start + new_line + urls + new_line + new_line + urlset_end
    let ruta="./routes.js"
    fs.readFile(ruta, 'utf-8', function(err, data) {
        console.log(data);
    });
}