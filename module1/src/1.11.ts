{
    //ternary operator || optional chaining || nullish coalescing operator

    const age : number = 19;

    if (age >= 18){
        console.log('adult');
    }else{
        console.log('not adult');
    }

    const isAdult = age >= 18? 'adult' : 'not adult'
    console.log({isAdult})


    //nullish coalescing operator
    //null / undefined

    const isAuthenticated = null;
    const result1= isAuthenticated?? 'Guest';
    console.log({result1});

    

    type User = {
        name:string;
        adress:{
            city:string;
            presentaddress:string;
            permanentAddress?: string
        }
    }
    const user: User ={
        name:'Evan',
        adress: {
            city:'syl',
            presentaddress:'nobab rd'

        },
    };
    const permanentAddress = user?.adress?.permanentAddress ?? "no permanent address"
    console.log ({permanentAddress});

    //
}