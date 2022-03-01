/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./journaldata.js"
import { JournalEntryComponent } from "./journalentry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector('.entries')

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournalEntries()
    let entryHTMLRepresentation = ""
    for (const i of entries) {
        entryHTMLRepresentation =JournalEntryComponent(i)
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += `${entryHTMLRepresentation}`
    }
}

