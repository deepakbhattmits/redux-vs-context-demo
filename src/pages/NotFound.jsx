/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = props => {
	// console.log('TEST props : ', props.match.url);
	return (
		<main className='not-found'>
			<div className='not-found-content'>
				<p>
					No result found for the search results
					<strong>{` ${props.match.url.replace('/', '')}`}</strong>
				</p>
				<p>
					<Link className='link' to='/'>
						<i className='hand point left outline'></i>Go Back..
					</Link>
				</p>
			</div>
		</main>
	);
};
export default NotFound;
