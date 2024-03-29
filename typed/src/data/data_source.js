const features = [
  {
    title: "Well Structured Exercises",
    description:
      "Typed offers you well structured Exercises for learning typing which are relevant to your type of work.",
  },
  {
    title: "Realtime Progress Tracking",
    description:
      "Typed offers you a realtime progress tracking feature to track your progress and improve your typing speed and accuracy.",
  },
  {
    title: "Leaderboard",
    description:
      "Typed offers you a leaderboard to compare your typing speed and accuracy with others.",
  },
  {
    title: "Typing Games",
    description:
      "Typed offers you typing games to make learning typing fun and engaging.",
  },
];

const pricing = [
  {
    title: "Free",
    description:
      "Typed offers you a free plan to learn typing and improve your speed and accuracy.",
  },
  {
    title: "Premium",
    description:
      "Typed offers you a premium plan to access advanced features and improve your typing speed and accuracy.",
  },
  {
    title: "Enterprise",
    description:
      "Enterprise offer for its stuff members or adding it as part of their project ",
  },
];

const prizes_types = [
  {
    type: "Monthly",
    prizes_types: [
      {
        position: 1,
        prize: "1000",
        description: "The person with most engagements in the month",
      },
      {
        position: 2,
        prize: "500",
        description: "The person with second most engagements in the month",
      },
      {
        position: 3,
        prize: "250",
        description: "The person with third most engagements in the month",
      },
    ],
  },
  {
    type: "Weekly",
    prizes_types: [
      {
        position: 1,
        prize: "500",
        description: "The person with most engagements in the week",
      },
      {
        position: 2,
        prize: "250",
        description: "The person with second most engagements in the week",
      },
      {
        position: 3,
        prize: "100",
        description: "The person with third most engagements in the week",
      },
    ],
  },
];

const current_winners = [
  {
    position: 1,
    name: "John Doe",
    prize: "1000",
    type: "Monthly",
  },
  {
    position: 2,
    name: "Jane Doe",
    prize: "500",
    type: "Monthly",
  },
  {
    position: 3,
    name: "John Doe",
    prize: "250",
    type: "Monthly",
  },
];

const challenges = [
  {
    title: "Alphabets",
    description: "Learning Typing of english alphabets from A to Z",
    completion: 47,
    rated: "easy",
  },
  {
    title: "Words",
    description: "Learning Typing of english words",
    completion: 32,
    rated: "medium",
  },
  {
    title: "Sentences",
    description: "Learning Typing of english sentences",
    completion: 15,
    rated: "hard",
  },
  {
    title: "Paragraphs",
    description: "Learning Typing of english paragraphs",
    completion: 5,
    rated: "hard",
  },
  {
    title: "Programming",
    description: "Learning Typing of programming languages",
    completion: 2,
    rated: "hard",
  },
  {
    title: "Shorthand",
    description: "Learning Typing of shorthand",
    completion: 0,
    rated: "hard",
  },
];

const data_source = {
  headline: "Welcome to Typed",
  subheadline:
    "The best place to learn typing and improve your speed and accuracy",
  features: features,
  pricing: pricing,
  prizes: prizes_types,
  winners: current_winners,
};

export { data_source, challenges };
