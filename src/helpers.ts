
import * as path from 'node:path'
export function dateiEndungenErstellen(inhalteOrdner: string[]){

    const endungen = new Set()

for (let i = 0; i < inhalteOrdner.length; i = i + 1) {
    const dateiName = inhalteOrdner[i]
    const dateiEndung = path.extname(dateiName)
    console.log(dateiEndung)
    endungen.add(dateiEndung)



}
return endungen

}

