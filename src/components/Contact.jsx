import React from "react";

const Contact = () => {
  return (
    <section id="project" className="h-[100%]  mt-32 font-fontTwo">
      <div className="font-bold text-4xl text-center">Contact</div>
      <div className="flex justify-center mt-12 mb-20">
        <Form />
        <Info />
      </div>
    </section>
  );
};

const Form = () => {
  return (
    <>
    <div
  class="block max-w-md rounded-lg p-6 dark:bg-neutral-700 border border-black w-[40%]">
  <form>
    {/* <!--Name input--> */}
    <div class="relative mb-6" data-te-input-wrapper-init>
      <input
        type="text"
        class="peer block min-h-[auto] w-full rounded border-0 bg-[#FAEBD7] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="name"
        placeholder="Name" />
      <label
        for="name"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:peer-focus:text-primary"
        >Name
      </label>
    </div>

    {/* <!--Email input--> */}
    <div class="relative mb-6" data-te-input-wrapper-init>
      <input
        type="email"
        class="peer block min-h-[auto] w-full rounded border-0 bg-[#FAEBD7] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleInput8"
        placeholder="Email address" />
      <label
        for="exampleInput8"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
        >Email address
      </label>
    </div>

    {/* <!--Message textarea--> */}
    <div class="relative mb-6" data-te-input-wrapper-init>
      <textarea
        class="peer block min-h-[auto] w-full rounded border-0 bg-[#FAEBD7] px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
        id="exampleFormControlTextarea13"
        rows="3"
        placeholder="Message"></textarea>
      <label
        for="exampleFormControlTextarea13"
        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[2rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
        >Message
      </label>
    </div>

    {/* <!--Submit button--> */}
    <button
      type="submit"
      class="inline-block w-full rounded bg-primary border border-[bg-[#FAEBD7]] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] 
      transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
      focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
      dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Send
    </button>
  </form>
</div>
    </>
  )
}

const Info = () => {
  return (
    <>
    <div className="bg-neutral-700 text-[#FAEBD7] rounded-xl border border-primary w-[300px] p-6 w-[40%]">
      <p>Info</p>
      <p>thanwarat.stsn@hotmail.com</p>
      <p>+66 855 556 9535</p>
      <a href="https://www.linkedin.com/in/thanwaratstsn/">linkedin</a>
    </div>
    </>
  )
}

export default Contact;
