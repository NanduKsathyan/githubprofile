import React,{Component} from 'react'
class Search extends Component{
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        },()=>{
            console.log('hello')
        })
    }
    render(){
        return(
            <div className="input-group search-container ">
                <input className="form-control no-right" type="text" placeholder='Find Repository'  onChange={this.handleChange}/>
                
            </div>
        )
    }
    
}
export default Search