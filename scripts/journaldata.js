export const getJournalEntries = () => {
     return fetch("http://localhost:8088/journal?_sort=date&_order=desc")
     .then(response => response.json())
     .then(journal => {
         return journal;
     })
    }