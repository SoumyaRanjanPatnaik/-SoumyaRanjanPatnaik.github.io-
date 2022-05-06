const Contact: React.FC = () => {
  return (
    <section
      id="about"
      className=" absolute flex items-center justify-center
      pt-20 pb-5 bg-gradient-to-br from-white to-slate-200"
    >
      <div
        className="flex flex-col justify-center w-5/6 
        max-w-6xl px-4 m-auto shadow-lg gap-6 md:w-[75%] py-12 
        glass-card rounded-2xl bg-gradient-to-br from-transparent 
      to-white transition-all "
      >
        <div className="flex flex-col items-center ">
          <h1 className="text-center text-3xl font-bold text-gray-900">
            Contact Me
          </h1>
          <div className="h-1 bg-blue-300  w-[30%] my-3 rounded-full" />
          <div className="flex flex-col my-5">
            <span>Mob: +91 8851414210</span>
            <span>Email: soumyaranjan1812@gmail.com</span>
            <span>
              Address: Ramanujan House, IIIT Naya Raipur, Naya Raipur,
              Chattisgarh, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
