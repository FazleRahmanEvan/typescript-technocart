{
//spread operator
//rest operator
//destructuring

//learing spread operator

const bros1: string[] =[
    'evan',
    'rad',
    'nirvic',]
const bros2: string[] =['torun','mahdi','adil']

bros1.push(...bros2)

const mentors1 = {
    typescript:'Mezba',
    redux:'Mir',
    dbms:'Mizan'
}
const mentors2 = {
    prisma:'firoz',
    nextjs:'tanmoy',
    cloud:'nahid'
}
const mentorList = {
    ...mentors1,
    ...mentors2
}


//learn rest operator

const greetFriends = (...friends:string[])=>{
    // console.log(`hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend:string)=>console.log(`hi ${friend}`))
};

greetFriends('abul','kabul','babul')

}