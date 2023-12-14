



import Saiph from "@/utils/saiph"
import Link from "next/link"




const Footer = () => {

  return (
    
    <footer className="text-gray-400 bg-footer-texture overflow-hidden">
      
      <div className="px-4 pt-24 pb-0 mx-auto flex flex-wrap  sm:px-10">
      
    <div className="w-full md:w-1/2 md:mx-0 text-center md:text-left md:mt-0 mt-10 pb-4 flex flex-col">
      <Saiph/>
      </div>
    <div className="w-full md:w-1/4 px-4 mb-10 md:text-left text-center">
      <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
      <nav className="list-none">
        <li>
          <Link href="/" className="text-gray-400 hover:text-white">About Us</Link>
        </li>
        <li>
          <Link href="/services" className="text-gray-400 hover:text-white">Services</Link>
        </li>
        <li>
          <Link href="/blog" className="text-gray-400 hover:text-white">Blogs</Link>
        </li>
        <li>
          <Link href="/career" className="text-gray-400 hover:text-white">Careers</Link>
        </li>
      </nav>
    </div>
    <div className="w-full md:w-1/4 px-4 mb-10 md:text-left text-center">
      <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">LEGAL</h2>
      <nav className="list-none">
        <li>
              <Link className="text-gray-400 hover:text-white"
              href="/legal/termsConditions">Terms and Conditions</Link>
        </li>
        <li>
              <Link className="text-gray-400 hover:text-white"
              href="/legal/refundReturnPolicy">Return and Refund Policy</Link>
        </li>
        <li>
              <Link className="text-gray-400 hover:text-white"
              href="/legal/privacyPolicy"
              >Privacy Policy </Link>
        </li>
        <li>
              <Link className="text-gray-400 hover:text-white"
              href="/contact"
              >Contact Us</Link>
        </li>
      </nav>
    </div>
  </div>
</footer>


  )
}

export default Footer
