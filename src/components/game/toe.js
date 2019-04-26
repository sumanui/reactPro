import React from 'react';

class Toe extends React.Component {
    constructor() {
        super();
        this.state = {
            space: Array(9).fill(''),
            player: 'x',
            winner: '',
            // totalmoves:0
        }
    }

    clicked(data) {
        var space =this.state.space
        if(this.state.winner == 'x' || this.state.winner == '0'){
            console.log(this.state.winner);
            
        }
        else if(space[data] == ''){
            space[data] = this.state.player
            this.setState({
                space:space,
                player: this.state.player === 'x' ? '0' : 'x',
                // totalmoves:this.state.totalmoves++
            })
        }
        var result = this.checkWinner()

        if(result == 'x'){
            this.setState({
                winner:'x',
            })
        }else if(result == '0'){
            this.setState({
                winner: '0'
            })
        }

    }
    checkWinner(){
        let winner =[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        let { player, space } = this.state

        console.log(winner.length);
        for(var i = 0; i<winner.length; i++){
            const [a,b,c] = winner[i]
            if(space[a] == space[c] && space[a] == space[b] && space[b] == space[c]){
                return space[a]
            }
        }
    }

    render() {
        return (
            <div id="game">
                <div id="border">
                    {this.state.space.map((key, data) => (
                        <div key={data} className="square"  onClick={() => this.clicked(data)}>
                            {key}
                        </div>
                    ))}
                 
                </div>
                <div className="">
                    <div>
                        winner : {this.state.winner}
                    </div>
                </div>
            </div>
        )
    }
}
export default Toe