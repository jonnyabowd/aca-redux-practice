import React, { Component } from 'react'
import { List, ListItem } from '@material-ui/core'

class People extends Component {
    componentDidMount() {
        this.props.getPeopleFromAPI()
    }

    render() {
        return (
            <div style={{ border: '10px solid black'}}>
                <p>{this.props.people.length}</p>
                <List>
                    {this.props.people.map(person => {
                        return <ListItem key={person.id}>{person.name}</ListItem>
                    })}
                </List>
            </div>
        )
    }
}

export default People