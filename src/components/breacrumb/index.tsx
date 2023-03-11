import React from 'react'

const Breadcrumb = () => {
    const menu = [
        {
            name: 'Home',
            link: '/'

        },
        {
            name: 'Erkek Giyim',
            link: '/erkek-giyim'
        },
        {
            name: 'Sweatshirt',
            link: '/erkek-giyim/sweatshirt'
        },
    ]
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="mt-3 inline-flex items-center gap-1">
                <li className="inline-flex items-center">
                    <a href="#" className="inline-flex items-center text-sm font-medium text-[#484848] hover:text-[#ff6000] dark:text-gray-400 dark:hover:text-white">
                        <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                        Anasayfa
                    </a>
                </li>
                {menu.map((item, index) => index !== menu.length - 1 ? <li>
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <a href={item.link} className="ml-1 text-sm font-medium text-gray-700 hover:text-[#ff6000] md:ml-2 dark:text-gray-400 dark:hover:text-white">{item.name}</a>
                    </div>
                </li> : <li aria-current="page">
                    <div className="flex items-center">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{item.name}</span>
                    </div>
                </li>)}


            </ol>
        </nav>
    )
}

export default Breadcrumb