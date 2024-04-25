import { useState } from "react"
import { Link } from "react-router-dom"
const Signup = () => {

    const [form, setForm] = useState(
        {
            username: '',
            email: '',
            password: '',
            verify_password: ''
        }
    )

    const submitForm = async (e) => {
        e.preventDefault()
        
        try {
            const response = await fetch('/api/newuser',  {
                method: "POST",
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify(form)
            })

            if (response.ok) {
                const newUser = await response.json();
                console.log('User created successfully:', newUser);
                // redirect the user to login or userhome
            } else {
                console.error('Failed to create user:', response.statusText);
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="bg-inherit">
            <form className="flex-col mx-[15%]" onSubmit={submitForm}>
                <h2>
                    Create an account
                </h2>
                <p>
                    Already have an account? 
                    <Link to='/login' className="text-[#00adb5]">
                        Login
                    </Link>
                </p>

                
                <input
                    type="text"
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                />
                
                <input
                    type="text"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="text"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <input
                    type="text"
                    value={form.verify_password}
                    onChange={(e) => setForm({ ...form, verify_password: e.target.value })}
                />
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup