function getRandomElementFromList(list: any) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

// Beispielaufruf
const endungen = [
    ".txt", ".png", ".mp4", ".gif", ".jpg",
    ".pdf", ".docx", ".xlsx", ".pptx"
];

console.log(getRandomElementFromList(endungen)); // Gibt ein zufälliges Element aus der Liste zurück
