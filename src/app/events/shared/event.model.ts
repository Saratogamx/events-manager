import { ISession } from './session.model';
import { ILocation } from './location.model';

export interface IEvent {
    id: number;
    name: string;
    date: Date;
    time: string;
    price: number;
    imageUrl: string;
    location?: ILocation;
    onlineUrl?: string;
    sessions: ISession[];
}
