import React from 'react'
import Character from '../../Models/Character'

const CharacterCard = (character: Character) => {
	return (
		<div className="character-card">
			<div id="card-top-info">
				<p>
					House Name: {character.houseName}
				</p>
				{character.royal ? (
					<img src="http://clipart-library.com/images_k/iron-throne-silhouette/iron-throne-silhouette-8.png" width={40} height={40} alt={"royal"}/>
				) : null}
			</div>
			<div className='card-body'>
				<img src={character.characterImageThumb} alt={character.characterName}/>
				<p>
					Character Name: {character.characterName}
				</p>
				<div>
					Played By:
					<div>
						{character.actors.map((actor, idx) => {
							return(
								<li key={idx}>
									<p>
										Actor: {actor.actorName}
									</p>
								</li>
							)
							})}
					</div>
				</div>
				<div>
					killed By:
					<div>
						{character.killed.map((actorName, idx) => {
							return (
								<li key={idx}>
									<p>
										Actor: {actorName}
									</p>
								</li>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
export default CharacterCard;