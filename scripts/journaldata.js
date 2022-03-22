export const getJournalEntries = () => {
     return fetch("http://localhost:8088/journal?_sort=date&_order=desc")
     .then(response => response.json())
     .then(journal => {
         return journal;
     })
    }

    export const createPost = postObj => {
        return fetch("http://localhost:8088/journal", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
      
        })
            .then(response => response.json())
      }