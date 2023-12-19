import React from 'react'
import { NavLink } from 'react-router-dom'

function Card({ item }) {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<img className="rounded-t-lg object-fill w-full" src={item.flags.png} alt="" />
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name.common}</h5>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Capital:</b> {item.capital}</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Population:</b> {item.population}</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><b>Region: </b>{item.region}</p>
				<NavLink to={`/olke/${item.cca3}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Read more
				</NavLink>
			</div>
		</div>

	)
}

export default Card