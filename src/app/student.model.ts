export class Student {
    name: string; // מאפיין מסוג string
    age: number;  // מאפיין מסוג number

    // קונסטרקטור שמקבל ערכים עבור המאפיינים
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}