export const LayoutFooter = () => {
  return (
    <footer className="text-body-secondary py-5">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">Back to top</a>
        </p>
        <p className="mb-1">&copy; {new Date().getFullYear()} Octank Real Estate Ltd</p>
        {/* <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p> */}
      </div>
    </footer>
  )
}