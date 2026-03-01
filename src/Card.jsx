import profilePic from './assets/catdrinkingmilk.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Sol</h2>
            <p className="card-text">I study Computer Science and watch movies</p>
        </div>
    );
}

export default Card