import { NextResponse } from "next/server";
const { sequelize, connectDB } = require("../../../models/db.js");
const { Line, syncDB } = require("../../../models/model.js");

export async function POST(req) {
  const sample = {
    count: 25,
    result: [
      {
        id: 1,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Lidia",
        pickup_line:
          "Today, I dont feel like doing anything, except you, I'd do you",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "0:11",
        end_time: "0:25",
        result: "No",
      },
      {
        id: 16,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Abbie",
        pickup_line: "You're such a fucking hoe",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "5:03",
        end_time: "5:28",
        result: "Again",
      },
      {
        id: 18,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Abbie",
        pickup_line: "I got you these flowers",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "5:48",
        end_time: "6:00",
        result: "Yes",
      },
      {
        id: 25,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Ella",
        pickup_line:
          "Do you want to come back to mine and watch porn on my 52' monitor?",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "12:21",
        end_time: "12:36",
        result: "No",
      },
      {
        id: 29,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Gina",
        pickup_line: "You gonna eat that?",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "7:23",
        end_time: "7:44",
        result: "No",
      },
      {
        id: 43,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Jane",
        pickup_line: "I have more money than penis. And my dick is massive.",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "9:05",
        end_time: "9:23",
        result: "Yes",
      },
      {
        id: 49,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Kate",
        pickup_line: "Are you from tennessee, because I eat arse",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "10:26",
        end_time: "10:36",
        result: "No",
      },
      {
        id: 54,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "EmilyA",
        pickup_line: "Do you have any Nigerian in you? ... Do you want some?",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "11:27",
        end_time: "11:38",
        result: "Yes",
      },
      {
        id: 57,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Chloe",
        pickup_line:
          "My name is Babatunde, and I'm going to bend you over, and put the Lord Jesus Christ inside of you",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "14:05",
        end_time: "14:28",
        result: "Yes",
      },
      {
        id: 61,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Rosie",
        pickup_line: "Im fly as hell",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "15:02",
        end_time: "15:24",
        result: "No",
      },
      {
        id: 74,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Lea",
        pickup_line:
          "When I'm done with you in bed, Im gonna make you shake more than Vikk ",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "17:04",
        end_time: "17:29",
        result: "No",
      },
      {
        id: 76,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Emma",
        pickup_line:
          "Santa's lap isn't the only lap you can sit on to get a big present",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "35:27",
        end_time: "35:45",
        result: "No",
      },
      {
        id: 80,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Velvet",
        pickup_line:
          "Are you from a farm? Cause you sure know how to raise a cock",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "38:20",
        end_time: "39:01",
        result: "No",
      },
      {
        id: 91,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Hannah",
        pickup_line:
          "You know what they say about black people, once you go black, you're gonna need a wheel-",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "19:35",
        end_time: "19:57",
        result: "No",
      },
      {
        id: 105,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Elisha",
        pickup_line: "Is your dad in jail? If I was your dad, I'd be in jail",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "21:16",
        end_time: "21:31",
        result: "No",
      },
      {
        id: 106,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Manny",
        pickup_line:
          "Ha! Ah! Ha! Well, this is the point where you started squirtin'",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "40:29",
        end_time: "41:09",
        result: "No",
      },
      {
        id: 112,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Miss Johnny Bones",
        pickup_line:
          "Damn, girl. You look... Woah! Yeah, you're definitely packin'. Wow.",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "44:10",
        end_time: "44:42",
        result: "No",
      },
      {
        id: 119,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Jennifer",
        pickup_line: "Are you retarded? Because you look very special to me",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "21:53",
        end_time: "22:43",
        result: "Yes",
      },
      {
        id: 123,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Molly",
        pickup_line: "<rejected before saying line lol>",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "46:37",
        end_time: "47:01",
        result: "No",
      },
      {
        id: 135,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Nemi",
        pickup_line:
          "If I could rate you out of 10, I wouldn't, because all women are beautiful, and shouldn't be rated by misogynistic men, you wear though",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "49:13",
        end_time: "49:35",
        result: "No",
      },
      {
        id: 139,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "EmilyS",
        pickup_line: "Do you know what this is? Its a shirt",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "25:22",
        end_time: "25:40",
        result: "Yes",
      },
      {
        id: 145,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Danielle",
        pickup_line:
          "You know what this is? Well, it's 100% cotten, thats why I picked it",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "26:26",
        end_time: "26:53",
        result: "Again",
      },
      {
        id: 154,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Danielle",
        pickup_line:
          "Your back is on fire, fam! Dunno! I think you're a lovely women, and I'd love to take you to a great dinner",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "29:32",
        end_time: "30:24",
        result: "Yes",
      },
      {
        id: 161,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Kendal",
        pickup_line:
          "I've got a time traveling watch, and you're not wearing any underwear",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "31:51",
        end_time: "32:26",
        result: "No",
      },
      {
        id: 162,
        video_title: "SIDEMEN TINDER IN REAL LIFE 2",
        speaker: "KSI",
        speakee: "Lakita",
        pickup_line:
          "If you don't swipe right, you're clearly racist and hate black peopple",
        video_link: "https://youtu.be/aAOC71qqXxM?si=iEFwHilNZRhfvOdy",
        start_time: "32:30",
        end_time: "32:48",
        result: "Yes",
      },
    ],
  };

  return NextResponse.json(sample);
  // try {
  //   await connectDB();
  //   await syncDB();

  //   req = await req.json();

  //   const data = req.data
  //     ? await Line.findAll(req.data)
  //     : await Line.findAll();

  //   return NextResponse.json({
  //     count: data.length,
  //     result: data,
  //   });
  // } catch (err) {
  //   NextResponse.json({
  //     error: toString(err),
  //   });
  // }
}
