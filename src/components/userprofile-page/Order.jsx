const Order = ({orderList}) => {
  return (
    <>
        {/* specification */}
        <div className="leading-loose">
            <h4 className="text-2xl font-normal font-inter text-gray-800">My orders</h4>
            <p className="text-base font-normal font-inter text-gray-800/70">Find here your past and present orders</p>
        </div>
        {/* list of orders */}
        <div>
            {!orderList&&<p className="text-base font-medium leading-loose font-inter uppercase">Sorry, no results found</p>}
        </div>
    </>
  )
}

export default Order
