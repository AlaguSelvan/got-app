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
							<b>{character.characterName}</b>
						</div>
						<div className={'character-details'}>
							<p> Played By: {character.actorName}</p>
						</div>
					</div>
				</div>
				<div className='card-list-area'>
					<div className={'actor-details'}>
						{character.actors && character.actors.length > 0 ? (
							<ul className='actor-list'>
								Played By:
								{character.actors.map(({ actorName }, idx) => {
									return (
										<li key={idx}>
											Actor: {actorName}  {idx === character.actors.length - 1 ? "" : ","}
										</li>
									)
								})}
							</ul>
						) : null}
					</div>
					<div className='killedBy-details'>
						{character.killedBy && character.killedBy.length > 0 ? (
							<ul className='killedBy-list'>
								Killed By:
								{character.killedBy.map((actor, idx) => {
									return (
										<li key={idx}>
											{actor} {idx === character.killedBy.length - 1 ? "" : ","}
										</li>
									)
								})}
							</ul>
						) : null}
					</div>
				</div>

			</div>
		</div>
	)
}
export default CharacterCard;