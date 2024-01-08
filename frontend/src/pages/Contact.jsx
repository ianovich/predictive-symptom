

const Contact = () => {
  return<section>
<div className='px-4 mx-auto max-w-screen-md'>
<h2 className='heading text-center'>Contact Us</h2>
<p className='mb-8 lg:mb-16 font-light text-center text__para'>Want to send us feedback about a better feature? Let us Know</p>

<form action='#' className='space-y-8'>
<div>
  <label htmlFor='email' className='form__label'>Your Email</label>
  <input type='email' id='email' placeholder='example@gmail.com' className='form__input mt-1 '/>
</div>
</form>
</div>


  </section>
}

export default Contact