let myResume={
    "personalInfo": {
      "name": "Naveen B",
      "email": "naveenb13598@gmail.com",
      "phone": 8838578802,
      "degree": "B.E",
      "location": {
        "address": "15/16 Nyniappan street Chintadripet",
        "postalCode": 600030,
        "city": "Chennai",
        "state": "Tamilnadu",
        "country": "India"
      },
      "profiles": [
        {
          "github":"https://github.com/naveenb13"
        }
      ]
    },
    "work": [
      {
        "company": "Schneider Electric",
        "position": "GET",
        "startDate": "2020-11-04",
        "endDate": "2021-08-15",
      },
    ],
    "education": [
      {
        "institution": "Jeppiaar Maamallan Engineering College",
        "department": "Mechanical",
        "studyType": "fulltime",
        "batch start year": 2015,
        "batch end year": 2019,
        "gpa": 7.5,
      }
    ],
    "skills": [
      {
        "name": "javascript",
        "level": "begineer",
      }
    ],
    "languages": [
      {
        "language": "Tamil,English,Japanese",
      }
    ],
    "interests": [
      {
        "name": "Playing Cricket",
      }
    ]
  }

  let myresumeJSON = JSON.stringify(myResume);
  console.log(myresumeJSON);