import React from 'react';
import { connect } from 'react-redux';
import { ADD_COMMENT } from '../constants/actionTypes';
import agent from '../agent';

const mapStateToProps = state => ({
    ...state.home,
    token: state.common.token
});

const mapDispatchToProps = dispatch => ({
    onSubmit: payload =>
        dispatch({ type: ADD_COMMENT, payload })
});

class Comments extends React.Component {
    constructor() {
        super();
        this.state = { comment: '' };
    }
    componentWillMount() {
        this.setComment = ev => {
            console.log("set", ev.target.value);
            this.setState({ comment: ev.target.value })
        };

        this.createComment = ev => {
            console.log("componentWillMount__COMMENTS", this.props);
            ev.preventDefault();
            if(!this.props.token) alert("No estas autenticado");
            else{
                agent.User.current(this.props.token).then(res => {
                    console.log("RES_current_comment",res.result);
                    !res.result.error ? agent.Comments.create(
                        this.props.slug,
                        this.state.comment) : false;
                    
                    this.setState({ comment: '' });
                    this.props.onSubmit(this.state.comment);
                });
            }
        };
    }
    render() {

        return (
            <form className="card comment-form" onSubmit={this.createComment}>
                <div className="card-block">
                    <textarea className="form-control"
                        placeholder="Tu comentario aqui ..."
                        value={this.state.comment}
                        onChange={this.setComment}
                        rows="10"
                        cols="50"
                    />
                </div>
                <div className="card-footer">
                    <button
                        className="btn btn-sm btn-primary"
                        type="submit">
                        Enviar comentario
                    </button>
                </div>
            </form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
