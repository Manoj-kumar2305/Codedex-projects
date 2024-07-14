let month = Math.floor(Math.random() * 12) + 1;

let horoscope = {
    1: 'Capricorn',
    2: 'Aquarius',
    3: 'Pisces',
    4: 'Aries',
    5: 'Taurus',
    6: 'Gemini',
    7: 'Cancer',
    8: 'Leo',
    9: 'Virgo',
    10: 'Libra',
    11: 'Scorpio',
    12: 'Sagittarius'
}

console.log("your sign is: "+horoscope[month]);