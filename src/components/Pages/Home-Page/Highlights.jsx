import { useNavigate } from "react-router-dom";
import './Highlights.css';


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

export default function PreEvents() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/events`; 
    navigate(path);
    }
    return (
        <div class="content demo">
            <div class="card-hghlght demo-card">
                <img src="\events\volleyball.png" alt="3"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>
            <div class="card-hghlght demo-card">
                <img src="\events\cricket.png" alt="8"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>
            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>


            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>


            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>

            <div class="card-hghlght demo-card">
                <img src="\events\footbal.png" alt="7"></img>
                <button onClick={routeChange} className='btn' >Register</button>
            </div>
        </div>
    )
}