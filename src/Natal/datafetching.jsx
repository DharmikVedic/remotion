import React, { useCallback, useEffect, useState } from 'react'
import { continueRender, delayRender, Series } from 'remotion';
import { FetchApi } from '../utils/apicall';
import CircleSvg from './CircleSvg';
import KeyFetures, { KeyTitle } from './keyFetures';
import Card from './signs/card';
import Zodiac from './signs/zodiac';
import { BgTransition } from './Transition/BackgroundTransition';
import { Transition } from './Transition/SlideTransition';

export default function Datafetching({ userdetail, apinames, children }) {
  const [data, setData] = useState({
    chart_url: "https://s3.ap-south-1.amazonaws.com/western-chart/21622820-3830-11ed-abe2-612b9b571105.svg",

    "planets": [
      {
        "name": "Sun",
        "full_degree": 351.5423,
        "norm_degree": 21.5423,
        "speed": 0.9981,
        "is_retro": "false",
        "sign_id": 12,
        "sign": "Pisces",
        "house": 3
      },
      {
        "name": "Moon",
        "full_degree": 78.5066,
        "norm_degree": 18.5066,
        "speed": 13.7134,
        "is_retro": "false",
        "sign_id": 3,
        "sign": "Gemini",
        "house": 6
      },
      {
        "name": "Mars",
        "full_degree": 317.4463,
        "norm_degree": 17.4463,
        "speed": 0.7727,
        "is_retro": "false",
        "sign_id": 11,
        "sign": "Aquarius",
        "house": 2
      },
      {
        "name": "Mercury",
        "full_degree": 9.4386,
        "norm_degree": 9.4386,
        "speed": 0.7227,
        "is_retro": "false",
        "sign_id": 1,
        "sign": "Aries",
        "house": 3
      },
      {
        "name": "Jupiter",
        "full_degree": 158.1518,
        "norm_degree": 8.1518,
        "speed": -0.1246,
        "is_retro": "true",
        "sign_id": 6,
        "sign": "Virgo",
        "house": 8
      },
      {
        "name": "Venus",
        "full_degree": 327.373,
        "norm_degree": 27.373,
        "speed": 1.2348,
        "is_retro": "false",
        "sign_id": 11,
        "sign": "Aquarius",
        "house": 2
      },
      {
        "name": "Saturn",
        "full_degree": 314.0268,
        "norm_degree": 14.0268,
        "speed": 0.1031,
        "is_retro": "false",
        "sign_id": 11,
        "sign": "Aquarius",
        "house": 2
      },
      {
        "name": "Uranus",
        "full_degree": 287.3115,
        "norm_degree": 17.3115,
        "speed": 0.0335,
        "is_retro": "false",
        "sign_id": 10,
        "sign": "Capricorn",
        "house": 1
      },
      {
        "name": "Neptune",
        "full_degree": 288.5309,
        "norm_degree": 18.5309,
        "speed": 0.0211,
        "is_retro": "false",
        "sign_id": 10,
        "sign": "Capricorn",
        "house": 1
      },
      {
        "name": "Pluto",
        "full_degree": 232.8818,
        "norm_degree": 22.8818,
        "speed": -0.0092,
        "is_retro": "true",
        "sign_id": 8,
        "sign": "Scorpio",
        "house": 11
      },
      {
        "name": "Node",
        "full_degree": 276.5437,
        "norm_degree": 6.5437,
        "speed": -0.0033,
        "is_retro": "true",
        "sign_id": 10,
        "sign": "Capricorn",
        "house": 1
      },
      {
        "name": "Chiron",
        "full_degree": 123.7434,
        "norm_degree": 3.7434,
        "speed": -0.0378,
        "is_retro": "true",
        "sign_id": 5,
        "sign": "Leo",
        "house": 7
      },
      {
        "name": "Part of Fortune",
        "full_degree": 189.2474,
        "norm_degree": 9.2474,
        "speed": 0,
        "is_retro": "false",
        "sign_id": 7,
        "sign": "Libra",
        "house": 9
      }
    ],
    "houses": [
      {
        "house": 1,
        "sign": "Capricorn",
        "degree": 276.2117
      },
      {
        "house": 2,
        "sign": "Aquarius",
        "degree": 308.58474
      },
      {
        "house": 3,
        "sign": "Pisces",
        "degree": 343.28065
      },
      {
        "house": 4,
        "sign": "Aries",
        "degree": 16.66321
      },
      {
        "house": 5,
        "sign": "Taurus",
        "degree": 45.84563
      },
      {
        "house": 6,
        "sign": "Gemini",
        "degree": 71.47871
      },
      {
        "house": 7,
        "sign": "Cancer",
        "degree": 96.2117
      },
      {
        "house": 8,
        "sign": "Leo",
        "degree": 128.58474
      },
      {
        "house": 9,
        "sign": "Virgo",
        "degree": 163.28065
      },
      {
        "house": 10,
        "sign": "Libra",
        "degree": 196.66321
      },
      {
        "house": 11,
        "sign": "Scorpio",
        "degree": 225.84563
      },
      {
        "house": 12,
        "sign": "Sagittarius",
        "degree": 251.47871
      }
    ],
    "ascendant": 276.2116984185179,
    "midheaven": 196.66321120913742,
    "vertex": 145.24280677728913,
    "lilith": {
      "name": "Lilith",
      "full_degree": 305.5772,
      "norm_degree": 5.5772,
      "speed": 0.1111,
      "is_retro": "false",
      "sign_id": 11,
      "sign": "Aquarius",
      "house": 1
    },
    "aspects": [
      {
        "aspecting_planet": "Sun",
        "aspected_planet": "Moon",
        "aspecting_planet_id": 0,
        "aspected_planet_id": 1,
        "type": "Square",
        "orb": 3.04,
        "diff": 86.96
      },
      {
        "aspecting_planet": "Sun",
        "aspected_planet": "Uranus",
        "aspecting_planet_id": 0,
        "aspected_planet_id": 7,
        "type": "Sextile",
        "orb": 4.23,
        "diff": 64.23
      },
      {
        "aspecting_planet": "Sun",
        "aspected_planet": "Neptune",
        "aspecting_planet_id": 0,
        "aspected_planet_id": 8,
        "type": "Sextile",
        "orb": 3.01,
        "diff": 63.01
      },
      {
        "aspecting_planet": "Sun",
        "aspected_planet": "Pluto",
        "aspecting_planet_id": 0,
        "aspected_planet_id": 9,
        "type": "Trine",
        "orb": 1.34,
        "diff": 118.66
      },
      {
        "aspecting_planet": "Moon",
        "aspected_planet": "Mars",
        "aspecting_planet_id": 1,
        "aspected_planet_id": 2,
        "type": "Trine",
        "orb": 1.06,
        "diff": 121.06
      },
      {
        "aspecting_planet": "Moon",
        "aspected_planet": "Saturn",
        "aspecting_planet_id": 1,
        "aspected_planet_id": 6,
        "type": "Trine",
        "orb": 4.48,
        "diff": 124.48
      },
      {
        "aspecting_planet": "Moon",
        "aspected_planet": "Midheaven",
        "aspecting_planet_id": 1,
        "aspected_planet_id": 11,
        "type": "Trine",
        "orb": 1.84,
        "diff": 118.16
      },
      {
        "aspecting_planet": "Mars",
        "aspected_planet": "Venus",
        "aspecting_planet_id": 2,
        "aspected_planet_id": 5,
        "type": "Conjunction",
        "orb": 9.93,
        "diff": 9.93
      },
      {
        "aspecting_planet": "Mars",
        "aspected_planet": "Saturn",
        "aspecting_planet_id": 2,
        "aspected_planet_id": 6,
        "type": "Conjunction",
        "orb": 3.42,
        "diff": 3.42
      },
      {
        "aspecting_planet": "Mars",
        "aspected_planet": "Pluto",
        "aspecting_planet_id": 2,
        "aspected_planet_id": 9,
        "type": "Square",
        "orb": 5.44,
        "diff": 84.56
      },
      {
        "aspecting_planet": "Mars",
        "aspected_planet": "Midheaven",
        "aspecting_planet_id": 2,
        "aspected_planet_id": 11,
        "type": "Trine",
        "orb": 0.78,
        "diff": 120.78
      },
      {
        "aspecting_planet": "Mercury",
        "aspected_planet": "Saturn",
        "aspecting_planet_id": 3,
        "aspected_planet_id": 6,
        "type": "Sextile",
        "orb": 4.59,
        "diff": 55.41
      },
      {
        "aspecting_planet": "Mercury",
        "aspected_planet": "Uranus",
        "aspecting_planet_id": 3,
        "aspected_planet_id": 7,
        "type": "Square",
        "orb": 7.87,
        "diff": 82.13
      },
      {
        "aspecting_planet": "Mercury",
        "aspected_planet": "Ascendant",
        "aspecting_planet_id": 3,
        "aspected_planet_id": 10,
        "type": "Square",
        "orb": 3.23,
        "diff": 93.23
      },
      {
        "aspecting_planet": "Mercury",
        "aspected_planet": "Midheaven",
        "aspecting_planet_id": 3,
        "aspected_planet_id": 11,
        "type": "Opposition",
        "orb": 7.22,
        "diff": 172.78
      },
      {
        "aspecting_planet": "Jupiter",
        "aspected_planet": "Ascendant",
        "aspecting_planet_id": 4,
        "aspected_planet_id": 10,
        "type": "Trine",
        "orb": 1.94,
        "diff": 118.06
      },
      {
        "aspecting_planet": "Venus",
        "aspected_planet": "Pluto",
        "aspecting_planet_id": 5,
        "aspected_planet_id": 9,
        "type": "Square",
        "orb": 4.49,
        "diff": 94.49
      },
      {
        "aspecting_planet": "Saturn",
        "aspected_planet": "Midheaven",
        "aspecting_planet_id": 6,
        "aspected_planet_id": 11,
        "type": "Trine",
        "orb": 2.64,
        "diff": 117.36
      },
      {
        "aspecting_planet": "Uranus",
        "aspected_planet": "Neptune",
        "aspecting_planet_id": 7,
        "aspected_planet_id": 8,
        "type": "Conjunction",
        "orb": 1.22,
        "diff": 1.22
      },
      {
        "aspecting_planet": "Uranus",
        "aspected_planet": "Pluto",
        "aspecting_planet_id": 7,
        "aspected_planet_id": 9,
        "type": "Sextile",
        "orb": 5.57,
        "diff": 54.43
      },
      {
        "aspecting_planet": "Uranus",
        "aspected_planet": "Midheaven",
        "aspecting_planet_id": 7,
        "aspected_planet_id": 11,
        "type": "Square",
        "orb": 0.65,
        "diff": 90.65
      },
      {
        "aspecting_planet": "Neptune",
        "aspected_planet": "Pluto",
        "aspecting_planet_id": 8,
        "aspected_planet_id": 9,
        "type": "Sextile",
        "orb": 4.35,
        "diff": 55.65
      },
      {
        "aspecting_planet": "Neptune",
        "aspected_planet": "Midheaven",
        "aspecting_planet_id": 8,
        "aspected_planet_id": 11,
        "type": "Square",
        "orb": 1.87,
        "diff": 91.87
      }
    ],
    "ascendant_ruler": "You have a strong value system, and you value security and longevity more than most people. Some may call you stubborn and fixed, as you do have a way of establishing routines and getting set in your ways. ",
    "moon_phase": {
      "moon_phase_name": "Crescent Moon",
      "moon_phase_id": 2,
      "moon_phase_calc": "You were born under a Crescent Moon.",
      "moon_phase_description": "Your life will be defined by your ability to take risks and break through the confines that would otherwise hold you back. Engaging with a struggle that feels important for you will be key to feeling sucessful. "
    },
    "hemisphere": {
      "east_west": {
        "description": "Eastern hemisphere is emphasised in your birth chart. You are self motivated, action oriented, and self-assertive. You tend to believe strongly in free will.",
        "id": 1
      },
      "north_south": {
        "description": "Northern hemisphere is emphasised in your birth chart which is the personal and subjective portion of the chart. Therefore, you tend to be private and more subjective.",
        "id": 1
      }
    },
    "elements": {
      "elements": [
        {
          "name": "Fire",
          "percentage": 8.333
        },
        {
          "name": "Earth",
          "percentage": 25
        },
        {
          "name": "Air",
          "percentage": 50
        },
        {
          "name": "Water",
          "percentage": 16.666
        }
      ],
      "description": "You have preponderence of Air element in your birth chart. It denotes a strong emphasis on thought, ideas and intellectual pursuits of one sort or another. Your interests are varied, and you're apt to be a life-long student.",
      "dominant_element_id": 3
    },
    "modes": {
      "modes": [
        {
          "name": "Cardinal",
          "percentage": 33.333
        },
        {
          "name": "Fixed",
          "percentage": 25
        },
        {
          "name": "Mutable",
          "percentage": 41.666
        }
      ],
      "description": "You have preponderence of Mutable mode in your birth chart. This denotes adaptability, and you may be so changeable that it is almost impossible to pin you down.",
      "dominant_mode_id": 3
    },
    "polarity": {
      "positive": 61.538,
      "negative": 46.153,
      "report": "The positive polarity has an extroverted and upbeat quality, being outwardly oriented and needing the stimulus of external activity and interaction. You like to be involved with the busy flow of things, needing stimulus from the world out there. Spending reflective time alone is much more of a challenge."
    },
    "dominant_sign": {
      "sign_id": 10,
      "sign_name": "Capricorn",
      "percentage": 18.05
    }

  });
  const [handle] = useState(() => delayRender());

  // const ApiCall = useCallback(async () => {
  //   let data = {};
  //   const allApiCall = await Promise.all(apinames.map(async (item, i) => { return await FetchApi(item, userdetail) }))
  //   for (let i = 0; i < (allApiCall).length; i++) {
  //     data["data"][i] = allApiCall[i]
  //   }
  //   // const details = await FetchApi({apiName:"natal_chart_interpretation",userData:JSON.parse(userdata)});
  //   setData(data);

  //   continueRender(handle);
  // }, [handle]);

  // useEffect(() => {
  //   ApiCall();
  // }, [ApiCall]);

  return (
    <div>
      <Series>
        <Series.Sequence durationInFrames={160}>
          <BgTransition type="in" bgcolor="bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500">
            <Transition type="out">
              <CircleSvg chart_url={data.chart_url} />
            </Transition>
          </BgTransition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={120}>
          <Transition type="out">
            <Zodiac data={data.planets} />
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={60}>
          <Transition type="out">
            <KeyTitle />
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={100}>
          <Transition type="out">
            <KeyFetures type="moon" data={data.moon_phase} chart_url={data.chart_url} />
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={100}>
          <Transition type="out">
            <KeyFetures type="element" data={data.elements} />
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={100}>
          <Transition type="out">
            <KeyFetures type="hemisphere" data={data.hemisphere.east_west} chart_url={data.chart_url} />
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={100}>
          <Transition type="out">
            <KeyFetures type="hemisphere2" data={data.hemisphere.north_south} chart_url={data.chart_url} />
          </Transition>
        </Series.Sequence>
        <Series.Sequence durationInFrames={100}>
          <Transition type="out">
            <KeyFetures type="modes" data={data.modes} chart_url={data.chart_url} />
          </Transition>
        </Series.Sequence>
      </Series>
    </div>

  )
}
