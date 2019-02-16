import React from 'react';
import { connect } from 'react-redux';
import { ADD_COMMENTS,GET_COMMENTS } from '../constants/actionTypes';
import agent from '../agent';
import BottomAppBar from './React-material-ui/BottomAppBar';

const mapStateToProps = state => ({
    token: state.common.token,
    comments:state.device.comments,
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
            if(!this.props.token) alert("No estas autenticado");
            else{
                agent.User.current(this.props.token).then(res => {
                    console.log("RES_current_comment",res.result);
                    if(!res.result.error){
                        let user_id = res.result.user.currentUser.id;
                        agent.Comments.create(
                            this.props.id_device,
                            this.state.comment,
                            user_id
                            ).then(response=>{
                                if(!response.result.error){
                                    this.props.onSubmit(response.result.comments)
                                }
                            });
                    }
                });
            }
        };
    }
    render() {
        console.log("COMMENTS",this.props.comments)
        console.log("COMMEN-----TS",this.props)
        return (
            <span>
                {
                    this.props.comments ? 
                    (
                        <section>
                            {<BottomAppBar comments={this.props.comments}/>}
                        </section>
                    ):(<span>Este producto no tiene comentarios todavia ...</span>) 
                }
            <h4>Comenta nuestros productos</h4>
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
            
            </span>

            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
