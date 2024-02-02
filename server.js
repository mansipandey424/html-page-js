import path from 'path'
import { fileURLToPath } from 'url';
import express from 'express'

const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.listen(5000, function(req,res){
    console.log("server start")
    
});

app.get('/html', function(req, res) {
    console.log(__dirname)
    res.render("html.ejs", {});
});




