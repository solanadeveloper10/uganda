import { useRef, useEffect } from 'react'

import Contract from './Contract'

import './App.css'

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false; // Force-disable controls
    }
  }, []);

  return <>
    <div className='static-bg' />
    <div style={{ pointerEvents: "none" }}>
      <video autoPlay muted loop id="bgVideo"
        playsInline
        controls={false}
        ref={videoRef}
      >
        <source src="/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <div className='wrapper'>
      <header className={'header loaded'}>
        <a href="https://x.com/UgandaMemeCoin" target='_blank' className='social-link'>
          <img src="/icons/x.png" alt="X icon." className='social-link-image' />
        </a>
        <a href="https://t.me/UgandaMemeCoin" target='_blank' className='social-link'>
          <img src="/icons/tg.png" alt="Telegram icon." className='social-link-image' />
        </a>
        <a href="https://www.dextools.io/app/en/solana/pair-explorer/2MQKQ4ypEBSDCcVcmMK4y4ZoCSvfocs7Ht5AgBiid3P8?t=1739210447882" target='_blank' className='social-link'>
          <img src="/icons/dextools.png" alt="Dextools icon." className='social-link-image' />
        </a>
        <a href="https://dexscreener.com/solana/PjnAt1xajfcg8bQoU8XpdpR3RANuKyy7NhUZTyxugnd" target='_blank' className='social-link'>
          <img src="/icons/dexscreener.png" alt="Dexscreener icon." className='social-link-image' />
        </a>
        <a href="https://raydium.io/swap/PjnAt1xajfcg8bQoU8XpdpR3RANuKyy7NhUZTyxugnd" target='_blank' className='social-link'>
          <img src="/icons/raydium.png" alt="Raydium icon." className='social-link-image' />
        </a>
      </header>

      <Contract />
    </div>

  </>
}

export default App
