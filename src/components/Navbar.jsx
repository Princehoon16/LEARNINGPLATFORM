import React ,{ useState }from 'react'
// import Button from './Button';

import LoginForm from './LoginForm';

const Navbar = () => {
  
    let Links =[
        {name:"HOME",link:"#"},
       
        {name:"ABOUT",link:"#learn-anything"},

        {name:"COURSES",link:"#courses"},
        
        {name:"CONTACT",link:"#footer"}
      ];
      const [open,setOpen]=useState(false);

      // const [showSignInDialog, setShowSignInDialog] = useState(false);

      
      const handleLinkClick = (link) => {
        // console.log("Button clicked");
        // if (link === "#get-started") {
        //   setShowSignInDialog(true);
        // }
        if (link === "#learn-anything") {
          // Scroll to the "LearnAnything" section
          const learnAnythingSection = document.getElementById("learn-anything");
          if (learnAnythingSection) {
            learnAnythingSection.scrollIntoView({ behavior: "smooth" });
          }
        } 
        else if (link === "#courses") {
          // Scroll to the "Courses" section
          const coursesSection = document.getElementById("courses");
          if (coursesSection) {
            coursesSection.scrollIntoView({ behavior: "smooth" });
          }
        }
        else if (link === "#footer") {
          // Scroll to the "Footer" section
          const footerSection = document.getElementById("footer");
          if (footerSection) {
            footerSection.scrollIntoView({ behavior: "smooth" });
          }
        }
       
        else {
          // Handle other links
        }
        setOpen(false); // Close the mobile menu
      };

      // const handleGetStartedClick = () => {
      //   setShowSignInDialog(true); // Show the login form
      //   setOpen(false); // Close the mobile menu if open
      // };

    return (
      <>
      <nav className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
        text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          <ion-icon name="laptop-outline"></ion-icon>
          </span>
          E-Learning
        </div>
        
       

        <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
  
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {
            Links.map((link)=>(
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                {/* <a href={link.link} className='text-black duration-500'>{link.name}</a> */}
                <a href={link.link} onClick={() => handleLinkClick(link.link)} className='text-black duration-500'>{link.name}</a>
              </li>
            ))
          }

          <LoginForm />
            
          
        </ul>
        </div>
      </nav>
     
      {/* {showSignInDialog && <LoginForm />} */}
 
</>
    )
}

export default Navbar
