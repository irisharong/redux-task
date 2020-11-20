import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import EditComponent from './EditComponent';
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/taskActions';

class AllTask extends Component {

  componentDidMount(){
    // this.props.getAllTask();
  }
    render() { console.log(this.props.posts);
      return (
        <div>
          <h1 className="post_heading">All Tasks</h1>
          {this.props.posts.map((post) => (
          <div key={post.id}>
            {post.editing ? <EditComponent post={post} key={post.id} /> : <Task post={post}
            key={post.id} />}
          </div>
        ))}
        </div>
      );
    }
  }

  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      getAllTask: Actions.getAllTask,
    }, dispatch);
  }

  const mapStateToProps = (state) => {
    return {
    posts: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllTask);