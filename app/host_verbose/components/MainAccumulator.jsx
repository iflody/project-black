import React from 'react'
import ScopeComment from '../../ips_list/presentational/scope/ScopeComment.jsx'

import PortsTabs from '../presentational/PortsTabs.jsx'
import TasksButtonsTracked from './TasksButtonsTracked.jsx'
import Tasks from '../../common/tasks/Tasks.jsx'


class MainAccumulator extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			'activeTabNumber': null,
			'activePortNumber': null
		}				

		this.tabChange = this.tabChange.bind(this);
	}

	tabChange(newNumber, portNumber) {
		this.setState({
			activeTabNumber: newNumber,
			activePortNumber: portNumber
		});
	}

	render() {
		return (
			<div>
				<h2>{this.props.host.hostname}</h2>
				<TasksButtonsTracked project={this.props.project}
									 host={this.props.host}
									 ports={this.props.ports}
									 activePortNumber={this.state.activePortNumber} />				
				<Tasks tasks={this.props.tasks} />
				<hr />
				<ScopeComment commentValue={this.props.host.comment} />

				<PortsTabs ports={this.props.ports}
					   	   activeTabNumber={this.state.activeTabNumber}
					   	   tabChange={this.tabChange}
					   	   files={this.props.files} />
			</div>				  
		)
	}
}

export default MainAccumulator;
