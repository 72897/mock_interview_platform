import { getRandomInterviewCover } from "@/lib/utils";
import { generateText } from "ai";
import { db } from "@/firebase/admin";
import { google } from "@ai-sdk/google";

export async function GET() {
  return Response.json({ success: true, data: "Thank You!" }, { status: 200 });
}

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-001"),
      prompt: ` Prepare questions for a job interviw.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in this job is ${techstack}.
        The focus between behavioural and technical questions should lean towares: ${type}.
        The amount of questions required is : ${amount}.
        Please return only the questions , without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters that might breka the voice assistant.
        Return the questions formatted like this:
        ["Questions 1" , "Question 2", "Questions3"]

        Thank you! <3
        `,
    });

    const interview = {
      role,
      type,
      level,
      techstack: techstack.split(","),
      question: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json(
      { success: false, data: "Something went wrong!" },
      { status: 500 }
    );
  }
}
