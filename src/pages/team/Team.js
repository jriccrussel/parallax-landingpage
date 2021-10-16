import styled from 'styled-components'
import Card from '../../component/Card'
import './Team.scss'

const Team = () => {
    return (
        <main className="team__body">
            <div className="content">
                <h1 className="team_title">Meet the team</h1>
                
                <div className="row">
                    {/* {Array.from({length:8}, (_, index) => (
                        <div className={`cardd w_25 card${index+1}`}>
                            <h5>Lorem Ipsum</h5>
                            <p>Creative Designer</p>
                            <a href="#">View profile</a>
                        </div>                    
                    ))} */}
                    <Card
                        className="cardd card1"
                        title="Lorem Ipsum"
                        text="Creative Designer"
                        link="View profile"
                    />
                    <Card
                        className="cardd card2"
                        title="Lorem Ipsum"
                        text="Creative Designer"
                        link="View profile"
                    />
                    <Card
                        className="cardd card3"
                        title="Lorem Ipsum"
                        text="Creative Designer"
                        link="View profile"
                    />
                    <Card
                        className="cardd card4"
                        title="Lorem Ipsum"
                        text="Creative Designer"
                        link="View profile"
                    />
                    <Card
                        className="cardd card5"
                        title="Lorem Ipsum"
                        text="Creative Designer"
                        link="View profile"
                    />
                    <Card
                        className="cardd card6"
                        title="Lorem Ipsum"
                        text="Creative Designer"
                        link="View profile"
                    />
                    <Card
                        className="cardd card7"
                        title="Lorem Ipsum"
                        text="Creative Designer"
                        link="View profile"
                    />
                    <Card
                        className="cardd card8"
                        title="Lorem Ipsum"
                        text="Creative Designer"
                        link="View profile"
                    />
                </div>
            </div>
        </main>
    )
}

export default Team
