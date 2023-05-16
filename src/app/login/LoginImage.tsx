import Image from 'next/image';

export const LoginImage = () => {
  return (
    <section className=" h-full w-full bg-contain bg-center bg-no-repeat  ">
      <div className="relative w-full h-full">
        <Image
          src="/assets/images/undraw_savings_re_eq4w.svg"
          alt="login images"
          fill
          className="absolute"
        />
      </div>
    </section>
  );
};
