/* eslint-disable no-param-reassign */

export const amplifyMagic = {
  field: 'amplifyMagic',
  name: 'Amplify Magic (with +50% talent)',
  description: 'Amplifies magic used against the targeted party member, increasing damage taken from spells by up to 90(135) and healing spells by up to 180(270)',
  effect: ({ character }) => {
    character.healing = +character.healing + 270;
  },
};

export const lifebloomStacks = {
  field: 'lifebloomStacks',
  name: 'Lifebloom Stacks (leave on)',
  description: 'Temp fix to show lifebloom stacks.',
  effect: ({ rank, modifiedRank, modifiedSpell }) => {
    if (rank.rank === 2){
      modifiedRank.hotTick *=2;
      modifiedRank.hotTick -=.1;
      modifiedSpell.bonusHotCo *=2;
    }
    if (rank.rank === 3){
      modifiedRank.hotTick *= 3.0;
      modifiedRank.hotTick -=.1;
      modifiedSpell.bonusHotCo *=3;
    }
  },
};


export const lifebloomHoT = {
  field: 'lifebloomHoT',
  name: 'Lifebloom HoT Only',
  description: 'Shows only the HoT portion of LB',
  effect: ({ rank, spell, modifiedRank, modifiedSpell }) => {
    modifiedSpell.direct = false;
    modifiedRank.min =0;
    modifiedRank.max=0;
  },
};


export const improvedRegrowth = {
  field: 'improvedRegrowth',
  name: 'Improved Regrowth',
  description: 'Increases the critical effect chance of your Regrowth spell by 50%.',
  effect: ({ character }) => { character.crit = Math.min(100, (+character.crit + 50)); },
};

export const naturalPerfection = {
  field: 'naturalPerfection',
  name: 'Natural Perfection',
  description: 'Your crit chance with all spells is increased by 3%.',
  effect: ({ character }) => { character.crit = Math.min(100, (+character.crit + 3)); },
};

export const giftOfNature = {
  field: 'giftOfNature',
  name: 'Gift of Nature',
  description: 'Increases the effect of all healing spells by 10%.',
  effect: ({ modifiedRank, rank, modifiedSpell, spell, character }) => {
    modifiedRank.min += rank.min * 0.1;
    modifiedRank.max += rank.max * 0.1;
    modifiedRank.hotTick += rank.hotTick * 0.1;
    modifiedSpell.hotCoefficient += spell.hotCoefficient * .1

    modifiedSpell.coefficient += modifiedSpell.coefficient * .1
    // if( spell.name === "Regrowth"){
    //   modifiedSpell.bonusDirect *= 1.1;
    //   modifiedSpell.bonusHotCo *= 1.1;
    // }
    // else{
    // modifiedSpell.bonusHotCo *= 1.1; //+= .1
    //   // modifiedSpell.bonusDirect = modifiedSpell.bonusDirect *1.1
    // }
  },
};

export const naturesGrace = {
  field: 'naturesGrace',
  name: 'Nature\'s Grace',
  description: 'All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec.',
  effect: ({ modifiedRank, character }) => { modifiedRank.castTime -= (0.5 * (character.crit / 100)); },
};

export const moonglow = {
  field: 'moonglow',
  name: 'Moonglow',
  description: 'Reduces the Mana cost of your Moonfire, Starfire, Wrath, Healing Touch, Regrowth and Rejuvenation spells by 9%.',
  effect: ({ modifiedRank, rank }) => { modifiedRank.mana -= rank.mana * 0.09; },
};

export const tranquilSpirit = {
  field: 'tranquilSpirit',
  name: 'Tranquil Spirit',
  description: 'Reduces the mana cost of your Healing Touch and Tranquility spells by 10%.',
  effect: ({ modifiedRank, rank }) => { modifiedRank.mana -= rank.mana * 0.1; },
};

export const improvedRejuvenation = {
  field: 'improvedRejuvenation',
  name: 'Improved Rejuvenation',
  description: 'Increases the effect of your Rejuvenation spell by 15%.',
  effect: ({ modifiedRank, rank, modifiedSpell, character, spell }) => {
    modifiedRank.hotTick += rank.hotTick * 0.15;
    // modifiedSpell.bonusHotCo *= 1.15;
    modifiedSpell.hotCoefficient += spell.hotCoefficient * .15
    console.log("***********************" + modifiedRank.hotTick)
  },
};

