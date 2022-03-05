import { dateFormat } from "./helper.js"


export const JournalEntryComponent = (entryid) => {
    return `
        <section id="entry--${entryid.id}" class="journalEntry">
            <h3>${entryid.concept}</h3>
            <div>${dateFormat(entryid.date)}</div>
            <div>${entryid.entry}</div>
        </section>
    `
}