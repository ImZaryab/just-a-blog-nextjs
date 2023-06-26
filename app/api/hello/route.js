import { NextResponse } from "next/server";

//Example GET Request on http://localhost:{port}/api/hello
export async function GET(){
    const helloData = {
        id: 1,
        message: "Hey there! Navigating the api routes, are ya?"
    };

    return NextResponse.json({ response: helloData }, { status: 200 });
}

/*Example POST Request on http://localhost:{port}/api/hello
  WHERE body = 
    {
        firstName: *value*,
        lastName: *value*
    }
*/
export async function POST(request){
    //Get the user data from the request body WHERE using await IS NECESSARY
    const { firstName, lastName } = await request.json();

    //Do something + return data
    const customMessage = "Hello " + firstName + " " + lastName + "!";

    return NextResponse.json({ response: customMessage }, {status: 200});
}