export const empoweredRejuvenation = {
  field: 'empoweredRejuvenation',
  name: 'Empowered Rejuvenation',
  description: 'The bonus healing of your HoT spells is increased by 20%.',
  effect: ({ modifiedRank, rank, modifiedSpell, spell, character }) => {
    // modifiedSpell.bonusHotCo *= 1.20;
    if(spell.name === "Rejuvenation"){
      modifiedSpell.hotCoefficient = modifiedSpell.hotCoefficient + .2
    }
    // if(spell.name === "Regrowth"){
    else{
      modifiedSpell.bonusDirect *= 1.2;
      modifiedSpell.bonusHotCo *= 1.2;
    }
  },
};

export const improvedHealingTouch = {
  field: 'improvedHealingTouch',
  name: 'Improved Healing Touch',
  description: 'Reduces the cast time of your Healing Touch spell by 0.5 sec.',
  effect: ({ modifiedRank }) => { modifiedRank.castTime -= 0.5; },
};

export const empoweredTouch = {
  field: 'empoweredTouch',
  name: 'Empowered Touch',
  description: 'Your Healing Touch spell gains an additional 20% of your bonus healing',
  effect: ({ modifiedSpell }) => { modifiedSpell.bonusDirect = modifiedSpell.bonusDirect * 1.2; },
};

export const t2Druid8set = {
  field: 't2Druid8set',
  name: 'T2 8 Set Bonus',
  description: 'Increases the duration of your Rejuvenation spell by 3 sec.',
  effect: ({ modifiedRank }) => { modifiedRank.duration = 15; },
};

export const t2Druid5set = {
  field: 't2Druid5set',
  name: 'T2 5 Set Bonus',
  description: 'Reduces Regrowth cast time by .2 seconds',
  effect: ({ modifiedRank }) => { modifiedRank.castTime = modifiedRank.castTime- 0.2; },
};

export const t3Druid4set = {
  field: 't3Druid4set',
  name: 'T3 4 Set Bonus',
  description: 'Reduces the mana cost of your Healing Touch, Regrowth, Rejuvenation, and Tranquility spells by 3%',
  effect: ({ modifiedRank, rank }) => { modifiedRank.mana -= rank.mana * 0.03; },
};

export const t3Druid8set = {
  field: 't3Druid8set',
  name: 'T3 8 Set Bonus',
  description: 'On Healing Touch critical hits, you regain 30% of the mana cost of the spell',
  effect: ({ modifiedRank, character, rank }) => { modifiedRank.mana -= ((character.crit / 100) * rank.mana * 0.3); },
};

export const treeOfLifeForm = {
  field: 'treeOfLifeForm',
  name: 'Tree Of Life Form',
  description: 'You can only cast Swiftmend, Innervate, Natures Swiftness, Rebirth, Barkskin, poison removing and healing over time spells, but the mana cost of these spells is reduced by 20%. ',
  effect: ({ modifiedRank, rank}) => { modifiedRank.mana -= rank.mana * 0.2; },
};

export const treeOfLifeAura = {
  field: 'treeOfLifeAura',
  name: 'Tree Of Life Aura',
  description: 'While in this form you increase healing received by 25% of your total Spirit for all party members within 45 yards',
  effect: ({ character }) => {
    character.healing = +character.healing + (character.spirit * 0.25);
  },
};

export const idolOfHealth = {
  field: 'idolOfHealth',
  name: 'Idol of Health',
  description: 'Increase the amount healed by Healing Touch by 100',
  effect: ({ modifiedRank, rank }) => {
    modifiedRank.min += 100;
    modifiedRank.max += 100; },
};

export const idolOfTheEmeraldQueen = {
  field: 'idolOfTheEmeraldQueen',
  name: 'Idol Of The Emerald Queen',
  description: 'Increase the periodic healing of your Lifebloom by up to 88',
  effect: ({ modifiedRank}) => { modifiedRank.hotTick += 12.57; },
};

