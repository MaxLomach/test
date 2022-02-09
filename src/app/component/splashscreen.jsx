import React from 'react'

const Splashscreen = () => {
  return new Promise(
    (resolve) =>
      setTimeout(
        <div className='container-for-loader'>
          <div className='loader'>
            <div className='spinner-border text-info' role='status'>
              <span className='visually-hidden'>By Aliev-Lomach</span>
            </div>
          </div>
        </div>
      ),
    3000
  )
}

export default Splashscreen
