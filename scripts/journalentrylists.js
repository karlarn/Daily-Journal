import { getJournalEntries } from "./journaldata.js"
import { JournalEntryComponent } from "./journalentry.js"


export const EntryListComponent = () => {
    getJournalEntries().then(entries=>{
    for (const i of entries) {
        document.querySelector('.entries').innerHTML += `${JournalEntryComponent(i)}`
    }
})
}

   
