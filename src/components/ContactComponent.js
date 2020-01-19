import React from "react";
import Title from "../components/Title";
const ContactComponent = () => {
  return (
    <section className='py-5'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-6my-3'>
          <Title title='contact us' />
          <form
            className='mt-5'
            action='https://formspree.io/promotions.ectasylab@gmail.com'
            method='POST'
          >
            {/* first name */}
            <div className='form-group'>
              <input
                type='text'
                name='firstname'
                className='form-control'
                placeholder='John Snow'
              />
            </div>
            {/* Email */}
            <div className='form-group'>
              <input
                type='text'
                name='email'
                className='form-control'
                placeholder='John@targaryen.com'
              />
            </div>
            {/* Subject */}
            <div className='form-group'>
              <input
                type='text'
                name='subject'
                className='form-control'
                placeholder='Important !!!.'
              />
            </div>
            {/* message */}
            <div className='form'>
              <textarea
                name='message'
                className='form-control'
                rows='10'
                placeholder='You know Nothing.'
              ></textarea>
            </div>
            {/* Submit */}
            <div className='form-group mt-3'>
              <input
                type='submit'
                value='send'
                className='form-control bg-primary text-white'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
