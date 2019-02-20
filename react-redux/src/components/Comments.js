import React from 'react';
import { connect } from 'react-redux';
import { ADD_COMMENTS, GET_COMMENTS } from '../constants/actionTypes';
import agent from '../agent';
import BottomAppBar from './React-material-ui/BottomAppBar';

const mapStateToProps = state => ({
    token: state.common.token,
    comments: state.device.comments,
});

const mapDispatchToProps = dispatch => ({
    onSubmit: payload =>
        dispatch({ type: ADD_COMMENTS, payload }),
    getComments: (payload) =>
        dispatch({ type: GET_COMMENTS, payload })
});

class Comments extends React.Component {
    constructor() {
        super();
        this.state = { comment: '' };
    }

    componentWillMount() {
        this.props.getComments(agent.Comments.get(this.props.id_device));
        this.setComment = ev => { this.setState({ comment: ev.target.value }) };

        this.createComment = ev => {
            ev.preventDefault();
            if (!this.props.token) alert("No estas autenticado");
            else {
                agent.User.current(this.props.token).then(res => {
                    console.log("RES_current_comment", res.result);
                    if (!res.result.error) {
                        let user_id = res.result.user.currentUser.id;
                        agent.Comments.create(
                            this.props.id_device,
                            this.state.comment,
                            user_id
                        ).then(response => {
                            if (!response.result.error) {
                                this.props.onSubmit(response.result.comments)
                            }
                        });
                    }
                });
            }
        };
    }
   
    render() {
        console.log("COMMEN-----TS", this.props)
        return (
            <section>
                
                {
                    this.props.comments ?
                        (
                            <article>{<BottomAppBar comments={this.props.comments} />}</article>
                        ) : (
                            <span>Cargando comentarios ...</span>
                        )
                }
                <br />
                <form onSubmit={this.createComment}>
                    <label htmlFor="comments">Comenta nuestros productos</label><br />
                    <textarea className="form-control"
                        placeholder="Tu comentario aqui ..."
                        value={this.state.comment}
                        onChange={this.setComment}
                        rows="10"
                        cols="50"
                        id="comments"
                    />
                    <button
                        className="button"
                        type="submit">
                        Enviar comentario
                    </button>
                </form>
                <br />

            </section>


        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
