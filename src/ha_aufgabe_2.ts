import fs from 'fs';

function createDirs(folderPath: string, folderNames: string[]): void {
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
