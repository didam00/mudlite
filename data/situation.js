data.situation = [
  {
    id: "start1",
    text: [""],
    answer: [
      "장검", "단검", "지팡이", "너클"
    ],
    effect: [
      () => {me.weapon = "장검"},
      () => {me.weapon = "단검"},
      () => {me.weapon = "지팡이"},
      () => {me.weapon = "너클"},
    ],
    publicEffect: () => {
      inf.situation = "start2"
    }
  },
]