import * as fs  from 'node:fs'
import * as path from 'node:path'
import { dateiEndungenErstellen } from './helpers'

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




// 3. Schritt: Dateien nach Bedingungen sortieren
const dateiBedingung = path.extname('./input')
console.log(dateiBedingung)
