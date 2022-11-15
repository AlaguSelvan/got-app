import React from 'react'
import Character from '../../Models/Character'

interface ICharacterCard {
	character: Character
}

const CharacterCard = ({ character }: ICharacterCard) => {
	return (
		<div className="character-card">
			<div className="card-top-info">
				<div className='card-home-text'>
					{character.houseName ? (
						<p>House: {character.houseName}</p>
							)
							: (<p>House: N/A</p>)}
					</div>
				<div className='card-royal-img'>
					{character.royal ? (
							<img src="https://library.kissclipart.com/20190220/fkq/kissclipart-game-of-thrones-taht-clipart-tyrion-lannister-clip-b887f1ea132f025c.png" width={40} height={40} alt={"royal"}/>
					) : (<p>N/A</p>) }
					</div>
			</div>
			<div className='card-body'>
				<div className='card-top-body'>
					{character.characterImageThumb ? (
						<div className='card-image'>
							<img src={character.characterImageThumb} alt={character.characterName} className='card-image' onError={(e: any) => e.target.src = 'https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'} />
						</div>
					) : (
						<div className='card-image'>
								<img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" className='card-image' alt={character.characterName + "default_img"} />
						</div>
					)}
					<div className='content-card-area'>
						<div className={'character-details'}>
							<p>Character Name: <b>{character.characterName}</b> </p>
						</div>
						<div className={'character-details'}>
							{character.actorName ? 
								<p>Played By: <b>{character.actorName}</b> </p>
							: null}
						</div>
					</div>
				</div>
				<div className='card-list-area'>
					<div className={'actor-details'}>
						{!character.actorName && character.actors && character.actors.length > 0 ? (
							<ul className='actor-list'>
								Played By:
								{character.actors && character.actors.length > 0 ? character.actors.map(({ actorName }, idx) => {
									return (
										<li key={idx}>
											<b>{actorName}{idx === character.actors.length - 1 ? "" : ","}</b>
										</li>
									)
								}) : <li> N/A</li>}
							</ul>

					) : null}
					</div>
					<div className='killedBy-details'>
							<ul className='killedBy-list'>
								Killed By:
								{character.killedBy && character.killedBy.length > 0 ?character.killedBy.map((actor, idx) => {
									return (
										<li key={idx}>
											<b>{actor} {idx === character.killedBy.length - 1 ? "" : ","}</b>
										</li>
									)
								}) : null}
							</ul>
					</div>
					<div className='killedBy-details'>
							<ul className='killedBy-list'>
								Parents:
								{character.parents && character.parents.length > 0 ?character.parents.map((parent, idx) => {
									return (
										<li key={idx}>
											<b>{parent} {idx === character.parents.length - 1 ? "" : ","}</b>
										</li>
									)
								}) : <li> N/A</li>}
							</ul>
					</div>
				</div>

			</div>
		</div>
	)
}
export default CharacterCard;