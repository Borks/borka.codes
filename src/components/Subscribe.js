import React from 'react';

export default function Subscribe() {
  return (
    <section id="signup" className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 className="text-white mb-5">Send me a message</h2>
            <p><i>PS: That's not me on the pictures, not yet.</i></p>

            <form>
              <div className='form-group row'>
                <input
                  type="email"
                  className="form-control "
                  id="inputEmail"
                  placeholder="Your email address"
                />
              </div>
              <div className='form-group row'>
                <textarea rows='3' className='form-control flex-fill'>
                </textarea>
              </div>

              <button type="submit" className="btn btn-primary mx-auto">
                Send it
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}
