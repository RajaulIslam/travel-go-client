import React from 'react';
import img1 from "../../images/turkies.jpg";
import img2 from "../../images/destination.jpg";
import img3 from "../../images/gosty.png";
import { Card, CardGroup } from 'react-bootstrap';
import './Inspiration.css'


const Inspiration = () => {
    return (
        <div>
            <h1>Get inspiration for your next trip</h1>
            <CardGroup>
                <Card>
                    <Card.Img  variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Turkey's most beautiful islands</Card.Title>
                        <Card.Text>
                            Turkey is home to some of the world's most divine islands, from a car-free archipelago just a short ferry ride from Istanbul, to the likes of Gökçeada, where olive groves are lapped by the impeccably clear waters of the Aegean Sea. Here are a few of the best Turkish islands.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Destination inspiration: Seoul, South Korea</Card.Title>
                        <Card.Text>
                            There’s an undercurrent buzzing beneath South Korea's eclectic capital city – and not just because it’s the world’s most wired city. Aside from its infinite cable connections and public wifi coverage, this neon-flecked metropolis is renowned for its 24-hour lifestyle which entices both daytime wanderlusters and nocturnal travellers.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Ghostly getaways for Halloween</Card.Title>
                        <Card.Text>
                            Experience a Halloween to remember with one of these six luxurious stays inspired by mythology, culture and festivities. Leave behind creaky floorboards, icy drafts and haunted hallways and opt for comfort and luxury. You don’t have to stay in a house of horrors to celebrate Halloween 2021, let your imagination run wild in these top spooky stays, provided it’s safe and responsible to travel.
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default Inspiration;