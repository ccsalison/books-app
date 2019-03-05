import React, { Component } from 'react';
import { Table } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Rich Dad Poor Dad</td>
              <td>5</td>
              <td>
                <Button color="success" size="sm">Edit</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
