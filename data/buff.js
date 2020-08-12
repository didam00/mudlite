data.buff = [
  {
    id: "분노",
    starting: () => { // 버프를 얻으면 실행
      setStat('attack','0!','분노버프')
    },
    ending: () => { // 버프를 잃으면 실행
      setStat('attack','0!','분노버프')
    },
    tick: () => { // 매 턴 마다 고정적으로 실행됨. (전에 실행했던걸 제거 => 새로 다시 실행)
      me.attack.total -= me.attack['분노버프']
      // 중간에 total에서 값을 빼는 이유는 이것을 실행시키는 중간에 tick이 실행이 안돼 total이 업데이트되지 않는다.
      // 업데이트되지 않는다면 10%를 추가하는 상황에서 total이 100으로 초기화되는 것이 120으로 돼있어 추가값을 얻는다.
      // 이곳에 추가해야만 값이 0이 되기전에 뺄 수 있다.
      // 이거 찾는데만 한시간 걸렸다.
      setStat('attack','0!','분노버프')
      // console.log(me.attack.total)
      setStat('attack','20%','분노버프')
      // console.log(me.attack['분노버프'])
      // 중첩되면 이상하게 변하지만 나는 모르겠다...
    },
    tag: ["debuff"]
  },
  {
    id: "방전",
    starting: () => {
      setStat('attack','0!','방전버프')
      setStat('evade','0!','방전버프')
    },
    ending: () => {
      setStat('attack','0!','방전버프')
      setStat('evade','0!','방전버프')
    },
    tick: () => {
      me.attack.total -= me.attack['방전버프']
      me.evade.total -= me.evade['방전버프']
      setStat('attack','0!','방전버프')
      setStat('evade','0!','방전버프')
      setStat('attack','-50%','방전버프')
      setStat('evade','-50%','방전버프')
    },
    tag: ["debuff"]
  },
  {
    id: "포만감",
    starting: () => {
      setStat('maxenergy','100%','포만감')
    },
    ending: () => {
      setStat('maxenergy','0!','포만감')
    },
    tick: () => {
      
    },
    tag: ["debuff"]
  },
]