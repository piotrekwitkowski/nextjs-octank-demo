// used to center the content on the page
export const PageContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {children}
        </div>
        {/* <div className="row mt-4"><a href="#" className="btn btn-primary my-2">Browse all properties</a></div> */}
      </div>
    </div>
  )
}
