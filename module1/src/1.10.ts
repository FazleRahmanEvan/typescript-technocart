{
    //union types

    // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'

    // const newDeveloper : FrontendDeveloper = 'fakibazDeveloper'

    // type User = {
    //     name: string;
    //     email?: string;
    //     gender: "male" | "female";
    //     bloodGroup: "O-" | "O+"

       
    // }

    // const user1: User ={
    //     name:'Evan',
    //     gender:'male',
    //     bloodGroup:'O-'
    // }


    //intersection type

    type FrontendDeveloper={
        skills: string[];
        designation1:'Frontend Developer'
    }
    type BackendDeveloper={
        skills: string[];
        designation2:'Backend Developer'
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

    const fullstackDeveloper : FullstackDeveloper ={
        skills:['HTML','CSS','EXPRESS',],
            designation1: 'Frontend Developer',
            designation2: 'Backend Developer'
        
    }
}