function Card ({username, btnText="View Details !"}){

    return (
        <div className='relative h-[400px] w-[300] rounded-md'>
            <img src="https://images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg?auto=compress&cs=tinysrgb&w=400" alt="AirMAx Pro" className='z-0 h-full w-full rounded-md object-cover' />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
            <div className='absolute bottom-4 left-4 text-left'>
            <h1 className="text-lg font-semibold text-white">{username}</h1>
            <p className="mt-2 text-sm text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum magnam delectus, magni at nulla vitae architecto nihil assumenda possimus corporis.</p>
            <button className="mt-2 inline-flex cursor-pointer item-center text-sm font-semibold text-white">{btnText}</button>
            </div>
        </div>
    )
}

export default Card;