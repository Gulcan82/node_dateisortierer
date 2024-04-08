
import * as path from 'node:path'
import fs from 'fs'


export function dateiEndungenErstellen(inhalteOrdner: string[]){

    const endungen = new Set<string>();

for (let i = 0; i < inhalteOrdner.length; i = i + 1) {
    const dateiName = inhalteOrdner[i]
    const dateiEndung = path.extname(dateiName)
    console.log(dateiEndung)
    endungen.add(dateiEndung)



}
return endungen

}

export function createDirs(folderPath: string, folderNames: string[]): void {
    // Überprüfen, ob der Hauptordner existiert
    if (fs.existsSync(folderPath)) {
        // Wenn vorhanden, nichts tun
    } else {
        // Wenn nicht, erstellen
        fs.mkdirSync(folderPath);
    }

    // Durchlaufe die Liste der Ordnernamen
    for (const folderName of folderNames) {
        const folderFullPath = folderPath + '/' + folderName;

        // Überprüfen, ob der Ordner bereits existiert
        if (fs.existsSync(folderFullPath)) {
            console.log('Ordner "' + folderName + '" existiert bereits.');
        } else {
            // Wenn nicht, erstellen
            fs.mkdirSync(folderFullPath);
            console.log('Ordner "' + folderName + '" wurde erstellt.');
        }
    }
}

createDirs('./output', ['.png', '.mp4', '.gif']);


