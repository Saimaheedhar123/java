import { Component } from "react";

class ClassBasedComponent extends Component
{
    //state
    state={
        showText: false,
        changeColor:false,
        count:0,
        changeCountStyle:false
    };

    handleClick=()=>{
       console.log("button Clicked");
       //this is not recommended
       const {showText,changeColor}=this.state;
       this.setState({
        showText:!showText,
        changeColor:!changeColor

       });
    };

    //componentDidMount
    //componentDidUpdate
    //componentWillUnmount

    componentDidMount(){
        console.log("this is called first time on page load");
       this.setState({
           showText:!this.state.showText,
            changeColor:!this.state.changeColor
       })
    }
    handleCount=()=>{
        this.setState({
            ...this.state,
            count : this.state.count+1
        })
    }
    componentDidUpdate(prevProps,prevState)
    {
         console.log(prevProps,this.state);
         if(prevState && prevState.count!==this.state.count)
    }
      
    render()
    {
        console.log(this.state);
        const {showText,changeColor,count}=this.state
        return (<div>
            {
                showText ? <h4 style={{color:changeColor ? 'red':'black'}}>Class Based Component</h4>:null
            }
           
            <button onClick={this.handleClick}> Toggle Text</button>
            <button onClick={this.handleCount}>Increase Count Value</button>
            <h3>Count is {count}</h3>

        </div>);
    }
}


export default ClassBasedComponent;