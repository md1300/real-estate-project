import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles




const card = () => {
     
    
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
          });
    
   

    return (
        <div className='relative h-svh' >
          <div className='text-center'>
            <h2 className='text-2xl'>animation card</h2>
            <p>using aos animation for animate website some card</p>
          </div>
            <div data-aos="flip-right" className="border border-green-900 bg-gray-500 m-8 h-32 w-60 absolute right-14 top-0 ">
           <div >
               <img className='h-32 w-full' src="/public/image1.jpg" alt="" />
           </div>
              
            <h1>Awasome </h1>
            <p>in this section we buy our </p>
             <button className='btn btn-ghost'>thank you</button>
</div>
 
            <div data-aos="flip-right" className="border  border-green-900  m-8 bg-gray-500  h-32 w-60 absolute left-4 top-8">
            <img className='h-32 w-full' src="/public/image2.jpg" alt="" />
            <h1>this is card section 2</h1>
            <p>in this section we work about animation card</p>
             <button className='btn btn-ghost'>thank you</button>
</div>
 
            <div data-aos="flip-right" className=" border-green-900 bg-gray-500  h-32 w-60  absolute bottom-24 right-0 ">
            <img className='h-32 w-full' src="/public/image3.jpg" alt="" />
            <h1>this is card section 3</h1>
            <p>in this section we work about animation card</p>
             <button className='btn btn-ghost'>thank you</button>
</div>
 
           <div data-aos="flip-right" className=" border-green-900 bg-gray-500 m-8 h-32 w-60 absolute left-24 bottom-16 ">
          <img className='h-32 w-full' src="/public/image2.jpg" alt="" />
          <h1>this is card section 1</h1>
           <p>in this section we work about animation card</p>
          <button className='btn btn-ghost'>thank you</button>
</div>

        </div>
    );
};

export default card;



