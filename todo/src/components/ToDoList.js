import React from "react";
import { connect } from "react-redux";
import { addItem, toggleComplete } from "../actions";

class ToDoList extends React.Component {
  state = {
    newItem: ""
  };

  handleChanges = e => {
    e.persist();
    this.setState({ newItem: e.target.value });
  };

  addItem = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: "" });
  };

  toggleComplete = (e, index) => {
    e.preventDefault();
    this.props.toggleComplete(index);
  };

  render() {
    // console.log(this.props.items);
    return (
      <div className="to-do-container">
        <React.Fragment>
          <h1 className="title ">To-Do List</h1>
          <div className="items-list">
            {this.props.items.map((item, index) => (
              <h4
                className={`list-item ${item.completed ? "completed" : ""}`}
                onClick={e => this.toggleComplete(e, index)}
                key={index}
              >
                {item.value}
              </h4>
            ))}
          </div>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.handleChanges}
            placeholder="Add new item"
          />
          <button onClick={this.addItem}>Add item</button>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items
});

export default connect(
  mapStateToProps,
  { addItem, toggleComplete }
)(ToDoList);
