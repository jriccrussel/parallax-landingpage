import { useRef, useEffect } from 'react'
import SimpleParallax from 'simple-parallax-js'
import './Parallax.scss'

import img1 from '../../assets/img/01.jpg'
import img2 from '../../assets/img/04.jpg'
import img3 from '../../assets/img/07.jpg'
import img4 from '../../assets/img/10.jpg'
import left1 from '../../assets/img/left1.png'
import left2 from '../../assets/img/left2.png'

const Parallax = () => {
  const oneRef = useRef(null)
  const twoRef = useRef(null)
  const threeRef = useRef(null)
  const fourRef = useRef(null)
  const fiveRef = useRef(null)
  const sixRef = useRef(null)

  useEffect(() => {
    new SimpleParallax(oneRef.current, {
      scale: 1.8,
    })

    new SimpleParallax(twoRef.current, {
      scale: 1.6,
      orientation: 'left',
    })

    new SimpleParallax(threeRef.current, {
      scale: 1.6,
      orientation: 'right',
    })

    new SimpleParallax(fourRef.current, {
      scale: 1.6,
    })

    new SimpleParallax(fiveRef.current, {
      scale: 1.6,
      orientation: 'right',
    })

    new SimpleParallax(sixRef.current, {
      scale: 1.6,
      orientation: 'left',
    })
  }, [])

  return (
    <main className="parallax__body">
      <div className="whitespace"></div>

      <div className="container">

        <div className="flex">
          <div className="w_33 img one">
            <img src={img1} alt="" className="ione" ref={oneRef} />
          </div>
          <div className="w_25 txt text-1">
            <h1 className="txt_title">whitespace is like air.</h1>
          </div>
        </div>

        <div className="flex">
          <div className="w_66 txt text-2">
            <h1 className="txt_title">it is necessary for <br/> a design to breathe.</h1>
          </div>
          <div className="w_33 img two">
            <img src={img2} alt="" className="itwo" ref={twoRef}/>
          </div>
        </div>

        <div className="container-fluid">
          <div className="flex">
            <div className="w_100 img three">
              <img src={left1} alt="" className="ithree" ref={threeRef}/>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w_33 img four">
            <img src={img3} alt="" className="ifour" ref={fourRef}/>
          </div>
          <div className="w_25 txt text-3">
            <h1 className="txt_title">whitespace is like air.</h1>
          </div>
        </div>

        <div className="flex">
          <div className="w_66 txt text-4">
            <h1 className="txt_title">it is necessary for <br/> a design to breathe.</h1>
          </div>
          <div className="w_33 img five">
            <img src={img4} alt="" className="ifive" ref={fiveRef}/>
          </div>
        </div>

        <div className="container-fluid">
          <div className="flex">
            <div className="w_100 img six">
              <img src={left2} alt="" className="isix" ref={sixRef}/>
            </div>
          </div>
        </div>

      </div>


    </main>
  )
}

export default Parallax
