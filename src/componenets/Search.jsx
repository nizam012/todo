import React, { useState } from 'react'
function Search() {
    const [searchItems, setSearchItems] = useState('');
    // const items = ['Apple', 'Pinaapple', 'Banana', 'Orange']
    const items = [
        { id: 1, name: 'Apple', imgUrl: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ZVJNEEXUG5LWBIL2L4PPR46OHM.jpg' },
        { id: 2, name: 'Pinaapple', imgUrl: 'https://berrydalefoods.com/wp-content/uploads/2021/06/Pine-apple.jpg' },
        { id: 3, name: 'Banana', imgUrl: 'https://th-thumbnailer.cdn-si-edu.com/xK6NAJHiv_51fzn5sDiQt0eD5Is=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/d5/24/d5243019-e0fc-4b3c-8cdb-48e22f38bff2/istock-183380744.jpg' },
        { id: 4, name: 'Orange', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Ambersweet_oranges.jpg' }
    ]
    const matchingItems = items.filter(items => items.name.toLowerCase().includes(searchItems.toLowerCase()))

    const handleChange = (event) => {
        setSearchItems(event.target.value.toLowerCase());
    }
    const displayItems = () => {
        return {
            display: searchItems ? 'list-item' : 'none',
        }
    }

    return (
        <>
            <div className="nav-bar d-flex justify-content-between ">
                <div className="nav-items">
                    <ul className='items d-flex  ' >
                        <a href=""><li>Home</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>Blog</li></a>
                        <a href=""><li>Contact</li></a>
                    </ul>
                </div>
                <div className="search">
                    <input type="search" value={searchItems} onChange={handleChange} placeholder='Search' />
                </div>
            </div>
            <div className="main-dropdown">

                {searchItems && (

                    <ul className='dropdown d-flex  '>
                        {matchingItems.map((item, index) => (
                            <a href={item.imgUrl} target='_blank'>
                                <li key={index} onClick={() => displayItems(item)} >
                                    {item === searchItems ? (
                                        <samp>{item.name}</samp>
                                    ) : (
                                        <samp>{item.name}</samp>
                                    )}
                                </li> </a>
                        ))}
                    </ul>
                )}
            </div>
        </>

    )
}

export default Search
// style={displayItems()}
// {item.toLowerCase().includes(searchItems) && item}