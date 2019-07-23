import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.counter.value
        // tags: []
        // imageUrl: "https://picsum.photos/200"
    };

    handleIncrement = product => {
        // console.log('Increment Clicked')
        // console.log(product);
        this.setState({ value: this.state.value + 1});
    }
    // renderTags() {
    //     if ( this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return  <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
    // }
    // style = {
    //     fontSize: 1,
    //     fontWeight: "bold"
    // }

    // constructor() {
    //     super();
    //     console.log("constructor", this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }s

    // doHandleIncremetn = () => {
    //     this.handleIncrement({ id: 1});
    // }

    render() {
        
        console.log(this.props);
        return (
            
            <div className="container pt-5">
                {/* {this.props.children} */}
                <h4>{this.props.id}</h4>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-title p-2">
                                <h1 style={{ fontSize: 16, fontWeight: "bold", textAlign: "center" }}> Welcome to react wandumi </h1>
                            </div>
                            <div className="card-body m-auto">
                                <div className="row">
                                    {/* <div className="col-md">
                                        <span style={{ fontSize: 12 }} className={ this.geBadgeClasses()}>{ this.formartCount() }</span>
                                        <button className="btn btn-secondary btn-sm">Increment</button>
                                   </div> */}
                                    {/* <div class="col-6">
                                         <img src={ this.state.imageUrl} alt=""/> 
                                        <span>{ this.state.count }</span>
                                        <button style= {{ fontWeight: 30 }} className="btn btn-danger">Increment</button>
                                    </div>  */}
                                </div> 
                                {/* <div className="row pt-4">
                                    <div className="col-md">
                                        looping through an array  
                                        { this.state.tags.length === 0 && "Please create a new tag!" }
                                       { this.renderTags() }
                                    </div>
                                </div> */}

                                <div className="row">
                                    <div className="col-md">
                                        <span style={{ fontSize: 12 }} className={ this.geBadgeClasses()}>{ this.formartCount() }</span>
                                        <button onClick={() => this.handleIncrement()  } className="btn btn-secondary btn-sm">Increment</button>
                                        <button onClick={() => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">
                                            Delete
                                        </button>

                                   </div>
                                    
                                </div>
                               
                            </div>
                        </div>
                        

                    </div>
                    
                </div>
            </div>
            );
        }

        geBadgeClasses() {
            let classes = "badge m-2 badge-";
            classes += this.state.count === 0 ? "warning" : "primary";
            return classes;
        }

        formartCount(){
            const { count } = this.state;
            // return this.state.count === 0 ? 'Zero': this.state.count;
            return count === 0 ? <h2>Zero</h2>: count;
        }
    }

    export default Counter;