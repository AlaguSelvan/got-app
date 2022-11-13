import Character from '../../Models/Character'

interface ICharacterCard {
	character: Character
}

const CharacterCard = ({ character }: ICharacterCard) => {
	return (
		<div className="character-card">
			<div className="card-top-info">
				{character.houseName ?
					<p>{character.houseName}</p>
				: null}
				{character.royal ? (
					<div>
						<img src="https://library.kissclipart.com/20190220/fkq/kissclipart-game-of-thrones-taht-clipart-tyrion-lannister-clip-b887f1ea132f025c.png" width={40} height={40} alt={"royal"}/>
					</div>
				) : (
					<div>
						<img src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" width="40" height="40" alt={character.characterName + "default_img"} />
					</div>
				)}
			</div>
			<div className='card-body'>
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
					<div className={'actor-details'}>
						{character.actors?.length? (
								<ul>
								Played By:
									{character.actors.map(({actorName}, idx) => {
										return (
											<li key={idx}>
												<p>
													Actor: {actorName}
												</p>
											</li>
										)
									})}
								</ul>
						) : null}
					</div>
					{character.killedBy?.length > 0 ? (
						<ul>
							Killed By:
								{character.killedBy.map((actor, idx) => {
									return (
										<li key={idx}>
											<p>
												{actor}
											</p>
										</li>
									)
								})}
							</ul>
					) : null}
				</div>
			</div>
		</div>
	)
}
export default CharacterCard;