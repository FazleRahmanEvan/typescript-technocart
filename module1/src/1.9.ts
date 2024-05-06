{
    //type alias

    type Student = {
        name:string;
        age:number;
        gender:string;
        contactNo?: string;
        address:string;
    }

    const student1:Student={
        name:"Evan",
        age:50,
        gender:"male",
        contactNo: "013034222222",
        address:"syl",

    };
    const student2:Student={
        name:"Shakib",
        age:50,
        gender:"male",
        address:"syl",

    };

    type UserName = string;
    type IsAdmin = boolean;
    const userName: UserName = "Evan";
    const isAdmin: IsAdmin = true;

    type Add = (num1:number,num2:number)=> number;
    const add: Add=(num1,num2) => num1+num2;
}