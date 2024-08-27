import DisplayAllProducts from "./displayallproducts"
import Sidebar from "./sidebar"

 const HomePagebody = () => {
  return (
    <div className="flex h-full pt-[50px] ">
      <Sidebar />
      <DisplayAllProducts />
    </div>
  )
}

export default HomePagebody

