import React, {Component} from 'react';

export default class unknown extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let {auth} = this.props;
        if(!auth.userUnknown && auth.userAuthenticated){
            this.props.history.replaceState(null, auth.redirectRoute);
        }
        else if (!auth.userAuthenticated  && !auth.userUnknown){
            this.props.history.replaceState(null, 'login');
        }
    }
    componentWillReceiveProps(nextProps){   
        let {auth} = nextProps ? nextProps : this.props;
        if(!auth.userUnknown && auth.userAuthenticated){
            this.props.history.replaceState(null, auth.redirectRoute);
        }
        else if (!auth.userAuthenticated  && !auth.userUnknown){
            this.props.history.replaceState(null, 'login');
        }
    }
    render() {        
        var boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : "" ;
        var regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : "" ;
        return (
            <div className="unknown-state">
                <p>
                     <span>
                         <span className="bold" >
                            {boldTitle}
                         </span>
                         <span>
                            {regTitle}
                         </span>
                     </span>
                     
                 </p>
                 <i className='fa fa-cog fa-spin fa-5x'/>
            </div>
        );
    }
}