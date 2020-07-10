import {FpsCoach} from 'shared/FpsCoach';
import {LoggedInUser} from 'shared/loggedInUser';

export class Booking{

    // coach: [{
    //     _id: String;
    // firstname:String;
    // lastname: String;
    // email: String;
    // contactno : String;
    // selectedgame: String;
    // hoursingame: String;
    // experience: String;
    // available: String;
    // perhourcharge: String;
    // image: String;
    // timings: String;
    // }],

    coach: FpsCoach;
    user: LoggedInUser;
    bookingdate: String;
    bookingstatus: String;

    constructor(coach: FpsCoach, user:LoggedInUser, bookingdate: String, bookingstatus: String){
        this.coach=coach;
        this.user=user;
        this.bookingdate=bookingdate;
        this.bookingstatus=bookingstatus;

    }
}