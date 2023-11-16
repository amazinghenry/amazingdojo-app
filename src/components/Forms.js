import React, {useState, useRef} from "react";

const Forms = () => {
const formRef = useRef(null)
const scriptURL = 'https://script.google.com/macros/s/AKfycbzcdgDCkGpUR5w9TOgm5nwSUrD6kZz1nS3EY2og7_I9SvNPF6xsNhOu21sC8nsrM-gflw/exec'
const [loading, setLoading] = useState(false)
const [message, setMessage] = useState('')
const [formClass, setFormClass] = useState('')

// submit event
const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(formRef.current),
    }).then(res => {
        setMessage('SENT SUCCESSFULLY')
        setFormClass('success-message')

        setTimeout(() => {
            setFormClass('')
            setMessage('')
        }, 5000);

        setLoading(false)
        formRef.current.reset()
    })
}

    return (
        < section className="form-group">
            <form name="submit-to-google-sheet" ref={ formRef } onSubmit={handleSubmit}>
            <input type="text" name="fullname" id="fullname" placeholder="Name" className="full-name" required/>
            <input type="email" name="email" id="email" placeholder="Email" className="email-ad" required/>
            <textarea
            name="postContent"
            rows={5}
            cols={30}
            defaultValue = {'Type in message...'} />
            <input type="submit" className="form-submit" value={loading ? "Sending..." : "Send Message"} />
            </form>
            <p className={ formClass }> { message } </p>
        </section>
    );
}
 
export default Forms;