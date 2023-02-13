import any = jasmine.any;

export interface CatEvent {

    status: { verified: boolean; sentCount: number },
    _id: string,
    user: string,
    text: string,
    __v: number,
    source: string,
    updatedAt: Date,
    type: string,
    createdAt: Date,
    deleted: boolean,
    used: boolean
}