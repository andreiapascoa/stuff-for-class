import React from 'react';
import Flex from './Flex';
import Card from './Card';
import Sound from './Sound';
import chairImage from '../assets/chair.png';
import rows from '../assets/cadets98.json';

const SPACE_KEY = 32;
const S_KEY = 83;

const classSize = rows.reduce((total, row) => total + row.length, 0);
const sounds = new Sound(classSize);
let jerkMode = false;

class Room extends React.Component {
    state = { rows, show: 0 };

    componentDidMount() {
        
        document.addEventListener('keydown', key => {
            if (this.state.show === 0 && key.keyCode === S_KEY) {
                jerkMode = true;
            }

            if (key.keyCode !== SPACE_KEY || sounds.isPlaying()) {
                return;
            }

            sounds.suspense();
        });

        document.addEventListener('keyup', key => {
            if (key.keyCode !== SPACE_KEY || !sounds.isPlaying()) {
                return
            }

            if (this.state.show === 0 && !jerkMode) {
                randomize(rows);
            }

            this.setState({ show: this.state.show + 1 })
            sounds.tada()
        })
    }

    render() {
        let aux = 0;

        return (
            <Flex direction={Flex.DIRECTION.VERTICAL} style={{ height: '100vh' }}>
                {this.state.rows.map((row, index) => (
                    <Flex key={index}>
                        {row.map((cadet) =>
                            <Flex key={cadet} direction={Flex.DIRECTION.VERTICAL}>
                                <Card>
                                    <Card.Image src={chairImage} />
                                    <Card.Description text={aux++ < this.state.show ? cadet : ''} />
                                </Card>
                            </Flex>
                        )}
                    </Flex>
                ))}
            </Flex>
        );
    }
};

function randomize(rows) {

    for (let i = 0; i < rows.length; i++) {

        for (let j = 0; j < rows[i].length; j++) {
            const r = Math.floor(Math.random() * rows.length);
            const s = Math.floor(Math.random() * rows[r].length);
            const aux = rows[r][s];
            rows[r][s] = rows[i][j];
            rows[i][j] = aux;
        }
    }

    return rows;
}

export default Room;
