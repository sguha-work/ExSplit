export default interface Subject {
    id?: number;
    title: string;
    description?: string;
    createdBy: string; // usr id
    createdOn: number; // UNIX timestamp
    members: Array<{
        userId: number;
        name: string;
    }>
}