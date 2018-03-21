import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        $.ajax({
            url: "https://api.github.com/orgs/HelloFax/repos",
            type: "GET",
            dataType: 'json',
            ContentType: 'application/json',
            success: function (data) {

                this.setState({data: data});
            }.bind(this),
            error: function (jqXHR) {
            }.bind(this)
        })
    }

    render() {

        return (
            <table>
                <thead>
                <tr>
                    <th>Github Link</th>
                    <th>Name</th>
                    <th>Last Updated</th>
                    <th>Primary Language</th>
                    <th>Number of Watchers</th>
                    <th>Number of Forks</th>
                    <th>Number of Issues</th>
                    <th>Size</th>
                </tr>
                </thead>
                <tbody>{this.state.data.map(function (item, key) {

                    return (
                        <tr key={key}>
                            <td><a href={item.html_url} target="_blank">{item.html_url}</a></td>
                            <td><b>{item.name}</b>
                                <div>{item.description}</div>
                            </td>
                            <td>{item.updated_at}</td>
                            <td>{item.language}</td>
                            <td>{item.watchers}</td>
                            <td>{item.forks}</td>
                            <td>{item.open_issues_count}</td>
                            <td>{item.size}</td>
                        </tr>
                    )

                })}</tbody>
            </table>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));