import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        setInput('')
        props.onSubmit({
            id: Date.now(),
            text: input
        })
    }
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit?(
                <>
                    <input
                type="text"
                placeholder='Update your plan...'
                value={input}
                name="text"
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}

            />
            <i
            onClick={handleSubmit} 
            className="fa-solid fa-plus" ></i>
                </>
            
            ):(
                <>
                    <input
                    type="text"
                    placeholder='Plan Something...'
                    value={input}
                    name="text"
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                    autoComplete="off"
    
                />
                <i
                onClick={handleSubmit} 
                className="fa-solid fa-plus" ></i>
                </>
                
                )
}
        </form>
    )
}

export default TodoForm
