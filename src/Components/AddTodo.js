import React, { useState } from 'react'
//import { useState } from 'react';

const AddTodo = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");



    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and Description cannot be blanked.")
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-2'>
            <h3>Add new Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Name of the task</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }} id="title" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Add Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="desc" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
