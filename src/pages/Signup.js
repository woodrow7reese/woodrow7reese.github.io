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

    const submitForm = () => {
        console.log('hello')
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
                    onChange={(e) => setForm(e.target.value)}
                />
                
                <input
                    type="text"
                    value={form.email}
                    onChange={(e) => setForm(e.target.value)}
                />

                <input
                    type="text"
                    value={form.password}
                    onChange={(e) => setForm(e.target.value)}
                />

                <input
                    type="text"
                    value={form.verify_password}
                    onChange={(e) => setForm(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Signup