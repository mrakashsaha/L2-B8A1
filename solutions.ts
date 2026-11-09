const multiplyValue = (value: number, multiplier?: number | undefined) : number=> {
    
    if (multiplier !== undefined) {
        return value*multiplier;
    }

    else {
        return value*2;
    }
}


const processInput = (value: string | number | boolean) : string | number => {
    if (typeof value === "string") {
        return value.trimStart().trimEnd().toLowerCase();
    }

    else if (typeof value === "number") {

        return value*10;
    }

    else {
        if (value) {
            return "Active";
        }

        else {
            return "Inactive"
        }
    }
}


const formatCoordinate = (corLocValue: readonly [number, number, string]) : string => {

    const [latitude, longitude, locationName] = corLocValue;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}   


const concatenateArrays = <T> (...arrays : T[][]) : T[] => {

    let newArray : T[] = [];



    for (const array of arrays) {
        newArray.push(...array);

    }

    return newArray;

}


interface Course {
    title: string,
    students: number,
    isPublished: boolean,
}


const getPopularCourses = (coursesArray: Course[], minStudent: number) : Course [] => {

    const newArray : Course[]= coursesArray.filter((course)=> course.isPublished===true && course.students >=minStudent);

    return newArray;

}


const pluckValues = <T, K extends keyof T> (items: T[], key:K) : T[K][] => {
    
    const newArray: T[K][] =  items.map((item)=> (item[key]))

    return newArray;
}


class Employee {
    constructor (protected name : string, private baseSalary : number) {}

    getDetails() : string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {

    

    constructor (name: string, baseSalary: number, private department : string) {
        super (name, baseSalary);
    }

    getRoleInfo() : string {
        return `Manager of ${this.department}: ${this.name}`
    }

}


const validateAgeAsync = async (age: number) : Promise<string> => {

    return new Promise ((resolve, reject)=> {
        if (age<18) {
            reject(new Error("Access Denied: Must be 18 or older"))
        }

        else {
            setTimeout(()=> {
                resolve("Access Granted")
            }, 1000)
        }
    })
}
