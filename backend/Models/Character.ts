import Actor from './Actor'


export default interface Character {
	characterName: string;
	characterLink: string;
	actorName: string;
	actorLink: string;
	houseName: any;
	royal?: boolean;
	parents: string[];
	siblings: string[];
	killedBy: string[];
	characterImageThumb: string;
	characterImageFull: string;
	nickname: string;
	killed: string[];
	servedBy: string[];
	parentOf: string[];
	marriedEngaged: string[];
	serves: string[];
	kingsguard?: boolean;
	guardedBy: string[];
	actors: Actor[];
	guardianOf: string[];
	allies: string[];
	abductedBy: string[];
	abducted: string[];
	sibling: string[];
}