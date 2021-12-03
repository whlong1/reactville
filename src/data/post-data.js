export const initialPOBoxes = {
  0: {
    boxHolders: ['Jordan Walke', 'Dan Abramov', 'Rachel Nabors', 'Brian Vaughn'],
    letters: [0, 1, 2]
  },
  1: {
    boxHolders: ['David Stinson', 'Shahzad Khan', 'Samantha Solomon', 'Hunter Long'],
    letters: [3]
  },
}

export const initialLetters = {
  0: {
    content: 'Hello Mr. Abramov, please finish the new React docs. Thanks.',
    date: "11/23/2021",
    read: false,
    sender: 'Hunter Long',
    recipient: 'Dan Abramov',
    subject: 'React Docs',
  },
  1: {
    content: 'Mr. Abramov, still need those docs. Thanks.',
    date: "11/24/2021",
    read: false,
    sender: 'Hunter Long',
    recipient: 'Dan Abramov',
    subject: 'React Docs Pt. 2',
  },
  2: {
    content: "I'm not going to be ignored, Dan.",
    date: "11/25/2021",
    read: false,
    sender: 'Hunter Long',
    recipient: 'Dan Abramov',
    subject: 'Losing Patience',
  },
  3: {
    content: "When are you going to come over again and hang out with your mother and I?",
    date: "11/27/2021",
    read: true,
    sender: "Ben Manley",
    recipient: "David Stinson",
    subject: "Hello, son.",
  }
}
