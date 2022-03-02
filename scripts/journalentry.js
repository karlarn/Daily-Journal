export const JournalEntryComponent = (entryid) => {
    return `
        <section id="entry--${entryid.id}" class="journalEntry">
            <h3>${entryid.concept}</h3>
            <div>${entryid.date}</div>
            <div>${entryid.entry}</div>
        </section>
    `
}