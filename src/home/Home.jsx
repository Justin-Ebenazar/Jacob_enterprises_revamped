import React from 'react'
import homestyle from "./Home.module.css";
import Dashboard from "./dashboard/dashboard";
import { FaSearch } from 'react-icons/fa';
import TableComponent from './table/table';

const Home = () => {
  return (
    <div className={homestyle.home}>

		<div className={homestyle['records-section']}>
			<div className={homestyle['records-header']}>
				<div className={homestyle['search-container']}>
					<FaSearch className={homestyle['search-icon']} />
					<input
						type="text"
						placeholder="Search..."
						className={homestyle['search-input']}
					/>
				</div>
			</div>
			<div className={homestyle['records-content']}>
				<TableComponent />
			</div>
		</div>

		<div className={homestyle['dashboard-section']}>
			<Dashboard />
		</div>

    </div>
  )
}

export default Home;