export const idolOfLongevity = {
  field: 'idolOfLongevity',
  name: 'Idol of Longevity',
  description: 'Gain up to 25 mana each time you cast Healing touch',
  effect: ({ modifiedRank, modifiedSpell }) => {
    const lowLevelPenalty = (1 - ((20 - Math.min(modifiedRank.level, 20)) * 0.0375));
    const coefficient = (Math.min(modifiedRank.castTime, 3.5) / 3.5) * lowLevelPenalty;
    const directCoefficient = modifiedSpell.coefficient ? (modifiedSpell.coefficient * lowLevelPenalty) : coefficient;
    modifiedRank.mana = Math.max(modifiedRank.mana - (25 * directCoefficient), 1);
  },
};



















export const healingLight = {
  field: 'healingLight',
  name: 'Healing Light',
  description: 'Increases the amount healed by your Holy Light and Flash of Light spells by 12%.',
  effect: ({ modifiedRank, rank }) => { modifiedRank.min += rank.min * 0.12; modifiedRank.max += rank.max * 0.12; },
};

export const illumination = {
  field: 'illumination',
  name: 'Illumination',
  description: 'After getting a critical effect from your Flash of Light, Holy Light, or Holy Shock heal spell, gives you a 100% chance to gain Mana equal to the base cost of the spell.',
  effect: ({ modifiedRank, rank, character }) => { modifiedRank.mana -= ((character.crit / 100) * rank.mana); },
};

