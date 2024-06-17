export default function Layout({ children, revenue, analytics }) {
    return (
      <div className="h-full flex flex-col ">
        <div className="h-5 flex justify-center">
          {children}
        </div>
        <div className="h-5 flex">
            <div className="flex-1"> {revenue}</div>
            <div className="flex-1">  {analytics}</div>
        </div>
      
      </div>
    )
  }