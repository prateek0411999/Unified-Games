


export interface obj{

    __v: Number;
    _id: String;

    coach:[{
        _id: String; 
        firstname:String;
        lastname: String;
        email: String;
        contactno : String;
        selectedgame: String;
        hoursingame: String;
        experience: String;
        available: String;
        perhourcharge: String;
        image: String;
        timings: String;
    }];
    user: [{
        id: String;
        confirmPassword: String;
    
        contactno: String;
        email: String;
        firstname: String;
        lastname: String;
        password: String;
    }];

    bookingdate: String;
    bookingstatus: String;

}