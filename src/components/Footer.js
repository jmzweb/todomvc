import React, {Component} from 'react';
import classnames from 'classnames';
import {SHOW_ALL,SHOW_COMPLETED,SHOW_ACTIVE} from '../constants/TodoFilters';

const TODO_FILTERS = {
	[SHOW_ALL]:'All',
	[SHOW_COMPLETED]:'Active',
	[SHOW_ACTIVE]: 'Completed',
}

export default class Footer extends Component{

	renderTodoCount(){
		const {activeCount} = this.props;
		const itemWord = activeCount === 1 ? 'item' : 'items';

		return (
			<span className="todo-count">
				<strong>{activeCount || 'No'}</strong>
				{itemWord} left
			</span>
		)
	}


	renderFilterLink(filter){
		const title = TODO_FILTERS[filter];
		const {filter:selectedFilter,onShow} = this.props;

		return (
			<a className={classnames({selected:filter === selectedFilter})}
				style={{cursor:'pointer'}}
				onClick={()=>onShow(filter)}
			>
				{title}
			</a>
		)
	}


	renderClearButton(){
		const {completedCount,onClearCompleted} = this.props;
		if(completedCount>0){
			return (
				<button className="clear-completed"
						onClick={onClearCompleted}>
					Clear completed
				</button>
			)
		}
	}



	render(){
		return (
			<footer className='footer'>
				{this.renderTodoCount()}
				<ul className='filters'>
					{[SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED].map(filter => 
						<li key={filter}>
							{this.renderFilterLink(filter)}
						</li>
					)}
				</ul>
				{this.renderClearButton()}
			</footer>
		)
	}
}