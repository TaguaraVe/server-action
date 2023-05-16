import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export default function LoginForm() {
  async function handleSubmit(values: FormData) {
    'use server';
    const userName = values.get('userName') as string;
    const password = values.get('password') as string;
    revalidatePath('/login');
    console.log('Nombre', userName, password);
    // ...
  }

  return (
    <article className="flexS relative mx-auto w-full max-w-md flex-1 flex-col">
      <h1 className="title my-12 text-center">BlueBank</h1>
      <form
        action={handleSubmit}
        className="mx-auto w-full max-w-sm text-center "
      >
        <div className="relative mx-auto  mb-4 flex w-full flex-col py-0">
          <label htmlFor="userNname" className="mr-2 text-left">
            Nombre de Usuario
          </label>
          <input
            name="userName"
            type="text"
            placeholder="ingrese su nombre de usuario"
            className="focus:border-b-6 rounded-lg border-b-4 border-primary-500 bg-transparent px-2 py-1 outline-0 focus:border-secondary-500"
          />
        </div>
        <div className="relative mx-auto  mb-4 flex w-full flex-col py-0">
          <label htmlFor="userNname" className="mr-2 text-left">
            Contraseña
          </label>
          <input
            name="password"
            type="text"
            placeholder="ingrese su contraseña"
            className="focus:border-b-6 rounded-lg border-b-4 border-primary-500 bg-transparent px-2 py-1 outline-0 focus:border-secondary-500"
          />
        </div>

        <Link
          href="/resetpassword"
          className="mb-12 text-sm text-red-800 hover:underline "
        >
          ¿Olvidaste tu contraseña?
        </Link>

        <button
          type="submit"
          className="my-4 w-4/5 rounded-full bg-secondary-400 py-2 text-white hover:bg-secondary-600 disabled:bg-neutral-300 md:my-12"
        >
          Iniciar sesión
        </button>
      </form>

      <p className="text-center text-sm font-medium">
        ¿aún no tienes una cuenta?{' '}
        <Link href="/register" className="font-semibold text-secondary-300">
          Crear cuenta
        </Link>
      </p>

      <p className=" absolute bottom-4 px-4 text-center text-sm font-medium md:text-left">
        Sentite seguro con <span className="font-bold">BlueBank</span>. Nunca
        compartas tus datos personales, claves y números de tarjetas con nadie.{' '}
        <Link href="/register" className="underline">
          Te compartimos algunos consejos aquí{' '}
        </Link>
      </p>
    </article>
  );
}
