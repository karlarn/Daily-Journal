export const JournalEntryComponent = (entryid) => {
    return `
        <section id="entry--${entryid.id}" class="journalEntry">
            <h3>${entryid.concept}</h3>
            <div>Created by: ${entryid.user.name}</div>
            <div>${entryid.date}</div>
            <div>${entryid.entry}</div>
            <div>Mood: ${entryid.mood}</div>
            <button id="delete__${entryid.id}">Delete</button>
            <button id="edit__${entryid.id}">Edit</button>
        </section>
    `
}


export const PostEdit = (postObj) => {
	return `
	<form action="description">
            <fieldset>
                <label for="conceptscovered">Concepts Covered</label>
                <textarea name="concepts" id="concepts" cols="60" rows="1">${postObj.concept}</textarea>
            </fieldset>
        </form>
        <form action="journalentry">
            <fieldset>
                <label for="journaltext">Journal Entry</label>
                <textarea name="text" id="text" cols="120" rows="15">${postObj.entry}</textarea>
            </fieldset>
        </form>
        <input type="hidden" value="${postObj.id}" name="postId">
        <input type="hidden" value="${postObj.mood}" name="postMood">
        <input type="hidden" value="${postObj.date}" name="postTime">
        <button id="updatePost__${postObj.id}">Update</button>
		<button id="newPost__cancel">Cancel</button>
	`
}


export const cancelEdit= ()=> {
  return  `
    <form action="description">
            <fieldset>
                <label for="conceptscovered">Concepts Covered</label>
                <textarea name="concepts" id="concepts" cols="60" rows="1"></textarea>
            </fieldset>
        </form>
        <form action="journalentry">
            <fieldset>
                <label for="journaltext">Journal Entry</label>
                <textarea name="text" id="text" cols="120" rows="15"></textarea>
            </fieldset>
        </form>
        <form action="Mood">
            <fieldset>
                <label for="moodinput">Mood for the Day</label>
                <select name="moodinput" id="moodinput">
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="tired">Tired</option>
                    <option value="hungry">Hungry</option>
                </select>
            </fieldset>
        </form>
        <button id="savebtn">Record Journal Entry</button>
        `
}

export const entryFormHtml=()=>{
return `<form action="description">
            <fieldset>
                <label for="conceptscovered">Concepts Covered</label>
                <textarea name="concepts" id="concepts" cols="60" rows="1"></textarea>
            </fieldset>
        </form>
        <form action="journalentry">
            <fieldset>
                <label for="journaltext">Journal Entry</label>
                <textarea name="text" id="text" cols="120" rows="15"></textarea>
            </fieldset>
        </form>
        <form action="Mood">
            <fieldset>
                <label for="moodinput">Mood for the Day</label>
                <select name="moodinput" id="moodinput">
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="tired">Tired</option>
                    <option value="hungry">Hungry</option>
                </select>
            </fieldset>
        </form>
        <button id="savebtn">Record Journal Entry</button>`

}