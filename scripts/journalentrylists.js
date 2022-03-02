import { getJournalEntries } from "./journaldata.js"
import { JournalEntryComponent } from "./journalentry.js"

const entryLog = document.querySelector('.entries')

export const EntryListComponent = () => {
    const entries = getJournalEntries()
    let entryHTMLRepresentation = ""
    for (const i of entries) {
        entryHTMLRepresentation =JournalEntryComponent(i)
        entryLog.innerHTML += `${entryHTMLRepresentation}`
    }
}

   
