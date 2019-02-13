import React from 'react';
import { connect } from 'react-redux';
import { ADD_COMMENTS } from '../constants/actionTypes';
import agent from '../agent';

const mapStateToProps = state => ({
    token: state.common.token,
    comments:state.device.comments
});

const mapDispatchToProps = dispatch => ({
    onSubmit: payload =>
        dispatch({ type: ADD_COMMENTS, payload })
});

class Comments extends React.Component {
    constructor() {
        super();
        this.state = { comment: '' };
    }
    componentWillMount() {
        /* get_comments */
        agent.Comments.get(this.props.id_device).then(res =>{
            console.log("GET_COMMENTS",res);
            
        });
        //////////////////////////
        this.setComment = ev => {
            console.log("set", ev.target.value);
            this.setState({ comment: ev.target.value })
        };

        this.createComment = ev => {
            //console.log("componentWillMount__COMMENTS", this.props);
            ev.preventDefault();
            if(!this.props.token) alert("No estas autenticado");
            else{
                agent.User.current(this.props.token).then(res => {
                    console.log("RES_current_comment",res.result);
                    let user_id = res.result.user.currentUser.id;
                    if(!res.result.error){
                        agent.Comments.create(
                            this.props.id_device,
                            this.state.comment,
                            user_id
                            ).then(response=>{
                                console.log("res_commentario_create",response);
                                if(!response.result.error){
                                    this.props.onSubmit(response.result.comments)
                                }
                            });
                    }
                    
                    /*this.setState({ comment: '' });
                    this.props.onSubmit(this.state.comment);*/
                });
            }
        };
    }
    render() {
        console.log("COMMENTS",this.props.comments)
        return (
            <span>
                { this.props.comments ? (<section>
                    {
                        this.props.comments.map(res => {
                            console.log("MAP_COMMENTS",res);
                            return <li>{res.comment}</li>

                        })
                    }
                </section>):(<span>Este producto no tiene comentarios todavia ...</span>) }
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
