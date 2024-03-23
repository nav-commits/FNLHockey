import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import AddPlayerForm from '../Organisms/AddPlayerContent/AddPlayerForm';
import { fields } from '../../Utils/Data'

function AddPlayer() {
    const [addPlayer, setAddPlayer] = useState({
        name: '',
        age: '',
        team: [''],
        username: '',
        shootHand: '',
        img: '',
        position: ''
    });
    const { getAccessTokenSilently } = useAuth0();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const token = await getAccessTokenSilently();
            const response = await fetch('https://fnl-hockey-app-a9bd72bb9787.herokuapp.com/addPlayer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(addPlayer),
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleChange = (event, index) => {
        if (event.target.name === 'team') {
            let newTeams = [...addPlayer.team];
            newTeams[index] = event.target.value;
            setAddPlayer({ ...addPlayer, team: newTeams });
        } else {
            setAddPlayer({ ...addPlayer, [event.target.name]: event.target.value });
        }
    };

    const handleAddTeam = () => {
        setAddPlayer({ ...addPlayer, team: [...addPlayer.team, ''] });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setAddPlayer({ ...addPlayer, img: reader.result });
        };
        reader.readAsDataURL(file);
    };

    return (
        <>
            <AddPlayerForm
                addPlayer={addPlayer}
                onInputChange={handleChange}
                onFormSubmit={handleSubmit}
                onAddTeam={handleAddTeam}
                onImageUpload={handleImageUpload}
                fields={fields}
            />
        </>
    );
}

export default AddPlayer;
