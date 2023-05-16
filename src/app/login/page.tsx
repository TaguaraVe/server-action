import { LoginImage } from './LoginImage'
import LoginForm from './LoginForm'

export default function Login() {
  return (
    <section className='gradient'>
      <div className='minHeight grid grid-cols-1 md:grid-cols-[1fr,2fr]'>
        <div className='hidden p-12 md:block'>
          <LoginImage />
        </div>
        <div className='flex h-full flex-col justify-between px-4'>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}
