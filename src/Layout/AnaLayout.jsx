import React from 'react'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import { Outlet } from 'react-router-dom'
import DataContex from '../Contex/DataContex'

function AnaLayout() {
	return (
		<>
			<DataContex>
				<Header />
				<Outlet />
				<Footer />
			</DataContex>
		</>
	)
}

export default AnaLayout