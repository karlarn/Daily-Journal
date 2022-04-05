import { getJournalEntries } from "./journaldata.js"
import { JournalEntryComponent, entryFormHtml } from "./journalentry.js"


export const EntryListComponent = () => {
    getJournalEntries().then(entries=>{
    for (const i of entries) {
        document.querySelector('.entries').innerHTML += `${JournalEntryComponent(i)}`
    }
})
}

  export const journalEntryForm=()=>{
      document.querySelector("main").innerHTML=entryFormHtml()
  } 
