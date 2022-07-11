import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "../contexts/authContext"


function Login() {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { login } = useAuth()

    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => setUser({ ...user, [name]: value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(user.email, user.password)
            navigate("/home")
        } catch (error) {
            console.log(error.code)
            if (error.code === "auth/wrong-password") {
                setError('Contraseña incorrecta')
            } else {
                setError(error.message)
            }
        }
    }

    return (
        <div className="shadow shadow-xl">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label>E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="youremail@email.com"
                        onChange={handleChange}></input>
                </div>
                <div className="mb-6">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        onChange={handleChange}></input>
                </div>
                <div className="mb-6">
                    <button >entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login