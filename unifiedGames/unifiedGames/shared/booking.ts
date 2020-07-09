export class Booking{

    coachemail: String;
    useremail: String;
    bookingdate: String;
    bookingstatus: String;

    constructor(coachemail: String, useremail:String, bookingdate: String, bookingstatus: String){
        this.coachemail=coachemail;
        this.useremail=useremail;
        this.bookingdate=bookingdate;
        this.bookingstatus=bookingstatus;

    }
}