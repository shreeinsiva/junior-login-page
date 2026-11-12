
import { useState } from 'react'
import './LoginPage.css'

function LoginPage() {

  // Store form values and UI states
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    setMessage('')
    setMessageType('')

    if (email.trim() === '' || password.trim() === '') {
      setMessage('Please enter email and password.')
      setMessageType('error')
      return
    }

    if (!email.includes('@') || !email.includes('.')) {
      setMessage('Please enter a valid email address.')
      setMessageType('error')
      return
    }

    if (password.length < 6) {
      setMessage('Password must contain at least 6 characters.')
      setMessageType('error')
      return
    }

    setMessage('Demo login successful!')
    setMessageType('success')
  }

  return (
    <main className="login-page">

      <section className="login-card">

        <div className="login-heading">
          <b>WELCOME BACK</b>

          <h1>Sign in to your account</h1>

          <p>Enter your details to continue.</p>
        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
          noValidate
        >

          <div className="form-group">

            <label htmlFor="email">Email address</label>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

          </div>

          <div className="form-group">

            <label htmlFor="password">Password</label>

            <div className="password-input-wrapper">

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((previousValue) => !previousValue)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

          </div>

          {message && (
            <p className={`form-message ${messageType}`} role="status">
              {message}
            </p>
          )}

          <div className="form-options">

            <a href="#forgot-password">Forgot password?</a>

          </div>

          <button type="submit" className="login-button">
            Sign in
          </button>

        </form>

      </section>

    </main>
  )
}

export default LoginPage