export const blessingOfLight = {
  field: 'blessingOfLight',
  name: 'Blessing of Light',
  description: 'Increases the effects of Holy Light spells used on the target by up to 400 and the effect Flash of Light spells used on the target by up to 115.',
  effect: ({ modifiedRank, rank, spell }) => {
    if (spell.name === 'Flash Of Light') {
      modifiedRank.min += 115;
      modifiedRank.max += 115;
    } else if (spell.name === 'Holy Light') {
      const holyLightCoefficients = [0.0, 0.2, 0.4, 0.7, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
      modifiedRank.min += (holyLightCoefficients[rank.rank] * 400);
      modifiedRank.max += (holyLightCoefficients[rank.rank] * 400);
    }
  },
};

export const mentalAgility = {
  field: 'mentalAgility',
  name: 'Mental Agility',
  description: 'Reduces the mana cost of your instant cast spells by 10%.',
  effect: ({ modifiedRank, rank }) => { modifiedRank.mana -= rank.mana * 0.1; },
};

export const improvedRenew = {
  field: 'improvedRenew',
  name: 'Improved Renew',
  description: 'Increases the amount healed by your Renew spell by 15%.',
  effect: ({ modifiedRank, rank }) => { modifiedRank.hotTick +=  rank.hotTick * 0.15; },
};

export const divineFury = {
  field: 'divineFury',
  name: 'Divine Fury',
  description: 'Reduces the casting time of your Smite, Holy Fire, Heal and Greater Heal spells by 0.5 sec.',
  effect: ({ modifiedRank }) => { modifiedRank.castTime -= 0.5; },
};

export const improvedHealing = {
  field: 'improvedHealing',
  name: 'Improved Healing',
  description: 'Reduces the Mana cost of your Lesser Heal, Heal, and Greater Heal spells by 15%.',
  effect: ({ modifiedRank, rank }) => { modifiedRank.mana -= rank.mana * 0.15; },
};

export const spiritualHealing = {
  field: 'spiritualHealing',
  name: 'Spiritual Healing',
  description: 'Increases the amount healed by your healing spells by 10%.',
  effect: ({ modifiedRank, rank }) => {
    modifiedRank.min += rank.min * 0.1;
    modifiedRank.max += rank.max * 0.1;
    modifiedRank.hotTick += rank.hotTick * 0.1;
  },
};

export const improvedPrayerOfHealing = {
  field: 'improvedPrayerOfHealing',
  name: 'Improved Prayer Of Healing',
  description: 'Reduces the Mana cost of your Prayer of Healing spell by 20%.',
  effect: ({ modifiedRank, rank }) => { modifiedRank.mana -= rank.mana * 0.2; },
};

export const t2Priest8set = {
  field: 't2Priest8set',
  name: 'T2 8 Set Bonus',
  description: 'Your Greater Heals now have a heal over time component equivalent to a rank 5 renew.',
  effect: ({ modifiedRank, modifiedSpell }) => { modifiedRank.hotTick = 315/5; modifiedRank.duration = 15; modifiedSpell.hot = true; },
};

export const improvedHealingWave = {
  field: 'improvedHealingWave',
  name: 'Improved Healing Wave',
  description: 'Reduces the casting time of your Healing Wave spell by 0.5 sec.',
  effect: ({ modifiedRank }) => { modifiedRank.castTime -= 0.5; },
};

export const tidalFocus = {
  field: 'tidalFocus',
  name: 'Tidal Focus',
  description: 'Reduces the Mana cost of your healing spells by 5%.',
  effect: ({ modifiedRank, rank }) => { modifiedRank.mana -= rank.mana * 0.05; },
};

export const healingWay = {
  field: 'healingWay',
  name: 'Healing Way',
  description: 'Your Healing Wave spells have a 100% chance to increase the effect of subsequent Healing Wave spells on that target by 6% for 15 sec.',
  effect: ({ modifiedRank, rank }) => {
    modifiedRank.min += rank.min * 0.06;
    modifiedRank.max += rank.max * 0.06;
    modifiedRank.hotTick += rank.hotTick * 0.06;
  },
};

export const purification = {
  field: 'purification',
  name: 'Purification',
  description: 'Increases the effectiveness of your healing spells by 10%.',
  effect: ({ modifiedRank, rank }) => {
    modifiedRank.min += rank.min * 0.1;
    modifiedRank.max += rank.max * 0.1;
    modifiedRank.hotTick += rank.hotTick * 0.1;
  },
};

export const improvedShadowBolt = {
  field: 'improvedShadowBolt',
  name: 'Improved Shadow Bolt',
  description: 'Your Shadow Bolt critical strikes increase Shadow Damage dealt to the target by 20% until 4 non-periodic damage sources are applied.',
  effect: ({ modifiedRank, character }) => {
    const bonus = ((((100 - character.crit) / 100) ** 4) * 0.2) + 1;
    modifiedRank.min *= bonus;
    modifiedRank.max *= bonus;
    modifiedRank.hotTick *= bonus;
    character.damage *= bonus;
  },
};

export const cataclysm = {
  field: 'cataclysm',
  name: 'Cataclysm',
  description: 'Reduce the mana cost of your Destruction spells by 5%.',
  effect: ({ modifiedRank, rank }) => {
    modifiedRank.mana -= rank.mana * 0.05;
  },
};

export const bane = {
  field: 'bane',
  name: 'Bane',
  description: 'Reduce the casting time of your Shadow Bolt and Immolate spells by 0.5 sec and your Soul Fire spell by 2.0 sec.',
  effect: ({ modifiedRank }) => {
    modifiedRank.castTime -= 0.5;
  },
};

export const shadowMastery = {
  field: 'shadowMastery',
  name: 'Shadow Mastery',
  description: 'Increases the damage dealt or life drained by your shadow spells by 10%.',
  effect: ({ modifiedRank, rank, character }) => {
    modifiedRank.min += rank.min * 0.1;
    modifiedRank.max += rank.max * 0.1;
    modifiedRank.dot += rank.dot * 0.1;
    character.damage *= 1.1;
  },
};

export const demonicSacrifice = {
  field: 'demonicSacrifice',
  name: 'Demonic Sacrifice',
  description: 'Increases your shadow damage by 15%.',
  effect: ({ modifiedRank, rank, character }) => {
    modifiedRank.min += rank.min * 0.15;
    modifiedRank.max += rank.max * 0.15;
    modifiedRank.dot += rank.dot * 0.15;
    character.damage *= 1.15;
  },
};

export const ruin = {
  field: 'ruin',
  name: 'Ruin',
  description: 'Increases the critical strike damage bonus of your destruction spells by 100%.',
  effect: ({ modifiedSpell }) => {
    modifiedSpell.critMultiplier = 1.0;
  },
};


