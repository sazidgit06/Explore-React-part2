import { useState } from "react"

export default function Team () {
    const [team, setTeam] = useState(11);

    // style
    const teamStyle = {
        border : '2px solid olive',
        borderRadius : '10px',
        padding : '10px',
        margin : '10px'
    }

    const handleAdd = () => {
        setTeam(team + 1);
    }

    const handleReduce = () => {
        setTeam(team - 1);
    }

    return (
        <div style={teamStyle}>
            <h4>Team players: {team}</h4>
            <button
            style={{color: 'blue'}}
            onClick={handleAdd}>Add</button>
            <button
            style={{color: 'red'}}
            onClick={handleReduce}>Reduce</button>
        </div>
    )
}