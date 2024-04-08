import * as fs  from 'node:fs'
import * as path from 'node:path'
import { dateiEndungenErstellen } from './helpers'
import { createDirs } from './helpers'

console.log(fs.readdirSync('.'))
console.log(path.extname('README.md'))


console.log('Ich bin die Index Datei')

// 1. Schritt: Inhalte des Ordners auflisten
const inhalteOrdner = fs.readdirSync('./input')
console.log(inhalteOrdner)

// 2. Schritt: Dateitypen herausfinden

// Ein Set nutzen wir für die duplikatenfreie Speicherung von Sachen
const endungen = dateiEndungenErstellen(inhalteOrdner)
console.log(endungen)

const extensionsArray = Array.from(endungen)
console.log(extensionsArray)
// Weiteres Bsp. 
for (const endung of endungen) {
    try {
        fs.mkdirSync('./output' + endung)
    } catch (e) {
        console.error(e)
    }
}



// 3. Schritt: Dateien nach Bedingungen sortieren
const dateiBedingung = path.extname('./input')
console.log(dateiBedingung)

createDirs('/output', extensionsArray)

for (const file of inhalteOrdner) {
    const ext = path.extname(file)
    try {
        fs.copyFileSync('./input/' + file, './output' + ext + '/' + file)



    } catch (e) {
        console.error("Das Verzeichnis existiert schon.")


    }
   
inhalteOrdner.forEach(file => {
    const ext = path.extname(file)
    fs.copyFileSync('./input' + file, './output/' + file)
})


}

// 2.Bsp
endungen.forEach(endung => {
    try {
        fs.mkdirSync('./output' + endung)
    }catch (e) {
        console.error("Das Verzeichnis existiert schon.")

    }



    })

    inhalteOrdner.forEach(file => {
        const ext = path.extname(file)
        fs.copyFileSync('./input/' + file, './output' + ext + '/' + file)
    })