import 'bootstrap/dist/css/bootstrap.css';
import { BASE_ASSETS_PATH } from '@/config';
import type { Metadata } from 'next';
// import { headers } from 'next/headers';
import Script from 'next/script';
import { RumClient } from './rum-client';

export const metadata: Metadata = {
  title: 'Octank Properties',
  description: 'Core Web Vitals Demo for AWS Edge Services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header data-bs-theme="dark">
          <div className="collapse text-bg-dark" id="navbarHeader">
            <RumClient />
            {/* {Array.from(headers().entries()).map(([k, v], i) => <li key={i}>{k}: {v}</li>)} */}
            <div className="container">
              <div className="row">
                <div className="col-sm-8 col-md-7 py-4">
                  <h4>About</h4>
                  <p className="text-body-secondary">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                </div>
                <div className="col-sm-4 offset-md-1 py-4">
                  <h4>Contact</h4>
                  <ul className="list-unstyled">
                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                    <li><a href="#" className="text-white">Email me</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <strong>Octank Properties</strong>
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="text-body-secondary py-5">
          <div className="container">
            <p className="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p className="mb-1">&copy; {new Date().getFullYear()} Octank Real Estate Ltd</p>
            {/* <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p> */}
          </div>
        </footer>
        <Script src={BASE_ASSETS_PATH + '/bootstrap-5.3.1-dist/js/bootstrap.bundle.min.js'} />
      </body>
    </html>
  )
}
