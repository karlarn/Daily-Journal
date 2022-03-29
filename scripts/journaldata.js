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

      export const deletePost = postId => {
        return fetch(`http://localhost:8088/journal/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
      
        })
            .then(response => response.json())
            
      }

      export const getSinglePost = (postId) => {
        return fetch(`http://localhost:8088/journal/${postId}`)
          .then(response => response.json())
      }

      export const updatePost = postObj => {
        return fetch(`http://localhost:8088/journal/${postObj.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postObj)
      
        })
            .then(response => response.json())
            
      }