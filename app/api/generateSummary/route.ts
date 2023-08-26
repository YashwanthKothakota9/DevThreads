import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request:Request){
    //todos in body of post req
    const todos = await request.json();
    console.log(todos);

    //communicate with openai
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system", 
                "content": `When responding welcome the user always as Mr.Todoer and say welcome to the New Age of Todoing! Limit the response to 200 characters.`
            },
            {
                "role": "user",
                "content":`Hi there provide a summary of following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)} `
            }
        ],
    });
    
    console.log(chatCompletion.choices[0].message);
    
    return NextResponse.json(chatCompletion.choices[0].message)
}