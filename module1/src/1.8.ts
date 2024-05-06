// destrucuring
{
const user = {
    id: 26,
    name:{
        firstName:'Fazle',
        middleName:'Rahman',
        lastName:'Evan'
    },
    contactNo:'01699999999',
    address:'Papua'
}
const {
    contactNo,
    name:{middleName},
   } = user;

   
}