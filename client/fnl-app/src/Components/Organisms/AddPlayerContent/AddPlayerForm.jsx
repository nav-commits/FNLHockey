import React from 'react';
import Input from '../../Atoms/Input/Input';
import Button from '../../Atoms/Button/Button';
import './AddPlayerForm.css';

function AddPlayerForm({ addPlayer, onInputChange, onAddTeam, onImageUpload, onFormSubmit, fields }) {

    return (
        <form onSubmit={onFormSubmit}>
            <div className='form-style'>
                <h2>Add Player</h2>
                <div className='form-content'>
                    {fields.map(field => (
                        <Input
                            key={field.name}
                            name={field.name}
                            type={field.type}
                            value={addPlayer[field.name]}
                            onChange={onInputChange}
                            placeholder={field.placeholder}
                        />
                    ))}
                    {addPlayer.team.map((team, index) => (
                        <div key={index}>
                            <Input
                                name='team'
                                value={team}
                                onChange={(event) => onInputChange(event, index)}
                                placeholder='Team'
                            />
                        </div>
                    ))}
                    <Button
                        title='Add Team'
                        onClick={onAddTeam}
                        color='#d9d9d9'
                        width='205px'
                        type='button'
                    />
                    <Input type='file' onChange={onImageUpload} placeholder='Image' />
                    <Button title='Add Player' color='#d9d9d9' width='205px' type='submit' />

                </div>

            </div>
        </form>
    );
}

export default AddPlayerForm;