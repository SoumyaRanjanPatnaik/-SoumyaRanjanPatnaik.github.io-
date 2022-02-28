const Contact: React.FC = () => {
  return (
    <section
      id="about"
      className=" absolute flex items-center justify-center
      pt-20 pb-5 bg-gradient-to-br from-white to-blue-100"
    >
      <div
        className="flex flex-col items-center justify-center w-5/6 
        max-w-6xlxl px-4 m-auto shadow-lg gap-6 sm:w-4/6 sm:mx-36 py-12 
        glass-card rounded-2xl bg-gradient-to-br from-transparent 
      to-white transition-all "
      >
        <div className="flex flex-col items-center ">
          <h1 className="text-center text-3xl font-bold text-gray-900">
            Contact Me
          </h1>
          <div className="h-1 bg-blue-300  w-[90%] rounded-full" />
        </div>
      </div>
    </section>
  );
};
export default Contact;
