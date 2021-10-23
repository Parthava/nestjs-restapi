import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items : Item[] = [
        {
            "id": "43456455677",
            "name": "John",
            "description": "First post request",
            "qty": 6
        },
        {
            "id": "43456455672",
            "name": "Alice",
            "description": "Second post request",
            "qty": 12
        },
        {
            "id": "43456455674",
            "name": "Tim",
            "description": "Third post request",
            "qty": 15
        },
        {
            "id": "43456455671",
            "name": "Kate",
            "description": "Forth post request",
            "qty": 24
        }
    ]

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id)
    }
}
