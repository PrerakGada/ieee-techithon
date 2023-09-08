import './Highlights.css'
import { useNavigate } from "react-router-dom";


export function Highlights() {
    return (
        <div class="content demo">
            <div class="card-hghlght demo-card">
                <h1>DAY 1</h1>
            </div>
            <div class="card-hghlght demo-card">
                <h1>DAY 2</h1>
            </div>
            <div class="card-hghlght demo-card">
                <h1>DAY 3</h1>
            </div>
        </div>
    )
}

export function PreEvents() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/events`; 
    navigate(path);
    }
    return (
        <div class="content demo">
            <div class="card-hghlght demo-card">
                <img src="/img/3.jpg " alt="3"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>
            <div class="card-hghlght demo-card">
                <img src="/img/8.jpg " alt="8"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>
            <div class="card-hghlght demo-card">
                <img src="/img/7.jpg " alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>
        </div>
    )
}