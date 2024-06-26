// src/components/Footer.js

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Phone: +91 123 456 7890
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Email: info@frcrce.ac.in
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Address: FR. Conceicao Rodrigues College of Engineering, Bandra (W), Mumbai - 400050
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Social Media</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Staff Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Faculty Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Staff Directory
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  HR Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Payroll
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Resources & Library</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Library Catalog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  E-Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Research Databases
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Institutional Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  