import { EntryListComponent } from "./journalentrylists.js";
import { createPost } from "./journaldata.js";
import { JournalEntryComponent } from "./journalentry.js"
import { dateFormat } from "./helper.js"


EntryListComponent()

document.querySelector("main").addEventListener("click", event => {
	event.preventDefault();
	if (event.target.id === "savebtn") {
	//collect the input values into an object to post to the DB
	  const concepts = document.querySelector("#concepts").value
	  const date = dateFormat(new Date())
	  const description = document.querySelector("#text").value
      const mood = document.querySelector("#moodinput").value
	  //we have not created a user yet - for now, we will hard code `1`.
	  const postObject = {
		  date: date,
		  concept: concepts,
		  entry: description,
		  mood: mood
	  }
		createPost(postObject)
		.then(()=>{
			document.querySelector('.newestEntry').innerHTML += `${JournalEntryComponent(postObject)}`
			document.querySelector("#concepts").value=''
	  		document.querySelector("#text").value=''
		})
    }

	})
